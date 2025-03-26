import e from "express";
import { createCourse, getCourses, getCoursesDetails } from "../controllers/courseControllers.js";
import { mentorAuth } from "../middlewares/mentorAuth.js";
import { upload } from "../middlewares/multer.js";

const router = e.Router();

// router.get("/course-list", getCourses);
// router.get("/course-details/:courseId", getCoursesDetails);
// router.post("/create-course",  upload.single("image"), createCourse);
// router.put("/update-course",mentorAuth,upload.single('image'));

// router.delete("/delete-course");


export { router as courseRouter };
