import User from "../models/userModel";
import jwt from "jsonwebtoken" ;
import bcrypt from "bcrypt";

export const userRegister = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const hasedPassword = await bcrypt.hash(password,10);

        const user = new User({
            name,
            user,
            password: hashedPassword
        });
        await user.save();
        res.json({message:"user register successfully"});

    }catch(err){
        res.status(500).json({message:err.message});
    }
};



export userLogin = async(req,res)=>{
    try{

    }catch(err){
        res.status(500).json({message:err.message});
    }

}