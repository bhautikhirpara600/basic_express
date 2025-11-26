import express from "express";
import router from "./routes.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express..");
});

app.use("/user", router);
app.use(express.json());

app.post("/user", (req, res) => {
  const { name, email } = req.body;
  res.json({ message: `User ${name} with ${email} created successfully.` });
});

app.put("/user/:id", (req, res) => {
  const { name, email } = req.body;
  const userId = req.params.id;
  res.json({ message: `User ${userId} updated to ${name}, ${email}.` });
});

app.delete("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.json({ message: `User with ID ${userId} deleted successfully.` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
