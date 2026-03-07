import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import bookingRoute from './routes/bookingRoute.js';
import pumpRoutes from './routes/pumpRoute.js';
import userRoute from './routes/userRoute.js'
import adminRoute from './routes/adminRoute.js'

dotenv.config();
connectDB();

const app =express();

app.use(cors());
app.use(express.json());

app.use("/api/bookings",bookingRoute);
app.use("/api/pumps",pumpRoute);
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is Running on port ${PORT}`)
})
