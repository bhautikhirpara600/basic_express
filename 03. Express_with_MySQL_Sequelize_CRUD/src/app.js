import express from "express";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is express and sequelize.");
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

export default app;
