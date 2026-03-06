import Swap from "../models/Swap.js";

export const createSwap = async (req, res) => {
  try {

    const { toUser, skillOffered, skillRequested } = req.body;

    const swap = new Swap({
      fromUser: req.user.id,
      toUser,
      skillOffered,
      skillRequested,
      status: "pending"
    });

    await swap.save();

    res.json(swap);

  } catch (err) {
    res.status(500).json(err);
  }
};

// GET SWAPS FOR LOGGED IN USER
export const getSwaps = async (req, res) => {
  try {

    const swaps = await Swap.find({
      $or: [
        { fromUser: req.user.id },
        { toUser: req.user.id }
      ]
    }).populate("fromUser toUser", "name email");

    res.json(swaps);

  } catch (err) {
    res.status(500).json(err);
  }
};


// ACCEPT OR REJECT SWAP
export const updateSwapStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const swap = await Swap.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json(swap);

  } catch (err) {
    res.status(500).json(err);
  }
};