import Booking from "../models/bookingModel.js";

// Create Booking
export const createBooking = async (req, res) => {
  try {

    const { name, phone, location, pumpType, date } = req.body;

    const booking = new Booking({
      name,
      phone,
      location,
      pumpType,
      date,
    });

    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Get All Bookings
export const getBookings = async (req, res) => {
  try {

    const bookings = await Booking.find();

    res.json(bookings);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};