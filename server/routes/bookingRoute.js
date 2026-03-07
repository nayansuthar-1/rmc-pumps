import express from "express"
import { createBooking,getBooking ,updateBooking,deleteBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/create",createBooking);
router.get("/all",getBooking);
router.put("/update/:id",updateBooking);
router.delete("/delete/:id",deleteBooking);

export default router ;