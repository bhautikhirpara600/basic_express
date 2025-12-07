import {
  createStudentModel,
  deleteStudentModel,
  getStudentByIdModel,
  getStudentsModel,
  updateStudentModel,
} from "../model/studentModel.js";

//CREATE
export const createStudent = async (req, res) => {
  try {
    const { name, marks, city } = req.body;
    const result = await createStudentModel(name, marks, city);

    res.status(201).json({ message: "Student created", id: result.insertId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//READ ALL
export const getStudents = async (req, res) => {
  try {
    const students = await getStudentsModel();

    if (students.length === 0)
      return res.status(404).json({ error: "No student found" });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//READ ONE
export const getStudentById = async (req, res) => {
  try {
    const student = await getStudentByIdModel(req.params.id);

    if (student.length === 0)
      return res.status(404).json({ error: "Student not found" });
    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE
export const updateStudent = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, marks, city } = req.body;
    const updatedData = await updateStudentModel(id, name, marks, city);

    if (updatedData.affectedRows === 0)
      return res.status(404).json({ error: "Student not found" });
    res.status(200).json({ message: "Student updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE
export const deleteStudent = async (req, res) => {
  try {
    const deletedData = await deleteStudentModel(req.params.id);

    if (deletedData.affectedRows === 0)
      return res.status(404).json({ error: "Student not found" });
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
