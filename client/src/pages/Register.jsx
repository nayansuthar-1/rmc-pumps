import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import React from "react";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await api.post("/auth/register", {
        name,
        email,
        password,
      });

      console.log(res.data);

      alert("Admin registered successfully");

      navigate("/login");

    } catch (err) {
      console.log(err);
      alert("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow w-96 space-y-4"
      >

        <h2 className="text-xl font-semibold">Admin Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="border w-full p-2 rounded"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-2 rounded"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 rounded"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;