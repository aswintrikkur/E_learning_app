import express from "express";
// import {
//     registerUser,
//     loginUser,
//     logoutUser,
//     forgotPassword,
//     resetPassword,
//     getProfile,
//     updateProfile,
//     changePassword,
//     deleteAccount,
//     getMyCourses,
//     enrollCourse,
//     getCourseProgress,
//     updateCourseProgress,
//     getWishlist,
//     addToWishlist,
//     removeFromWishlist,
//     getCart,
//     addToCart,
//     removeFromCart,
//     getCourseReviews,
//     addReview,
//     updateReview,
//     deleteReview,
//     getUserNotifications,
//     markNotificationRead,
//     deleteNotification,
//     getCertificates,
//     downloadCertificate,
//     checkUser,
// } from "../controllers/userControllers.js";

import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

// 🔹 Auth Routes
router.post("/signup", registerUser);
router.post("/login", loginUser);
router.post("/logout", authenticate, logoutUser);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

// 🔹 Profile Routes
router.get("/profile", authenticate, getProfile);
router.put("/profile", authenticate, updateProfile);
router.put("/change-password", authenticate, changePassword);
router.delete("/delete-account", authenticate, deleteAccount);
router.get("/check-user", authenticate, checkUser);

// 🔹 Course Enrollment & Progress
router.get("/my-courses", authenticate, getMyCourses);
router.post("/enroll/:courseId", authenticate, enrollCourse);
router.get("/course-progress/:courseId", authenticate, getCourseProgress);
router.put("/course-progress/:courseId", authenticate, updateCourseProgress);

// 🔹 Wishlist Routes
router.get("/wishlist", authenticate, getWishlist);
router.post("/wishlist/:courseId", authenticate, addToWishlist);
router.delete("/wishlist/:courseId", authenticate, removeFromWishlist);

// 🔹 Cart Routes
router.get("/cart", authenticate, getCart);
router.post("/cart/:courseId", authenticate, addToCart);
router.delete("/cart/:courseId", authenticate, removeFromCart);

// 🔹 Reviews & Ratings
router.get("/reviews/:courseId", getCourseReviews);
router.post("/reviews/:courseId", authenticate, addReview);
router.put("/reviews/:reviewId", authenticate, updateReview);
router.delete("/reviews/:reviewId", authenticate, deleteReview);

// 🔹 Notifications
router.get("/notifications", authenticate, getUserNotifications);
router.put("/notifications/:id", authenticate, markNotificationRead);
router.delete("/notifications/:id", authenticate, deleteNotification);

// 🔹 Certificates
router.get("/certificates", authenticate, getCertificates);
router.get("/certificates/:courseId", authenticate, downloadCertificate);

export { router as userRouter };
