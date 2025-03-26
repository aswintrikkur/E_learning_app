import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, index: true }, // Reference to User

        courses: [
            {
                course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Reference to Course
                price: { type: Number, required: true }, // Course price at the time of adding
                discount: { type: Number, default: 0 }, // Discount applied
                addedAt: { type: Date, default: Date.now }, // Timestamp when course was added
            },
        ],

        totalAmount: { type: Number, default: 0 }, // Total price calculation

        status: { type: String, enum: ["active", "checkedOut", "abandoned"], default: "active" }, // Active, checked out or abandoned
    },
    { timestamps: true }
);

// 🔹 Middleware: Auto-update `totalAmount` before saving
cartSchema.pre("save", function (next) {
    this.totalAmount = this.courses.reduce((sum, item) => sum + (item.price - item.discount), 0);
    next();
});

// 🔹 Method to manually calculate total amount (if needed)
cartSchema.methods.calculateTotal = function () {
    return this.courses.reduce((sum, item) => sum + (item.price - item.discount), 0);
};

export const Cart = mongoose.model("Cart", cartSchema);
