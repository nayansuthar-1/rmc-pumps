import express from "express";
import { createPump,getPump,updatePump,deletePump} from "../controllers/pumpController.js";


const router= express.Router();

router.post("/create",createPump);
router.get("/get",getPump);
router.put("/update/:id",updatePump);
router.delete("/delete/:id",deletePump);

export default router ;

