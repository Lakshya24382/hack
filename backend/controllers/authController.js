import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  try {

    const { name, email, password } = req.body;

    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashed
    });

    res.json(user);

  } catch (err) {
    res.status(500).json(err);
  }
};


// LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json("User not found");

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) return res.status(400).json("Invalid password");

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET
    );

    const { password: pw, ...userData } = user._doc;

    res.json({
      token,
      user: userData
    });

  } catch (err) {
    res.status(500).json(err);
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};