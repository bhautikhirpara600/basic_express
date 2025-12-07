import express from "express";
import studentRoute from "./routes/studentRoute.js";
import pool from "./config/db.js";

const app = express();
const PORT = 3000;

(async () => {
  try {
    await pool.query("SELECT 1");
    console.log("MySQL Connected Successfully");
  } catch (err) {
    console.error("MySQL Connection Failed:", err.message);
    process.exit(1);
  }
})();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello express");
});

app.use("/student", studentRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
