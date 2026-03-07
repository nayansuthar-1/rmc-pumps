import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import PumpsTable from "../components/PumpsTable";
import { Plus } from "lucide-react";
import PumpForm from "../components/PumpForm";
import { createPump, deletePump } from "../api/pumpApi";
import { getPumps } from "../api/pumpApi";
import { data } from "react-router-dom";
import { updatePump } from "../api/pumpApi";

function Pumps() {
  // ..............loading state.................
  const [loading, setLoading] = useState(false);

  //  ..........add pump modal..............
  const [isOpen, setIsOpen] = useState(false);

  const handleAddPump = async (newPump) => {
    setLoading(true);
    const formattedPump = {
      ...newPump,
      pricePerDay: Number(newPump.pricePerDay),
    };
    console.log("New Pump : ", formattedPump);
    await createPump(formattedPump);
    await loadPumps();

    setLoading(false);
    setIsOpen(false);
  };

  const [pumps, setPumps] = useState([]);

  //..........delete pump.................
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );
    if (!confirmDelete) return;
    await deletePump(id);
    await loadPumps();
    await console.log("pump deleted : ", id);
  };

  // ..............load pump...............
  const loadPumps = async () => {
    try {
      const res = await getPumps();
      setPumps(res.data);
    } catch (err) {
      console.log("error : ", err);
    }
  };

  //.............edit pump..................
  const [editingPump, setEditingPump] = useState(null);
  const handleEdit = (pump) => {
    setIsOpen(true);
    console.log("Editing pump:", pump);
    setEditingPump(pump);
  };

  const handleUpdatePump = async (pump) => {
    await updatePump(pump._id, pump);
    setEditingPump(null);
    setIsOpen(false);
    loadPumps();
  };

  useEffect(() => {
    loadPumps();
  }, []);

  //...........filter /search pumps..........//
  const [search, setSearch] = useState("");

  const filteredPumps = pumps.filter((pump) =>
    pump.name.toLowerCase().includes(search.toLowerCase()),
  );

  

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold">Pumps</h2>

        <input
          type="text"
          placeholder="Search pumps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-2 rounded-xl w-100"
        />

        <button
          onClick={() => setIsOpen(true)}
          className="flex w-30 items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Pump
        </button>
      </div>

      <PumpsTable
        pumps={filteredPumps}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
          setEditingPump(null);
        }}
      >
        <PumpForm
          pump={editingPump}
          loading={loading}
          onSubmit={editingPump ? handleUpdatePump : handleAddPump}
        />
      </Modal>
    </div>
  );
}

export default Pumps;
