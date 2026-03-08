import mongoose from "mongoose";

const swapSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  skillExchanged: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Swap", swapSchema);