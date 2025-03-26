import mongoose from "mongoose";

const enrollmentSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Student enrolled
        course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Enrolled course
        progress: { type: Number, default: 0 }, // Progress percentage
        status: { type: String, enum: ["ongoing", "completed"], default: "ongoing" }, // Course status
    },
    { timestamps: true }
);

export const Enrollment = mongoose.model("Enrollment", enrollmentSchema);
