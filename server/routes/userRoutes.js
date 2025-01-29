import e from "express";
import { checkUser, userLogin, userLogout, userProfile, userSignup } from "../controllers/userControllers.js";
import { userAuth } from "../middlewares/userAuth.js";

const router = e.Router();

//signup
router.post("/signup", userSignup);

//login
router.put("/login", userLogin);

//profile
router.get("/profile", userAuth, userProfile);

//logout
router.get("/logout", userAuth, userLogout);

//profile-update
//forgot-password
//change-password
//account-deactivate


//check-user
router.get("/check-user", userAuth, checkUser);

export { router as userRouter };
