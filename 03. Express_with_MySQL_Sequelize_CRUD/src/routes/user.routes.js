import express from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controller/user.controller.js";
import {
  createUserValidation,
  idValidation,
  updateUserValidation,
} from "../validators/user.validator.js";
import { userValidate } from "../middlewares/user.validate.js";

const router = express.Router();

router.post("/", createUserValidation, userValidate, createUser);
router.get("/", getUsers);
router.get("/:id", idValidation, userValidate, getUser);
router.put(
  "/:id",
  idValidation,
  updateUserValidation,
  userValidate,
  updateUser
);
router.delete("/:id", idValidation, userValidate, deleteUser);

export default router;
