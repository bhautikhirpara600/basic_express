import express from "express";

const app = express();
const PORT = 3000;

//simple routs
app.get("/", (req, res) => {
  res.send("Hello, This is Basic Project.");
});

app.get("/about", (req, res) => {
  res.send("Hello, This is About Page.");
});

app.get("/contact", (req, res) => {
  res.send("Hello, This is Contact Page.");
});

//dynamic route
//http://localhost:3000/user/Bhautik
app.get("/user/:userName", (req, res) => {
  const userName = req.params.userName;
  res.send(`Welcome ${userName}`);
});

//query in route
//http://localhost:3000/search?keyword=nodejs
app.get("/search", (req, res) => {
  const keyword = req.query.keyword;
  res.send(`Searching for ${keyword}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
