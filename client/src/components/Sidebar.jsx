import React from "react";
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Settings, ShoppingCart } from "lucide-react";

function Sidebar({ isOpen, closeSidebar }) {
  const linkStyle =
    "flex items-center gap-3 px-3 py-2 rounded-lg transition";

  const activeStyle =
    "bg-slate-700 text-white";

  const inactiveStyle =
    "text-gray-300 hover:bg-slate-800 hover:text-white";

  return (
    <div
      className={`
        fixed md:static top-0 left-0 h-full w-64 bg-slate-900 p-5
        transform transition-transform duration-300
        z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0
      `}
    >
      <h2 className="text-2xl font-bold text-white mb-8">
        RMC Pumps
      </h2>

      <nav className="flex flex-col gap-2">

        <NavLink
          to="/"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/pumps"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <Settings size={18} />
          Pumps
        </NavLink>

        <NavLink
          to="/orders"
          onClick={closeSidebar}
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          <ShoppingCart size={18} />
          Orders
        </NavLink>

      </nav>
    </div>
  );
}

export default Sidebar;
