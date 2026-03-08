import Swap from "../models/Swap.js";

export const getSwaps = async (req, res) => {
  try {
    const swaps = await Swap.find().populate("users");
    res.json(swaps);
  } catch (err) {
    res.status(500).json(err);
  }
};