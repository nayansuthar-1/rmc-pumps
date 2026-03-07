import { useParams, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { getPumpById } from "../api/pumpApi";

function PumpDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pump, setPump] = useState(null);

  useEffect(() => {
    const loadPump = async () => {
      try {
        const res = await getPumpById(id);
        setPump(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    loadPump();
  }, [id]);

  if (!pump) return <p className="p-6">Loading...</p>;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 space-y-6">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      {/* Title + Status */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <h1 className="text-2xl md:text-3xl font-bold">{pump.name}</h1>

        <span
          className={`px-3 py-1 rounded-full text-sm w-fit ${
            pump.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {pump.status}
        </span>
      </div>

      {/* Image Gallery */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Main Image */}
        <img
          src={`http://localhost:5000/uploads/${pump.image}`}
          alt={pump.name}
          className="w-full h-[350px] md:h-[450px] object-cover rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Details */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Pump Details</h2>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-700">
            <p>
              <span className="font-medium">Type:</span> {pump.type}
            </p>

            <p>
              <span className="font-medium">Capacity:</span> {pump.capacity}
            </p>

            <p>
              <span className="font-medium">Location:</span> {pump.location}
            </p>
          </div>
        </div>

        {/* Sticky Price Card */}
        <div className="bg-white border rounded-xl p-6 shadow-sm h-fit sticky top-6 space-y-4">
          <h3 className="text-2xl font-semibold">
            ₹{pump.pricePerDay}
            <span className="text-sm text-gray-500"> / day</span>
          </h3>

          <button
            onClick={() => navigate("/pumps", { state: { editPump: pump } })}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Pump
          </button>
        </div>
      </div>
    </div>
  );
}

export default PumpDetails;
