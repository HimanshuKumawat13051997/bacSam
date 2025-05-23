import { Router } from "express";
import {
  loginUser,
  registerUser,
} from "../controllers/user.controller.js";
import { addSchool, getallSchool } from "../controllers/school.controller.js";
import { verifylatandlon } from "../middleware/params.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/addschool").post(addSchool);

router.route("/allschools").get(verifylatandlon ,getallSchool)

// router.route("/login").post(loginUser);






export default router;
