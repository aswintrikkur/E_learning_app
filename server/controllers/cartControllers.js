import { Course } from "../models/courseModel.js";
import cron from "node-cron";
// import {Cart} from "../models/cartModel.js";
import { Cart } from "../models/cartModel.js";

export const getCart = async (req, res) => {
    try {
        const userId = req.user.id;

        const cart = await Cart.findOne({ userId }).populate("courses.courseId");
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        res.status(200).json({ data: cart, message: "cart fetched successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const addCourseToCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { courseId } = req.body;

        // Find the course to ensure it exists and fetch its price
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: "Course not found" });
        }

        // Find the user's cart or create a new one if it doesn't exist
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            cart = new Cart({ userId, courses: [] });
        }

        // Check if the course is already in the cart
        const courseExists = cart.courses.some((item) => item.courseId.equals(courseId));
        if (courseExists) {
            return res.status(400).json({ message: "Course already in cart" });
        }

        // Add the course to the cart
        cart.courses.push({
            courseId,
            price: course.price,
        });

        // Recalculate the total price
        cart.calculateTotalPrice();

        await cart.save();

        res.status(200).json({ data: cart, message: "course added to cart" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const removeCourseFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const { courseId } = req.body;

        // Find the user's cart
        let cart = await Cart.findOne({ userId });
        if (!cart) {
            return res.status(404).json({ message: "Cart not found" });
        }

        // Remove the course from the cart
        cart.courses = cart.courses.filter((item) => !item.courseId.equals(courseId));

        // Recalculate the total price
        cart.calculateTotalPrice();

        // Save the cart
        await cart.save();

        res.status(200).json({ data: cart, message: "course removed form cart" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

// Function to delete carts that are inactive for more than 24 hours
const deleteOldCarts = async () => {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    try {
        // Delete only carts where status is NOT "active" and updatedAt is older than 24 hours
        const result = await Cart.deleteMany({
            status: { $ne: "active" }, // Ensures only inactive carts are deleted
            updatedAt: { $lt: twentyFourHoursAgo },
        });

        console.log(`Deleted ${result.deletedCount} inactive carts.`);
    } catch (error) {
        console.error("Error deleting old carts:", error);
    }
};

// Schedule the cron job to run every 24 hours at midnight UTC
cron.schedule(
    "0 0 * * *",
    () => {
        console.log("Running cart cleanup job...");
        deleteOldCarts();
    },
    {
        scheduled: true,
        timezone: "UTC",
    }
);

export default deleteOldCarts;
