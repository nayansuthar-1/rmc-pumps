import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import React, { useState } from "react";

function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex">
      <Sidebar isOpen={isOpen} closeSidebar={closeSidebar} />

      {
        /* Overlay (mobile only) */
        isOpen && (
          <div
            className="fixed inset-0 bg-black/40 md:hidden z-40"
            onClick={closeSidebar}
          ></div>
        )
      }

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
