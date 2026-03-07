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

export  const getPumps = async (req,res)=>{
    try{
        const pumps = await Pump.find();
        res.json(pumps);
    }catch(err){
       res.status(500).json({message:err.message});
    }

};


export const updatePump = async (req,res)=>{
    try{
        const pump = await Pump.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new :true}
        );

        if(!pump){
            res.status(500).json({message:"pump not found"});
        };
        res.json(pump);

    }catch(err){
        res.status(500).json({message:err.message});
    }
};

export const deletePump = async(req,res)=>{
try{
        const pump = await Pump.findByIdAndDelete(req.params.id );

    if(!pump){
        return res.status.json({message:"pump is not found"})
    }
    res.json({message:"Pump deleted Successfully"})
    
}catch(err){
    res.status(500).json({message:err.message});
}

};
