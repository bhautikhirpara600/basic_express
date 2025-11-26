import express from "express";
import { connectDB } from "./config/db.js";
import { Person } from "./models/Person.js";
import dotenv from "dotenv";
dotenv.config();

connectDB();

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Express..");
});

app.post("/person", async (req, res) => {
  try {
    const { name, age, email } = req.body;
    if (!name || !age || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newPerson = new Person({ name, age, email });
    await newPerson.save();
    console.log(newPerson);

    res.send(`Person Added..`);
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/person", async (req, res) => {
  try {
    const { email, name, age, id } = req.body;
    if (!id) {
      return res.status(400).json({ error: "ID is required for update" });
    }

    // const PersonData = await Person.find({ email });
    // const PersonData = await Person.find({ name, age });
    // const PersonData = await Person.findOne({ name });
    // const PersonData = await Person.findById(id);

    // const PersonData = await Person.findById(id);
    // PersonData.age = 27;
    // PersonData.save();

    const PersonData = await Person.findByIdAndUpdate(
      id,
      { age: 30 },
      { new: true }
    );

    console.log(PersonData);
    res.send(`Person Updated..`);
  } catch (error) {
    console.error(error.message);
  }
});

app.delete("/person/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const PersonData = await Person.findByIdAndDelete(id);
    console.log(PersonData);

    if (!PersonData) {
      return res.status(404).json({ error: "Person not found" });
    }
    res.send(`User Deleted..`);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/person", async (req, res) => {
  try {
    const people = await Person.find();
    res.json(people);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/person/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const PersonData = await Person.findById(id);
    console.log(PersonData);

    res.json(PersonData);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
