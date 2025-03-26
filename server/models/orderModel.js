import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Buyer (Student)
        courses: [
            {
                course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
                price: { type: Number, required: true }, // Course price at the time of purchase
                discount: { type: Number, default: 0 }, // Discount applied
            },
        ],
        totalAmount: { type: Number, required: true }, // Total amount paid
        paymentStatus: { type: String, enum: ["pending", "completed", "failed"], default: "pending" }, // Payment status
        paymentMethod: { type: String, enum: ["card", "paypal", "upi", "bank"], required: true }, // Payment mode
        transactionId: { type: String }, // Transaction reference ID
        sessionId: { type: String, required: true }// Session ID from payment gateway
    },
    { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
