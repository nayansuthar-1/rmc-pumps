import express from "express"
import { createBooking,getBooking } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/create",createBooking);
router.get("/all",getBooking);

export default router ;