import express from "express";
import router from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use("/user", router);
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Hello Express..`);
});

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `User ${name} with ${email} created Successfully.` });
});

app.get("/user", (req, res) => {
  res.send({ name: "Vijay Patel", email: "test@example.com" });
});

app.put("/user:id", (req, res) => {
  const userId = req.params.id;
  const { name, email } = req.body;
  res.json(`User ID ${userId} updated with ${name} and ${email} successfully.`);
});

app.delete("/user:id", (req, res) => {
  const userId = req.params.id;
  res.json(`User ID ${userId} Deleted.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
