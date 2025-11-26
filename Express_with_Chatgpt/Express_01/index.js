import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello this is get request.");
});

// route params
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID => ${userId}`);
});

// query params
app.get("/search", (req, res) => {
  const { name, age } = req.query;
  res.send(`Search query Name => ${name}, Age => ${age}.`);
});

//body params
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  res.send(`User Email => ${email},  Password => ${password}.`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
