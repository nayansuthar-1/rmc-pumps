import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  pumpType: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },

  status: {
    type: String,
    default: "Pending",
  },
},
{
  timestamps: true,
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;