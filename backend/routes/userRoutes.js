import express from "express";
import { getAllUsers, updateProfile } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getAllUsers);
router.post("/profile", authMiddleware, updateProfile);

export default router;