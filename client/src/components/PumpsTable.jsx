import React from "react";
import { data } from "react-router-dom";

function PumpsTable({ pumps, onDelete, onEdit }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">Pump</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Type</th>
            <th className="p-4 text-sm font-semibold text-gray-600">
              Capacity
            </th>
            <th className="p-4 text-sm font-semibold text-gray-600">
              Price/Day
            </th>
            <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
            <th className="p-4 text-sm font-semibold text-gray-600">
              Location
            </th>
            <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>

        <tbody>
          {pumps.map((pump) => (
            <tr key={pump._id} className="border-b hover:bg-gray-50">
              <td className="p-4">{pump.name}</td>
              <td className="p-4">{pump.type}</td>
              <td className="p-4">{pump.capacity}</td>
              <td className="p-4">{pump.pricePerDay}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-sm ${
                    pump.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {pump.status}
                </span>
              </td>
              <td className="p-4">{pump.location}</td>

              <td className="p-4 flex gap-3">
                <button
                  className="text-blue-600 hover:text-blue-800"
                  onClick={() => onEdit(pump)}
                >
                  {/* <Pencil size={18} /> */}
                  Edit
                </button>

                <button
                  className="text-red-600 hover:text-red-800"
                  onClick={() => onDelete(pump._id)}
                >
                  {/* <Trash size={18} /> */}
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PumpsTable;
