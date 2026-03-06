import express from "express";
import { createBooking, getBookings } from "../controllers/bookingController.js";

const router = express.Router();

router.post("/book", createBooking);
router.get("/all", getBookings);

export default router;