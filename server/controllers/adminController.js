import Admin from '../models/adminModel.js' ;
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const adminRegister=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const hashedPassword = await bcrypt.hash(password,10);
        const admin = new Admin({
            email,
            password:hashedPassword
        })
        await admin.save();
        res.json({message:"Admin register Sucessfully"});

    }catch(err){
        res.status(500).json({message:err.message});
    }
};



export const adminLogin = async (req, res) => {
  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: admin._id },
      "secretkey",
      { expiresIn: "1d" }
    );

    res.json({
      message: "Admin login successful",
      token
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};