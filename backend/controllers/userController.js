import User from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.skillsOffered = req.body.skillsOffered || user.skillsOffered;
    user.skillsWanted = req.body.skillsWanted || user.skillsWanted;

    const updatedUser = await user.save();

    res.json(updatedUser);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};