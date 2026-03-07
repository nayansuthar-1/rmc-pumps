import jwt from 'jsonwebtoken';

export const protect =(req,res,next)=>{
    try{
        const token = req.headers.authorization;
        if(!token){
            res.status(401).json({message:"No Token Provided"});
        }
        const decoded = jwt.verify(token.split(" ")[1],"secretkey");
        req.user = decoded;
        next();

    }catch(err){
        res.status(500).json({message:err.message});
    }
};