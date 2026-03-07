import React, { useState } from "react";

function PumpForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [capacity, setCapacity] = useState("");
  const [pricePerDay, setPricePerDay] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("active");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPump = {
      name,
      type,
      capacity,
      pricePerDay,
      location,
      status,
    };

    console.log('sending pump : ', newPump);
    

    onSubmit(newPump);

    setName("");
    setType("");
    setCapacity("");
    setPricePerDay("");
    setLocation("");
    setStatus("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Add Pump</h2>

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

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Save Pump
      </button>
    </form>
  );
}

export default PumpForm;
