import express from "express";
import { login, register } from "../controller/auth.controller.js";
import { loginValidation, signUpValidation } from "../validators/auth.validator.js";
import { userValidate } from "../middlewares/user.validate.js";

const router = express.Router();

router.post("/register", signUpValidation, userValidate, register);
router.post("/login", loginValidation, userValidate, login);

export default router;