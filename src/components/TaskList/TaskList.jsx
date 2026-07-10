import React, { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

export default function TaskList() {
  const { employees, updateTaskStatus } = useContext(AuthContext);

  // Get current employee (for demo - first employee)
  const currentEmployee = employees[0];

  if (!currentEmployee || !currentEmployee.tasks.length) {
    return (
      <div className="mt-5 text-center text-gray-400 py-10">
        No tasks assigned yet
      </div>
    );
  }

  const handleAccept = (taskIndex, newStatus) => {
    updateTaskStatus(currentEmployee.email, taskIndex, newStatus);
  };

  // Group tasks by status
  const groupedTasks = {
    new: currentEmployee.tasks.filter(task => task.status === "new"),
    accepted: currentEmployee.tasks.filter(task => task.status === "accepted"),
    completed: currentEmployee.tasks.filter(task => task.status === "completed"),
    failed: currentEmployee.tasks.filter(task => task.status === "failed"),
  };

  return (
    <div id="tasklist" className="mt-5 flex gap-5 overflow-x-auto py-5 flex-shrink-0">
      
      {/* New Tasks */}
      {groupedTasks.new.map((task, index) => {
        const originalIndex = currentEmployee.tasks.indexOf(task);
        return <NewTask key={index} task={task} />;
      })}

      {/* Accepted Tasks */}
      {groupedTasks.accepted.map((task, index) => {
        const originalIndex = currentEmployee.tasks.indexOf(task);
        return (
          <AcceptTask 
            key={index} 
            task={task} 
            onAccept={(status) => handleAccept(originalIndex, status)}
          />
        );
      })}

      {/* Completed Tasks */}
      {groupedTasks.completed.map((task, index) => {
        return <CompleteTask key={index} task={task} />;
      })}

      {/* Failed Tasks */}
      {groupedTasks.failed.map((task, index) => {
        return <FailedTask key={index} task={task} />;
      })}

      {/* If no tasks in any category */}
      {currentEmployee.tasks.length === 0 && (
        <div className="text-center text-gray-400 py-10 w-full">
          No tasks assigned
        </div>
      )}
    </div>
  );
}