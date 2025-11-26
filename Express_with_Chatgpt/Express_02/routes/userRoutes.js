import express from "express";
import { userLogin, userSignup } from "../controller/userController.js";

const router = express.Router();

router.get("/login", userLogin);
router.get("/signup", userSignup);

export default router;
