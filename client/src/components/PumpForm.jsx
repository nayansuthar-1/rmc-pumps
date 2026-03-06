import React, { useState } from "react";

function PumpForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const pump = {
      name,
      location,
      status: "Active",
    };

    onSubmit(pump);

    setName("");
    setLocation("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Add Pump</h2>

      <input
        type="text"
        placeholder="Pump Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg px-3 py-2"
        required
      />

      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
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