// React मधून useContext Hook import केला आहे.
import React, { useContext } from "react";

// AuthContext मधून Employees Data आणि Functions घेण्यासाठी.
import { AuthContext } from "../../context/Authprovider";

// वेगवेगळ्या Status चे Components Import केले आहेत.
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

// TaskList Component
export default function TaskList() {

  // Context मधून employees array
  // आणि updateTaskStatus Function घेतले.
  const { employees, updateTaskStatus } = useContext(AuthContext);

  // ==========================================
  // Demo साठी पहिला Employee Current User मानला आहे.
  // ==========================================
  const currentEmployee = employees[0];

  // ==========================================
  // जर Employee नसेल किंवा त्याच्याकडे Task नसतील
  // ==========================================
  if (!currentEmployee || !currentEmployee.tasks.length) {

    return (

      <div className="mt-5 text-center text-gray-400 py-10">

        No tasks assigned yet

      </div>

    );

  }

  // ==========================================
  // Task Status Update Function
  // ==========================================
  const handleAccept = (taskIndex, newStatus) => {

    // Context मधील Function Call करतो.
    updateTaskStatus(
      currentEmployee.email, // कोणत्या Employee चा Task
      taskIndex,             // कोणता Task
      newStatus              // नवीन Status
    );

  };

  // ==========================================
  // Tasks Status नुसार वेगळे केले.
  // ==========================================
  const groupedTasks = {

    // New Tasks
    new: currentEmployee.tasks.filter(
      (task) => task.status === "new"
    ),

    // Accepted Tasks
    accepted: currentEmployee.tasks.filter(
      (task) => task.status === "accepted"
    ),

    // Completed Tasks
    completed: currentEmployee.tasks.filter(
      (task) => task.status === "completed"
    ),

    // Failed Tasks
    failed: currentEmployee.tasks.filter(
      (task) => task.status === "failed"
    ),

  };

  // ==========================================
  // JSX (UI)
  // ==========================================
  return (

    // Main Container
    // overflow-x-auto मुळे Horizontal Scroll येतो.
    <div
      id="tasklist"
      className="mt-5 flex gap-5 overflow-x-auto py-5 flex-shrink-0"
    >

      {/* =====================================
              NEW TASKS
      ====================================== */}

      {groupedTasks.new.map((task, index) => {

        // Original Task Index
        const originalIndex =
          currentEmployee.tasks.indexOf(task);

        return (

          <NewTask

            key={index}

            task={task}

          />

        );

      })}

      {/* =====================================
           ACCEPTED TASKS
      ====================================== */}

      {groupedTasks.accepted.map((task, index) => {

        // Original Index
        const originalIndex =
          currentEmployee.tasks.indexOf(task);

        return (

          <AcceptTask

            key={index}

            task={task}

            // Complete किंवा Fail Button Click झाल्यावर
            // हा Function चालेल.
            onAccept={(status) =>

              handleAccept(
                originalIndex,
                status
              )

            }

          />

        );

      })}

      {/* =====================================
          COMPLETED TASKS
      ====================================== */}

      {groupedTasks.completed.map((task, index) => {

        return (

          <CompleteTask

            key={index}

            task={task}

          />

        );

      })}

      {/* =====================================
            FAILED TASKS
      ====================================== */}

      {groupedTasks.failed.map((task, index) => {

        return (

          <FailedTask

            key={index}

            task={task}

          />

        );

      })}

      {/* =====================================
         जर कोणताही Task नसेल
      ====================================== */}

      {currentEmployee.tasks.length === 0 && (

        <div className="text-center text-gray-400 py-10 w-full">

          No tasks assigned

        </div>

      )}

    </div>

  );
}