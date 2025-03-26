import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        level: {
            type: String,
            enum: ["Beginner", "Intermediate", "Advanced"],
            required: true,
        },
        language: {
            type: String,
            default: "English",
        },
        price: {
            type: Number,
            required: true,
        },
        tags: {
            type: [String], // Example: ["JavaScript", "React", "MongoDB"]
            default: [],
        },
        image: {
            type: String, // Cover image for the course
            default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_pSWv2pNwyER1AQ5DZwmCciBWhuZKnowUw&s",
        },
        imageGroup: {
            type: [String], // Additional course-related images
            default: [],
        },
        demoVideo: {
            type: String, // Link to a demo video
            default: "",
        },

        mentor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Mentor", // Reference to the Mentor model
            required: true,
        },

        content: [
            {
                title: {
                    type: String,
                    required: true,
                },
                lessons: [
                    {
                        type: String, // Lesson names inside a section
                        required: true,
                    },
                ],
            },
        ],

        //? fetch reviews from Reviwe Model
        // reviews: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Review", // Reference to the Reviews
        //     },
        // ],

        averageRating: {
            type: Number,
            min: 1,
            max: 5,
        },

        enrolledStudents: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

        //? no need to store assignment reference, instead fetch assignments from it's model directly
        assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Assignment" }], // Reference to assignments

        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            refPath: "createdByModel", // Dynamically reference either "Mentor" or "Admin"
        },
        createdByModel: {
            type: String,
            required: true,
            enum: ["Mentor", "Admin"], // Ensure only these models are referenced
            default: "Mentor",
        },

        isPublished: {
            type: Boolean,
            default: false, // Admin can approve courses before publishing
        },
        isActive: {
            type: Boolean,
            default: true, // instead of deleting courses make them isActive:false
        },
    },
    { timestamps: true }
);

export const Course = mongoose.model("Course", courseSchema);
