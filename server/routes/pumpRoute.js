import express from "express";
import { createPump,getPumps } from "../controllers/pumpController.js";


const router= express.Router();

router.post("/",createPump);
router.get("/",getPumps);
// router.post("/create",createPump);
// router.get("/get",getPump);

export default router ;