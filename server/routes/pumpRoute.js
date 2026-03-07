import express from "express";
import { createPump,getPumps,updatePump,deletePump} from "../controllers/pumpController.js";


const router= express.Router();

router.post("/create",createPump);
router.get("/get",getPumps);
router.put("/update/:id",updatePump);
router.delete("/delete/:id",deletePump);

export default router ;