import { body, param } from "express-validator";
import { User } from "../model/index.js";
import { Op } from "sequelize";

//CREATE USER VALIDATION
export const createUserValidation = [
  body("name")
    .notEmpty()
    .withMessage("Name is required.")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters."),

  body("age")
    .optional()
    .isInt({ min: 18, max: 100 })
    .withMessage("Please provide a valid age between 18 and 100"),

  body("email")
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

//UPDATE USER VALIDATION
export const updateUserValidation = [
  body("name")
    .optional()
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters."),

  body("age")
    .optional()
    .isInt({ min: 18, max: 100 })
    .withMessage("Please provide a valid age between 18 and 100"),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Please provide a valid email address.")
    .bail()
    .custom(async (value, { req }) => {
      const userId = req.params.id;
      const existingUser = await User.findOne({
        where: { email: value, id: { [Op.ne]: userId } },
      });

      if (existingUser)
        throw new Error("Email already in use by another user.");
      return true;
    })
    .normalizeEmail(),
];

//PARAM ID VALIDATION
export const idValidation = [
  param("id")
    .notEmpty()
    .withMessage("ID is required.")
    .bail()
    .isInt()
    .withMessage("ID must be a number"),
];
