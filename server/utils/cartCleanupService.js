import { Cart } from "../models/cartModel.js";

export const deleteOldCarts = async () => {
    const twentyFourHoursAgo = new Date();
    twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() - 24);

    try {
        // Delete carts that are NOT active and are older than 24 hours
        const result = await Cart.deleteMany({
            status: { $ne: "active" },
            updatedAt: { $lt: twentyFourHoursAgo },
        });

        console.log(`🛒 Deleted ${result.deletedCount} inactive carts.`);
    } catch (error) {
        console.error("❌ Error deleting old carts:", error);
    }
};
