import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed md:static top-0 left-0 h-full w-64 bg-slate-900 text-white p-5
      transform transition-transform duration-300
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0`}
    >
      <h2 className="text-2xl font-bold mb-8">RMC Pumps</h2>

      <nav className="flex flex-col gap-4">
        <Link className="hover:text-blue-400" to="/">Dashboard</Link>
        <Link className="hover:text-blue-400" to="/pumps">Pumps</Link>
        <Link className="hover:text-blue-400" to="/orders">Orders</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
