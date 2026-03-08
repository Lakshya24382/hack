import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, skillsOffered, skillsWanted } = req.body;

    const user = new User({
      name,
      email,
      password,
      skillsOffered,
      skillsWanted
    });

    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: user._id }, "secret123");

    res.json({
      token,
      user
    });

  } catch (error) {
    res.status(500).json(error);
  }
};