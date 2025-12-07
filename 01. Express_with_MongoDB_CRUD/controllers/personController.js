import Person from "../models/personModel.js";

//CREATE
export const createPerson = async (req, res) => {
  try {
    const newPerson = await Person.create(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//READ ALL
export const getPeople = async (req, res) => {
  try {
    const getData = await Person.find();

    if (getData.length === 0)
      return res.status(404).json({ error: "No person found" });
    res.status(200).json(getData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//READ ONE
export const getPerson = async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);

    if (!person) return res.status(404).json({ error: "Person not found" });
    res.status(200).json(person);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//UPDATE
export const updatePerson = async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedPerson)
      return res.status(404).json({ error: "Person not found" });
    res.status(200).json(updatedPerson);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE
export const deletePerson = async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);

    if (!deletedPerson)
      return res.status(404).json({ error: "Person not found" });
    res.status(200).json({ message: "Person deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
