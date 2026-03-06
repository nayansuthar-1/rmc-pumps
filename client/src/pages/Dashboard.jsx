import React from "react";
import StatCard from "../components/StatCard";
import { Settings, Activity, ShoppingCart, IndianRupee } from "lucide-react";

function Dashboard() {
  return (
    <div>

      <h2 className="text-2xl font-bold mb-6">
        Dashboard
      </h2>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        <StatCard
          title="Total Pumps"
          value="24"
          icon={<Settings size={20} />}
        />

        <StatCard
          title="Active Pumps"
          value="18"
          icon={<Activity size={20} />}
        />

        <StatCard
          title="Orders"
          value="126"
          icon={<ShoppingCart size={20} />}
        />

        <StatCard
          title="Revenue"
          value="₹45,000"
          icon={<IndianRupee size={20} />}
        />

      </div>

    </div>
  );
}

export default Dashboard;