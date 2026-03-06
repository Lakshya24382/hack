import express from "express";
import { createSwap, getSwaps, updateSwapStatus } from "../controllers/swapController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// create swap request
router.post("/", authMiddleware, createSwap);

// get all swaps for logged in user
router.get("/", authMiddleware, getSwaps);

// accept / reject swap
router.put("/:id", authMiddleware, updateSwapStatus);

export default router;