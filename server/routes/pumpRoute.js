import express from "express";
import { createPump,getPumps } from "../controllers/pumpController.js";


const router= express.Router();

router.post("/create",createPump);
router.get("/get",getPumps);

export default router ;