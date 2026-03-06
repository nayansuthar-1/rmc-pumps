import Admin from "../models/adminModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


// Admin Login
export const loginAdmin = async (req, res) => {

  try {

    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(400).json({ message: "Admin not found" });
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

    res.json({ token });

  } catch (error) {

    res.status(500).json({ message: error.message });

  }

};