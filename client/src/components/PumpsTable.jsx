import React from "react";

function PumpsTable({ pumps, onDelete, onEdit }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {pumps.map((pump) => (
        <div
          key={pump._id}
          className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition"
        >
          {/* Pump Image */}
          <div className="h-48 w-full overflow-hidden group">
            <img
              src={
                pump.image
                  ? `http://localhost:5000/uploads/${pump.image}`
                  : "https://via.placeholder.com/400x300?text=Pump"
              }
              alt={pump.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
            />
          </div>

          {/* Pump Details */}
          <div className="p-5 space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">{pump.name}</h3>

            <p className="text-sm text-gray-500">
              {pump.type} • {pump.capacity}
            </p>

            <p className="text-sm text-gray-600">Location: {pump.location}</p>

            <p className="text-xl font-bold text-blue-600">
              ₹{pump.pricePerDay} / day
            </p>

            {/* Status */}
            <span
              className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                pump.status === "active"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {pump.status}
            </span>

            {/* Actions */}
            <div className="flex gap-3 pt-3">
              <button
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                onClick={() => onEdit(pump)}
              >
                Edit
              </button>

              <button
                className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                onClick={() => onDelete(pump._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PumpsTable;
