import { default as mongoose } from "mongoose";

const assignmentSchema = new mongoose.Schema({
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true }, // Links to the course
    title: { type: String, required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    totalMarks: { type: Number, required: true },
    submissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Submission" }], // Tracks student submissions
});

export const Assignment = mongoose.model("Assignment", assignmentSchema);
