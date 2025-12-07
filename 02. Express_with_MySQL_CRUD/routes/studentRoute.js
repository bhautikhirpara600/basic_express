import express from "express";
import {
  createStudent,
  deleteStudent,
  getStudentById,
  getStudents,
  updateStudent,
} from "../controller/studentController.js";

const router = express.Router();

router.post("/", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
