import Booking from "../models/bookingModel.js";

export  const createBooking =async (req,res)=>{
    try{
        const booking = new Booking(req.body);
        const savedBooking = await booking.save();

        if(!booking){
            res.status.json({message:"booking not found"});
        }
        res.json(savedBooking);

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

export const updateBooking = async(req,res)=>{
    try{
        const bookings = await Booking.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );

        if(!bookings){
             res.status(500).json({message:"bookings not found"});
        }
        res.json(bookings);

    }catch(err){
        res.status(500).json({message:err.message});
    }
};



export const deleteBooking =async(req,res)=>{
    try{
        const bookings= await Booking.findByIdAndDelete(req.params.id);
        if(!bookings){
            res.status(500).json({message:"bookings not found"});
        }
        res.json({message:" booking delete successfully"});
    }catch(err){
        res.status(500).json({message:err.message});
    }
};