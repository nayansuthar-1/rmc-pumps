import Admin from '../models/adminModel.js' ;
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const adminRegister=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const admin = new User({
            email,
            password:hashedPassword
        })
        await admin.save();
        res.json({message:"Admin register Sucessfully"});

    }catch(err){
        res.status(500).json({message:err.message});
    }
};

export const adminLogin = async()=>{
    try{
        const {email,password}= req.body;
    const user = await findOne({email});
    if(!user){
        return res.status(404).json({message:"Admin not found"})
    }
    const isMatch = await bcrypt.compare(password,Admin.password);
    if(!isMatch){
        return res.status(404).json({message:"invalid password"});
    }
    const token =jwt.sign(
        {id:admin._id},
        "secret-key",
        {expiresIn:"1d"}
    );
    res.json({message:"admin Login Successfully",
        token
    });

    }catch(err){
        res.status(500).json({message:err.message});
    }
};