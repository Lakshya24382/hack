import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import swapRoutes from "./routes/swapRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/swaps", swapRoutes);

// ROOT TEST ROUTE
app.get("/", (req, res) => {
  console.log("HOME ROUTE HIT");
  res.send("Skill Swap API Running");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});