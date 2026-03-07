import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import PumpsTable from "../components/PumpsTable";
import { Plus } from "lucide-react";
import PumpForm from "../components/PumpForm";
import { createPump, deletePump } from "../api/pumpApi";
import { getPumps } from "../api/pumpApi";
import { data } from "react-router-dom";

function Pumps() {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddPump = async (newPump) => {
    setIsOpen(false);
    const formattedPump = {
      ...newPump,
      pricePerDay: Number(newPump.pricePerDay),
    };
    console.log("New Pump : ", formattedPump);
    await createPump(formattedPump);
    await loadPumps();
  };

  const [pumps, setPumps] = useState([]);

  const handleDelete = async (id) => {
    await deletePump(id);
    await loadPumps();
    await console.log("pump deleted : ", id);
  };

  const loadPumps = async () => {
    try {
      const res = await getPumps();
      setPumps(res.data);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  useEffect(() => {
    loadPumps();
  }, []);
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

      <PumpsTable pumps={pumps} onDelete={handleDelete} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PumpForm onSubmit={handleAddPump} />
      </Modal>
    </div>
  );
}

export default Pumps;
