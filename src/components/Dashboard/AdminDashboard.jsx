import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

export default function AdminDashboard({ handleLogout }) {
  return (
    <div className="h-screen w-full bg-[#1C1C1C] p-10 overflow-auto">
      <Header handleLogout={handleLogout} />
      <CreateTask />
      <AllTask />
    </div>
  );
}