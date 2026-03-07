import Admin from "../models/adminModel.js";

export const adminMiddleware = async (req,res,next)=>{
   try{
     const adminId= await req.user.Id;
    const admin = await Admin.findById(adminId);

    if(!Admin){
        return res.status(401).json({message:"Access Denied . Admin Only"});
    }
    req.admin=admin;
    next();
   }catch(err){
    res.status(500).json({message:err.message});
   }
};