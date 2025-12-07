import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();

await connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello everyone, This is express.`);
});

app.use("/user", userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
