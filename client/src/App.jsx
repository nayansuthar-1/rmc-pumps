import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Pumps from "./pages/Pumps";
import Orders from "./pages/Orders";
import Login from "./pages/Login";

import MainLayout from "./layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes */}
        <Route element={<MainLayout />}>

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/pumps"
            element={
              <ProtectedRoute>
                <Pumps />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;