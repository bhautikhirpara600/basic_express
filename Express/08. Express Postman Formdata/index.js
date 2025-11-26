import express from "express";
import router from "./routes.js";
import { storage } from "./config/multer.js";
import multer from "multer";

const app = express();
const upload = multer({ storage, limits: 1024000 });
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
// app.use(upload.array());
app.use(upload.single("image"));
app.use("/user", router);

app.get("/", (req, res) => {
  res.send("Hello Express..");
});

app.post("/form", (req, res) => {
  console.log("form-data", req.body);
  console.log(req.file);
  res.send(`Form Received`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
