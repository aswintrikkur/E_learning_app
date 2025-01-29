import e from "express";
import { addCourseToCart, getCart, removeCourseFromCart } from "../controllers/cartControllers.js";
import { userAuth } from "../middlewares/userAuth.js";

const router = e.Router();

router.get("/get-cart", userAuth, getCart);
router.post("/add-to-cart",userAuth,addCourseToCart);
router.post("/remove-from-cart",userAuth,removeCourseFromCart);


export { router as cartRouter };
