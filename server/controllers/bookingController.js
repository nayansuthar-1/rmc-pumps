import Booking from "../models/bookingModel.js";

export  const createBooking =async (req,res)=>{
    try{
        const booking = new Booking(req.body);
        const savedBooking = await booking.save();

    }  catch(err){
        res.status(500).json({message:err.message});
    }
};


export const getBooking = async (req,res)=> {
    try{
        const bookings = await Booking.find();
        res.json(bookings);

    }catch(err){
        res.status(500).json({message:err.message});
    }
    
};