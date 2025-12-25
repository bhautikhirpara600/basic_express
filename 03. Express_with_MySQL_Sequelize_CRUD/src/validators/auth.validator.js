import { body } from "express-validator";
import { User } from "../model/index.js";

//SIGNUP VALIDATION
export const signUpValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required.")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters."),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .bail()
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .bail()
    .custom(async (value) => {
      const existingUser = await User.findOne({ where: { email: value } });

      if (existingUser) throw new Error("Email already in use.");
      return true;
    })
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .bail()
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be between 8 and 20 characters long."),
];

//LOGIN VALIDATION
export const loginValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required.")
    .bail()
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .normalizeEmail(),

  body("password")
    .notEmpty()
    .withMessage("Password is required.")
    .bail()
    .isLength({ min: 8, max: 20 })
    .withMessage("Password must be between 8 and 20 characters long."),
];
