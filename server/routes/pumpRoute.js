import express from "express";
import { createPump,getPump } from "../controllers/pumpController.js";


const router= express.Router();

router.post("/create",createPump);
router.get("/get",getPump);

export default router ;