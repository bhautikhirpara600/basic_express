import User from "../models/userModel.js";

// CREATE
export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//READ ALL
export const getUsers = async (req, res) => {
  try {
    const userData = await User.find();

    if (userData.length === 0)
      return res.status(404).json({ error: "No users found" });
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//READ ONE
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// UPDATE
export const updateUser = async (req, res) => {
  try {
    const updatedData = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedData) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updatedData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE
export const deleteUser = async (req, res) => {
  try {
    const deletedData = await User.findByIdAndDelete(req.params.id);

    if (!deletedData) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
