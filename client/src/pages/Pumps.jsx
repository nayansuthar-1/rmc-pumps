import React, { useState, useEffect } from "react";
import Modal from "../components/Modal";
import PumpsTable from "../components/PumpsTable";
import PumpForm from "../components/PumpForm";
import {
  createPump,
  deletePump,
  getPumpById,
  getPumps,
  updatePump,
} from "../api/pumpApi";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Pumps() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [pumps, setPumps] = useState([]);
  const [editingPump, setEditingPump] = useState(null);
  const [selectedPump, setSelectedPump] = useState(null);

  useEffect(() => {
    if (location.state?.editPump) {
      setEditingPump(location.state.editPump);
      setIsOpen(true);
    }
  }, [location.state]);

  // mobile filter panel
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // filters
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // load pumps
  const loadPumps = async () => {
    try {
      const res = await getPumps();
      setPumps(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadPumps();
  }, []);

  // add pump
  const handleAddPump = async (formData) => {
    try {
      setLoading(true);

      await createPump(formData); // send FormData directly

      await loadPumps();

      setIsOpen(false);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // delete pump
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?",
    );
    if (!confirmDelete) return;

    await deletePump(id);
    await loadPumps();
  };

  // edit pump
  const handleEdit = (pump) => {
    setEditingPump(pump);
    setIsOpen(true);
  };

  const handleUpdatePump = async (formData) => {
    const id = formData.get("_id");

    await updatePump(id, formData);

    setEditingPump(null);
    setIsOpen(false);
    loadPumps();
    alert("Pump updated successfully");
  };

  // ..........view pump............//
  const handleViewPump = (pump) => {
    setSelectedPump(pump);
  };

  // pump types (dynamic)
  const pumpTypes = [...new Set(pumps.map((pump) => pump.type))];

  // filtering
  const filteredPumps = pumps.filter((pump) => {
    const matchesSearch = pump.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || pump.status === statusFilter;

    const matchesType = typeFilter === "all" || pump.type === typeFilter;

    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Pumps</h2>

        <div className="flex gap-2">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="sm:hidden bg-gray-200 px-4 py-2 rounded-lg"
          >
            Filter
          </button>

          {/* Add Pump */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Add Pump
          </button>
        </div>
      </div>

      {/* Desktop Filters */}
      <div className="hidden sm:block bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search pumps..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded-lg px-4 py-2 flex-1"
          />

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border rounded-lg px-3 py-2"
          >
            <option value="all">All Types</option>

            {pumpTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pumps Grid */}
      <PumpsTable
        onView={handleViewPump}
        pumps={filteredPumps}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />

      {/*Add Pump Modal */}
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

      <Modal isOpen={!!selectedPump} onClose={() => setSelectedPump(null)}>
        {selectedPump && (
          <div className="space-y-4">
            <img
              src={`http://localhost:5000/uploads/${selectedPump.image}`}
              alt={selectedPump.name}
              className="w-full h-64 object-cover rounded-lg"
            />

            <h2 className="text-xl font-semibold">{selectedPump.name}</h2>

            <p>
              <b>Type:</b> {selectedPump.type}
            </p>
            <p>
              <b>Capacity:</b> {selectedPump.capacity}
            </p>
            <p>
              <b>Location:</b> {selectedPump.location}
            </p>
            <p>
              <b>Price/Day:</b> ₹{selectedPump.pricePerDay}
            </p>

            <button
              onClick={() => navigate(`/pumps/${selectedPump._id}`)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Full Details
            </button>
          </div>
        )}
      </Modal>

      {/* Mobile Filter Bottom Sheet */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-end z-50 sm:hidden">
          <div className="bg-white w-full rounded-t-2xl p-5 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Filters</h3>

              <button onClick={() => setIsFilterOpen(false)}>✕</button>
            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search pumps..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg px-4 py-2 w-full"
            />

            {/* Status */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            {/* Type */}
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full"
            >
              <option value="all">All Types</option>

              {pumpTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Pumps;
