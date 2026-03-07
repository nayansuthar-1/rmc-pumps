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

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
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
  );
}

export default Dashboard;
