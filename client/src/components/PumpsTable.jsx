import React from "react";

import { Pencil, Trash } from "lucide-react";

function PumpsTable() {

  const pumps = [
    { id: 1, name: "Pump A", location: "Delhi", status: "Active" },
    { id: 2, name: "Pump B", location: "Jaipur", status: "Idle" },
    { id: 3, name: "Pump C", location: "Mumbai", status: "Active" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">

      <table className="w-full text-left">

        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-4 text-sm font-semibold text-gray-600">Pump</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Location</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Status</th>
            <th className="p-4 text-sm font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>

        <tbody>

          {pumps.map((pump) => (
            <tr key={pump.id} className="border-b hover:bg-gray-50">

              <td className="p-4">{pump.name}</td>
              <td className="p-4">{pump.location}</td>

              <td className="p-4">
                <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-700">
                  {pump.status}
                </span>
              </td>

              <td className="p-4 flex gap-3">

                <button className="text-blue-600 hover:text-blue-800">
                  <Pencil size={18} />
                </button>

                <button className="text-red-600 hover:text-red-800">
                  <Trash size={18} />
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