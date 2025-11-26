import express from "express";
import router from "./routes.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express..");
});

app.use("/user", router);

app.use("/public", express.static("public"));
app.use("/image", express.static("image"));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
