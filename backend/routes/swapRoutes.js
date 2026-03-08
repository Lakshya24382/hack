import express from "express";
import { getSwaps } from "../controllers/swapController.js";

const router = express.Router();

router.get("/", getSwaps);

export default router;