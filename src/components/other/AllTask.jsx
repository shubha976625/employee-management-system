import React, { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

export default function AllTask() {
  const { employees } = useContext(AuthContext);

  // Get all tasks from all employees
  const allTasks = employees.flatMap((emp) =>
    emp.tasks.map((task) => ({
      ...task,
      employeeEmail: emp.email,
    }))
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "new":
        return "bg-red-400";
      case "completed":
        return "bg-green-400";
      case "accepted":
        return "bg-blue-400";
      case "failed":
        return "bg-yellow-400";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div id="alltask" className="bg-[#1C1C1C] p-5 rounded mt-5 h-40 overflow-auto">
      {allTasks.length === 0 ? (
        <div className="text-center text-gray-400 py-5">No tasks assigned yet</div>
      ) : (
        allTasks.map((task, index) => (
          <div
            key={index}
            className={`${getStatusColor(
              task.status
            )} py-2 px-4 flex justify-between rounded mb-2 text-white`}
          >
            <h2 className="font-semibold">{task.employeeEmail}</h2>
            <h2>{task.title}</h2>
            <h2 className="capitalize">{task.status}</h2>
          </div>
        ))
      )}
    </div>
  );
}