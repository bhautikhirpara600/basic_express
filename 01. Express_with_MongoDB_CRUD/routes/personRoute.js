import express from "express";
import {
  createPerson,
  deletePerson,
  getPeople,
  getPerson,
  updatePerson,
} from "../controllers/personController.js";

const router = express.Router();

router.post("/", createPerson);
router.get("/", getPeople);
router.get("/:id", getPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

export default router;
