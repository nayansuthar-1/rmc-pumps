import express from "express";
import { createPump, getPumps, updatePump, deletePump, getPumpById } from "../controllers/pumpController.js";
import upload from "../middleware/uploadMiddleware.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", protect, adminMiddleware, upload.single("image"), createPump);
router.get("/", getPumps);
router.get("/:id", getPumpById);
router.put("/:id", protect, adminMiddleware, upload.single("image"), updatePump);
router.delete("/:id", protect, adminMiddleware, deletePump);

export default router;