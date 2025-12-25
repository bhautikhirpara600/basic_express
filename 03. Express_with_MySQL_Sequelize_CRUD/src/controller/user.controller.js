import { User } from "../model/index.js";

//CREATE
export const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const userData = newUser.toJSON();
    delete userData.password;
    res.status(201).json(userData);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//READ ALL
export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    const userData = users.map((user) => {
      const json = user.toJSON();
      delete json.password;
      return json;
    });
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//READ ONE
export const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(404).json({ error: "User not found." });
    const userData = user.toJSON();
    delete userData.password;
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);

    if (!user) return res.status(404).json({ error: "User not found." });

    user.set(req.body);
    await user.save();

    const userData = user.toJSON();
    delete userData.password;
    res.status(200).json({ message: "User updated successfully.", userData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE
export const deleteUser = async (req, res) => {
  try {
    const deletedRows = await User.destroy({ where: { id: req.params.id } });

    if (!deletedRows) return res.status(404).json({ error: "User not found." });

    res.status(200).json({
      message: `User deleted successfully, ${deletedRows} rows affected.`,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
