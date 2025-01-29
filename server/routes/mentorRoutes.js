import e from "express";
import bcrypt from "bcrypt";
import { Mentor } from "../models/mentorModel.js";
import { generateToken } from "../utils/token.js";
import { checkMentor, mentorLogin, mentorLogout, mentorProfile, mentorSignup } from "../controllers/mentorControllers.js";
import { mentorAuth } from "../middlewares/mentorAuth.js";

const router = e.Router();

//signup
router.post("/signup", mentorSignup);

//login
router.put("/login", mentorLogin);

//profile
router.put("/profile", mentorAuth, mentorProfile);

// logout
router.put("/logout", mentorAuth, mentorLogout);

//profile-update
//forgot-password
//change-password
//account-deactivate

//check-user
router.get("/check-mentor", mentorAuth, checkMentor);

export { router as mentorRouter };
