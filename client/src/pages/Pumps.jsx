import React, { useState } from "react";
import Modal from "../components/Modal";
import PumpsTable from "../components/PumpsTable";
import { Plus } from "lucide-react";
import PumpForm from "../components/PumpForm";

function Pumps() {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddPump = (pump) => {
    console.log("New Pump : ", pump);
    setIsOpen(false);
  };
  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold">Pumps</h2>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          <Plus size={18} />
          Add Pump
        </button>
      </div>

      <PumpsTable />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PumpForm onSubmit={handleAddPump} />
      </Modal>
    </div>
  );
}

export default Pumps;
