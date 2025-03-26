// import { User } from "../models/userModel.js";
// import bcrypt from "bcrypt";
// import { generateToken } from "../utils/token.js";

// export const userSignup = async (req, res, next) => {
//     try {
//         console.log("hitted");

//         const { name, email, password, mobile, profilePic } = req.body;

//         if (!name || !email || !password || !mobile) {
//             return res.status(400).json({ message: "all fields are required" });
//         }

//         const isUserExist = await User.findOne({ email });

//         if (isUserExist) {
//             return res.status(400).json({ message: "user already exist" });
//         }

//         const hashedPassword = bcrypt.hashSync(password, 10);

//         const userData = new User({ name, email, password: hashedPassword, mobile, profilePic });
//         await userData.save();

//         const token = generateToken(userData._id);
//         res.cookie("token", token);

//         return res.json({ data: userData, message: "user account created" });
//     } catch (error) {
//         return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
//     }
// };

// export const userLogin = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ message: "all fields are required" });
//         }

//         const userExist = await User.findOne({ email });

//         if (!userExist) {
//             return res.status(404).json({ message: "user does not exist" });
//         }

//         const passwordMatch = bcrypt.compareSync(password, userExist.password);

//         if (!passwordMatch) {
//             return res.status(401).json({ message: "user not authenticated" });
//         }

//         const token = generateToken(userExist._id);
//         res.cookie("token", token);

//         // delete userExist._doc.password;
//         {
//             const { password, ...userDataWithoutPassword } = userExist._doc;
//             return res.json({ data: userDataWithoutPassword, message: "user login success" });
//         }
//     } catch (error) {
//         return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
//     }
// };

// export const userProfile = async (req, res, next) => {
//     try {
//         const userId = req.user.id;

//         const userData = await User.findById(userId).select("-password");
//         return res.json({ data: userData, message: "user profile fetched" });
//     } catch (error) {
//         return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
//     }
// };

// export const userLogout = async (req, res, next) => {
//     try {
//         res.clearCookie("token");

//         return res.json({ message: "user logout success" });
//     } catch (error) {
//         return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
//     }
// };

// export const checkUser = async (req, res, next) => {
//     try {
//         return res.json({ message: "user autherized" });
//     } catch (error) {
//         return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
//     }
// };

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { Course } from "../models/courseModel.js";
import { Cart } from "../models/cartModel.js";
import { Wishlist } from "../models/wishlistModel.js";
import { Review } from "../models/reviewModel.js";
import { Notification } from "../models/notificationModel.js";
import { Certificate } from "../models/certificateModel.js";

// 🔹 Utility Function: Generate JWT Token
const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// 🔹 Register User
export const registerUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = await User.create({ name, email, password: hashedPassword, role });
        const token = generateToken(user._id);

        res.status(201).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// 🔹 Login User
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id);
        res.json({ user, token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// 🔹 Logout User
export const logoutUser = async (req, res) => {
    res.json({ message: "Logged out successfully" });
};

// 🔹 Get User Profile
export const getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// 🔹 Update Profile
export const updateProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findById(req.user.userId);

        if (!user) return res.status(404).json({ message: "User not found" });

        user.name = name || user.name;
        user.email = email || user.email;
        await user.save();

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// 🔹 Change Password
export const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User.findById(req.user.userId);

        if (!user || !(await bcrypt.compare(currentPassword, user.password))) {
            return res.status(400).json({ message: "Incorrect current password" });
        }

        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: "Password changed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// 🔹 Delete Account
export const deleteAccount = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.userId);
        res.json({ message: "Account deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// 🔹 Get My Courses
export const getMyCourses = async (req, res) => {
    try {
        const courses = await Course.find({ enrolledStudents: req.user.userId });
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

// 🔹 Enroll in a Course
export const enrollCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.courseId);
        if (!course) return res.status(404).json({ message: "Course not found" });

        course.enrolledStudents.push(req.user.userId);
        await course.save();

        res.json({ message: "Enrolled successfully", course });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};
