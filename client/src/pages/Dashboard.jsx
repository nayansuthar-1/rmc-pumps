import React from "react";

function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white p-5 rounded-lg shadow">
          Total Pumps
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          Orders
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          Active Pumps
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          Revenue
        </div>

      </div>
    </div>
  );
}

export default Dashboard;