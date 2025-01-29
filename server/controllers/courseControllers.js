import { cloudinaryInstance } from "../config/cloudinaryCofig.js";
import { Course } from "../models/courseModel.js";

export const getCourses = async (req, res, next) => {
    try {
        const courseList = await Course.find().select("-description");

        res.json({ data: courseList, message: "courseList fetched" });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};

export const getCoursesDetails = async (req, res, next) => {
    try {
        const courseList = await Course.find().populate("mentor");

        res.json({ data: courseList, message: "courseList fetched" });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};


export const createCourse = async (req, res, next) => {
    try {
        const { title, description, price, duration, mentor } = req.body;
        let cloudinaryResponse

        if (!title || !description || !price || !duration) {
            return res.status(400).json({ message: "all fileds required" });
        }

        const mentorId = req.user.id;

        console.log("image===", req.file);

        if(req.file){
            cloudinaryResponse = await cloudinaryInstance.uploader.upload(req.file.path);
        }

        console.log("cldRes====", cloudinaryResponse);

        const courseData = new Course({ title, description, price, duration, image: cloudinaryResponse.url, mentor: mentorId });
        await courseData.save();

        res.json({ data: courseData, message: "course created successfully" });
    } catch (error) {
        return res.status(error.statusCode || 500).json({ message: error.message || "Internal server error" });
    }
};
