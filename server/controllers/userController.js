import User from "../models/userModel.js";
import jwt from "jsonwebtoken" ;
import bcrypt from "bcrypt";

export const userRegister = async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const hasedPassword = await bcrypt.hash(password,10);

        const user = new User({
            name,
            email,
            password: hasedPassword
        });
        await user.save();
        res.json({message:"user register successfully"});

    }catch(err){
        res.status(500).json({message:err.message});
    }
};



export const  userLogin = async(req,res)=>{
    try{
        const {email,password}=req.body;

        const user = await User.findOne({email});

        if(!user){
            return res.status(500).json({mssage:"User Is Not Found"});
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            res.status(404).json({message:"Invalid Password"});
        }

        const token = await jwt.sign(
            {id:user._id},
            "secret key",
            {expiresIn:"1d"}
        );
          res.json({message:"User Login Sucessfully",
            token
          });



    }catch(err){
        res.status(500).json({message:err.message});    
    }

};