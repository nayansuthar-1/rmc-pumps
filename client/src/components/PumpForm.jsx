import React, { useEffect, useState } from "react";

function PumpForm({ onSubmit, pump, loading }) {
  const [name, setName] = useState(pump?.name || "");
  const [type, setType] = useState(pump?.type || "");
  const [capacity, setCapacity] = useState(pump?.capacity || "");
  const [pricePerDay, setPricePerDay] = useState(pump?.pricePerDay || "");
  const [location, setLocation] = useState(pump?.location || "");
  const [status, setStatus] = useState("active");
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (pump) {
      setName(pump.name);
      setType(pump.type);
      setCapacity(pump.capacity);
      setPricePerDay(pump.pricePerDay);
      setLocation(pump.location);
    }
  }, [pump]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    if (pump?._id) formData.append("_id", pump._id);

    formData.append("name", name);
    formData.append("type", type);
    formData.append("capacity", capacity);
    formData.append("pricePerDay", pricePerDay);
    formData.append("location", location);
    formData.append("status", status);

    if (image) {
      formData.append("image", image);
    }

    console.log("sending pump : ", formData);

    onSubmit(formData);

    setName("");
    setType("");
    setCapacity("");
    setPricePerDay("");
    setLocation("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">
        {pump ? "Edit Pump" : "Add Pump"}
      </h2>

      {/* ............pump name............. */}
      <input
        type="text"
        placeholder="Pump Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg px-3 py-2"
        required
      />

      {/* ...............pump type............... */}
      <input
        type="text"
        placeholder="Pump Type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border rounded-lg px-3 py-2"
        required
      />

      {/* ............pump capacity.................. */}
      <input
        type="text"
        placeholder="Pump Capacity"
        value={capacity}
        onChange={(e) => setCapacity(e.target.value)}
        className="border rounded-lg px-3 py-2"
        required
      />

      {/* ...............pump price per day .............. */}
      <input
        type="number"
        placeholder="Price Per Day"
        value={Number(pricePerDay)}
        onChange={(e) => setPricePerDay(e.target.value)}
        className="border rounded-lg px-3 py-2"
        required
      />

      {/* .............pump location ........... */}
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border rounded-lg px-3 py-2"
        required
      />

      {/* .........pump status................... */}
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-lg px-3 py-2"
        required
      />

      {/* ........pump image ..................... */}
      {/* Pump Image */}
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="border rounded-lg px-3 py-2"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Saving..." : "Save Pump"}
      </button>
    </form>
  );
}

export default PumpForm;
