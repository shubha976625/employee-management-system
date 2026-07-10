import React from "react";
import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

export default function EmployeeDashboard({ handleLogout }) {
  return (
    <div className="p-10 bg-[#1C1C1C] h-screen w-screen overflow-auto">
      <Header handleLogout={handleLogout} />
      <TaskListNumber />
      <TaskList />
    </div>
  );
}