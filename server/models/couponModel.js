import mongoose from "mongoose";

const couponSchema = new mongoose.Schema(
    {
        code: { type: String, required: true, unique: true, uppercase: true }, // Unique coupon code
        discountType: { type: String, enum: ["percentage", "fixed"], required: true }, // Type of discount
        discountValue: { type: Number, required: true }, // Discount amount
        maxUses: { type: Number, default: 1 }, // Max times the coupon can be used
        usedCount: { type: Number, default: 0 }, // Tracks how many times used
        expiresAt: { type: Date, required: true }, // Expiry date
        applicableCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // Restrict to certain courses
        createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Admin", required: true }, // Who created the coupon
        isActive: { type: Boolean, default: true }, // Toggle coupon status
    },
    { timestamps: true }
);

// 🔹 Middleware: Auto-deactivate expired coupons
couponSchema.pre("save", function (next) {
    if (this.expiresAt < new Date()) {
        this.isActive = false;
    }
    next();
});

// 🔹 Method: Check if coupon is valid
couponSchema.methods.isValid = function () {
    return this.isActive && this.usedCount < this.maxUses && this.expiresAt > new Date();
};

export const Coupon = mongoose.model("Coupon", couponSchema);
