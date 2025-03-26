import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Recipient of the notification
        title: { type: String, required: true }, // Notification title
        message: { type: String, required: true }, // Notification body
        type: {
            type: String,
            enum: ["course", "assignment", "payment", "announcement"],
            required: true,
        }, // Type of notification
        isRead: { type: Boolean, default: false }, // Read/unread status
    },
    { timestamps: true }
);

export const Notification = mongoose.model("Notification", notificationSchema);
