import pool from "../config/db.js";

//CREATE
export const createStudentModel = async (name, marks, city) => {
  const query = "INSERT INTO students (name, marks, city) VALUES (?, ?, ?)";
  const [result] = await pool.execute(query, [name, marks, city]);
  return result;
};

//READ ALL
export const getStudentsModel = async () => {
  const query = "SELECT * FROM students";
  const [rows] = await pool.execute(query);
  return rows;
};

//READ ONE
export const getStudentByIdModel = async (id) => {
  const query = "SELECT * FROM students WHERE id = ?";
  const [rows] = await pool.execute(query, [id]);
  return rows;
};

//UPDATE
export const updateStudentModel = async (id, name, marks, city) => {
  const query =
    "UPDATE students SET name = ?, marks = ?, city = ? WHERE id = ?";
  const [result] = await pool.execute(query, [name, marks, city, id]);
  return result;
};

//DELETE
export const deleteStudentModel = async (id) => {
  const query = "DELETE FROM students WHERE id = ?";
  const [result] = await pool.execute(query, [id]);
  return result;
};
