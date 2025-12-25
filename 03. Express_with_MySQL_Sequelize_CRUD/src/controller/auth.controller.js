import { User } from "../model/index.js";
import bcrypt from "bcrypt";

//SIGN UP
export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser)
      return res.status(409).json({ error: "Email already exists." });

    const user = await User.create({ name, email, password });
    const userData = user.toJSON();
    delete userData.password;
    res.status(201).json({ message: "Register successfully.", userData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//LOG IN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user)
      return res.status(401).json({ error: "Invalid email or password." });

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch)
      return res.status(401).json({ error: "Invalid email or password." });

    const userData = user.toJSON();
    delete userData.password;
    res.status(200).json({ message: "Login successfully.", userData });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
