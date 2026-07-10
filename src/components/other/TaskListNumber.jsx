// React मधून useContext Hook import केला आहे.
// useContext चा उपयोग Context मधील Data घेण्यासाठी होतो.
import React, { useContext } from "react";

// AuthContext import केला आहे.
// यामध्ये employees चा Data आहे.
import { AuthContext } from "../../context/Authprovider";

// TaskListNumber Component
export default function TaskListNumber() {

  // Context मधून employees array घेतली.
  const { employees } = useContext(AuthContext);

  // ==========================================
  // सर्व Employees चे Tasks एका Array मध्ये आणतो.
  // ==========================================

  // प्रत्येक employee च्या tasks array ला
  // flatMap() वापरून एका single array मध्ये convert करतो.
  const allTasks = employees.flatMap((emp) => emp.tasks);

  // ==========================================
  // प्रत्येक Status चे Task Count काढतो.
  // ==========================================
  const counts = {

    // New Tasks Count
    new: allTasks.filter((t) => t.status === "new").length,

    // Completed Tasks Count
    completed: allTasks.filter((t) => t.status === "completed").length,

    // Accepted Tasks Count
    accepted: allTasks.filter((t) => t.status === "accepted").length,

    // Failed Tasks Count
    failed: allTasks.filter((t) => t.status === "failed").length,
  };

  // ==========================================
  // JSX (UI)
  // ==========================================
  return (

    // Main Container
    // mt-10 = Margin Top
    // flex = Cards एका Row मध्ये
    // justify-between = Equal Space
    // gap-5 = Cards मध्ये Gap
    <div className="mt-10 flex w-full justify-between gap-5">

      {/* ===========================
          New Task Card
      ============================ */}
      <div className="flex-1 rounded-xl bg-red-400 px-9 py-6">

        {/* New Task Count */}
        <h2 className="text-3xl font-bold text-white">
          {counts.new}
        </h2>

        {/* Card Title */}
        <h3 className="text-xl font-medium text-white">
          New Task
        </h3>

      </div>

      {/* ===========================
          Accepted Task Card
      ============================ */}
      <div className="flex-1 rounded-xl bg-blue-400 px-9 py-6">

        {/* Accepted Task Count */}
        <h2 className="text-3xl font-bold text-white">
          {counts.accepted}
        </h2>

        {/* Card Title */}
        <h3 className="text-xl font-medium text-white">
          Accepted Task
        </h3>

      </div>

      {/* ===========================
          Completed Task Card
      ============================ */}
      <div className="flex-1 rounded-xl bg-green-400 px-9 py-6">

        {/* Completed Task Count */}
        <h2 className="text-3xl font-bold text-white">
          {counts.completed}
        </h2>

        {/* Card Title */}
        <h3 className="text-xl font-medium text-white">
          Completed Task
        </h3>

      </div>

      {/* ===========================
          Failed Task Card
      ============================ */}
      <div className="flex-1 rounded-xl bg-yellow-400 px-9 py-6">

        {/* Failed Task Count */}
        <h2 className="text-3xl font-bold text-white">
          {counts.failed}
        </h2>

        {/* Card Title */}
        <h3 className="text-xl font-medium text-white">
          Failed Task
        </h3>

      </div>

    </div>
  );
}