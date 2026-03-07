import Pump from "../models/pumpModel.js";
export const createPump = async (req,res)=>{
try{
    const pump = new Pump(req.body);
    const  savedPump = await pump.save();
    res.json(savedPump);
}
catch(err){
    res.status(500).json({
        message: err.message
    });
};
}

export  const getPump = async (req,res)=>{
    try{
        const pumps = await Pump.find();
        res.json(pumps);
    }catch(err){
       res.status(500).json({message:err.message});
    }

};
