import React from 'react'

import PumpsTable from "../components/PumpsTable";
import { Plus } from "lucide-react";

function Pumps() {
  return (
    <div>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">

        <h2 className="text-2xl font-bold">
          Pumps
        </h2>

        <div className="flex gap-3">

          <input
            type="text"
            placeholder="Search pumps..."
            className="border rounded-lg px-3 py-2 text-sm"
          />

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">

            <Plus size={18} />
            Add Pump

          </button>

        </div>

      </div>

      <PumpsTable />

    </div>
  );
}

export default Pumps;
