import mongoose from "mongoose";
import bcrypt from "bcrypt";

const mentorSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },

        email: { type: String, required: true, unique: true, lowercase: true },

        password: { type: String, required: true },

        role: { type: String, enum: ["mentor", "admin"], default: "mentor" },

        expertise: [{ type: String, required: true }], // Areas of expertise

        qualification: { type: String, required: true, trim: true }, // Mentor’s qualification

        experience: { type: Number, required: true }, // Years of experience

        bio: { type: String, maxlength: 500 }, // Short bio

        profileImage: { type: String, default: "" }, // Cloudinary or other storage link

        socialLinks: {
            linkedin: { type: String },
            github: { type: String },
            twitter: { type: String },
        },

        coursesCreated: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }], // Courses created by the mentor

        isVerified: { type: Boolean, default: false }, // Email verification flag

        isDeleted: { type: Boolean, default: false }, // Soft delete flag

        isOnline: { type: Boolean, default: false }, // Track mentor's online status

        isActive: { type: Boolean, default: true }, // Activate and Deactivate account

        resetPasswordToken: { type: String, default: "" }, // For password reset
        resetPasswordExpires: { type: Date, default: null },
    },
    { timestamps: true }
);

// 🔹 Hash password before saving
mentorSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// 🔹 Compare password for login
mentorSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// 🔹 Soft delete function
mentorSchema.methods.softDelete = async function () {
    this.isDeleted = true;
    await this.save();
};

// 🔹 Update online status
mentorSchema.methods.setOnlineStatus = async function (status) {
    this.isOnline = status;
    await this.save();
};

export const Mentor = mongoose.model("Mentor", mentorSchema);
