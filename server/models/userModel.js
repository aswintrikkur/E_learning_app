import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },

        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
            lowercase: true,
            trim: true,
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],
        },

        profileImage: {
            type: String, // Store URL of the image
            default: "https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg",
        },

        bio: {
            type: String,
            trim: true,
        },

        phone: {
            type: String,
            trim: true,
        },

        address: {
            country: String,
            state: String,
            city: String,
            zipCode: String,
        },

        dateOfBirth: { type: Date },

        socialAuth: {
            googleId: { type: String, unique: true, sparse: true },
            facebookId: { type: String, unique: true, sparse: true },
        },

        isVerified: { type: Boolean, default: false }, // Email verification flag

        verificationToken: { type: String }, // Token for email verification

        resetPasswordToken: { type: String }, // Token for password reset

        resetPasswordExpires: { type: Date }, // Expiry for password reset token

        isDeleted: { type: Boolean, default: false }, // Soft delete flag

        isOnline: { type: Boolean, default: false }, // Track mentor's online status

        isActive: { type: Boolean, default: true }, // Activate and Deactivate account

        lastLogin: { type: Date }, // Track last login timestamp
    },
    { timestamps: true }
);

// 🔹 Hash Password Before Saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// 🔹 Compare Password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// 🔹 Soft Delete Method
userSchema.methods.softDelete = function () {
    this.isDeleted = true;
    return this.save();
};

// 🔹 Restore Deleted Account
userSchema.methods.restoreAccount = function () {
    this.isDeleted = false;
    return this.save();
};

// 🔹 Generate Email Verification Token
userSchema.methods.generateVerificationToken = function () {
    this.verificationToken = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
    return this.verificationToken;
};

// 🔹 Generate Password Reset Token
userSchema.methods.generatePasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.resetPasswordExpires = Date.now() + 3600000; // 1-hour expiration
    return resetToken; // Send unhashed token to user
};

// 🔹 Update online status
userSchema.methods.setOnlineStatus = async function (status) {
    this.isOnline = status;
    await this.save();
};

export const User = mongoose.model("User", userSchema);
