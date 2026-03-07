import React, { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { Settings, Activity, ShoppingCart, IndianRupee } from "lucide-react";
import { Truck, CheckCircle, XCircle, MapPin } from "lucide-react";
import { getPumps } from "../api/pumpApi";

function Dashboard() {
  const [pumps, setPumps] = useState([]);

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

  //...........stats data....................//
  const totalPumps = pumps.length;

  const activePumps = pumps.filter((pump) => pump.status === "active").length;

  const inactivePumps = pumps.filter((pump) => pump.status !== "active").length;

  const totalLocations = new Set(pumps.map((pump) => pump.location)).size;

  // ............recent pumps................//
  const recentPumps = pumps.slice(0, 5);

  return (
    <div className="p-6 space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 text-sm">Overview of pump operations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Pumps"
          value={totalPumps}
          icon={<Settings className="text-blue-500" />}
        />

        <StatCard
          title="Active Pumps"
          value={activePumps}
          icon={<CheckCircle className="text-green-500" />}
        />

        <StatCard
          title="Inactive Pumps"
          value={inactivePumps}
          icon={<XCircle className="text-red-500" />}
        />

        <StatCard
          title="Locations"
          value={totalLocations}
          icon={<MapPin className="text-purple-500" />}
        />
      </div>

      {/* Recent Pumps Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Recent Pumps</h3>
        </div>

        <table className="w-full text-left">
          <thead className="border-b">
            <tr className="text-gray-500 text-sm">
              <th className="py-3">Name</th>
              <th className="py-3">Type</th>
              <th className="py-3">Location</th>
              <th className="py-3">Price/Day</th>
              <th className="py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {recentPumps.map((pump) => (
              <tr
                key={pump._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 font-medium">{pump.name}</td>

                <td className="py-3">
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded">
                    {pump.type}
                  </span>
                </td>

                <td className="py-3">{pump.location}</td>

                <td className="py-3 font-medium">₹{pump.pricePerDay}</td>

                <td className="py-3">
                  <span
                    className={`px-2 py-1 text-xs rounded
          ${
            pump.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
                  >
                    {pump.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
