import Pump from "../models/pumpModel.js";

export const createPump = async (req, res) => {
  try {

    const image = req.file ? req.file.filename : null;

    const { name, type, capacity, pricePerDay, location, status } = req.body;

    const pump = await Pump.create({
      name,
      type,
      capacity,
      pricePerDay,
      location,
      status,
      image
    });

    res.status(201).json(pump);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getPumps = async (req, res) => {
  try {

    const pumps = await Pump.find();

    res.json(pumps);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


export const getPumpById = async (req, res) => {
  try {

    const pump = await Pump.findById(req.params.id);

    if (!pump) {
      return res.status(404).json({ message: "Pump not found" });
    }

    res.json(pump);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const updatePump = async (req, res) => {
  try {

    const data = { ...req.body };

    if (req.file) {
      data.image = req.file.path;
    }

    const pump = await Pump.findByIdAndUpdate(
      req.params.id,
      data,
      { new: true }
    );

    if (!pump) {
      return res.status(404).json({ message: "Pump not found" });
    }

    res.json(pump);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



export const deletePump = async (req, res) => {
  try {

    const pump = await Pump.findByIdAndDelete(req.params.id);

    if (!pump) {
      return res.status(404).json({ message: "Pump not found" });
    }

    res.json({ message: "Pump deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};