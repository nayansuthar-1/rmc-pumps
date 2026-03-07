import mongoose from "mongoose";

const pumpSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  type: {
    type: String,
    required: true
  },

  capacity: {
    type: String
  },

  pricePerDay: {
    type: Number
  },

  location: {
    type: String
  },
  image:{
    type:String
  },
  status: {
    type: String,
  }

}, { timestamps: true });

const Pump = mongoose.model("Pump", pumpSchema);

export default Pump;