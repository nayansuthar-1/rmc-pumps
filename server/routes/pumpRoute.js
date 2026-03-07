import express from "express";
import { createPump,getPumps,updatePump,deletePump} from "../controllers/pumpController.js";


const router= express.Router();

router.post("/",createPump);
router.get("/",getPumps);
router.put("/:id",updatePump);
router.delete("/:id",deletePump);

export default router ;