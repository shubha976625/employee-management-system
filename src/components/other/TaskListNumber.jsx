import React, { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

export default function TaskListNumber() {
  const { employees } = useContext(AuthContext);

  // Get all tasks from all employees
  const allTasks = employees.flatMap((emp) => emp.tasks);

  const counts = {
    new: allTasks.filter((t) => t.status === "new").length,
    completed: allTasks.filter((t) => t.status === "completed").length,
    accepted: allTasks.filter((t) => t.status === "accepted").length,
    failed: allTasks.filter((t) => t.status === "failed").length,
  };

  return (
    <div className="mt-10 flex w-full justify-between gap-5">
      <div className="flex-1 rounded-xl bg-red-400 px-9 py-6">
        <h2 className="text-3xl font-bold text-white">{counts.new}</h2>
        <h3 className="text-xl font-medium text-white">New Task</h3>
      </div>

      <div className="flex-1 rounded-xl bg-blue-400 px-9 py-6">
        <h2 className="text-3xl font-bold text-white">{counts.accepted}</h2>
        <h3 className="text-xl font-medium text-white">Accepted Task</h3>
      </div>

      <div className="flex-1 rounded-xl bg-green-400 px-9 py-6">
        <h2 className="text-3xl font-bold text-white">{counts.completed}</h2>
        <h3 className="text-xl font-medium text-white">Completed Task</h3>
      </div>

      <div className="flex-1 rounded-xl bg-yellow-400 px-9 py-6">
        <h2 className="text-3xl font-bold text-white">{counts.failed}</h2>
        <h3 className="text-xl font-medium text-white">Failed Task</h3>
      </div>
    </div>
  );
}