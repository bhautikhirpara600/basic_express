import express from "express";
import { loginPage, signupPage } from "./controller.js";

const router = express.Router();

router.get("/login", loginPage);
router.get("/signup", signupPage);

export default router;
