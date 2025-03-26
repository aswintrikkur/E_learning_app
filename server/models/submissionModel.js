import { default as mongoose } from "mongoose";

const submissionSchema = new mongoose.Schema({
    assignment: { type: mongoose.Schema.Types.ObjectId, ref: "Assignment", required: true },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Assuming "User" is the student model
    submittedAt: { type: Date, default: Date.now },
    fileUrl: { type: String }, // File upload link
    marksObtained: { type: Number, default: 0 },
    feedback: { type: String },
});

export const Submission = mongoose.model("Submission", submissionSchema);
