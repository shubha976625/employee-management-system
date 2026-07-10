// React Library import केली आहे.
import React from "react";

// Header Component import केला आहे.
import Header from "../other/Header";

// Employee च्या Task Statistics (Total, Completed, Active...) दाखवणारा Component
import TaskListNumber from "../other/TaskListNumber";

// Employee चे सर्व Tasks दाखवणारा Component
import TaskList from "../TaskList/TaskList";

// EmployeeDashboard Component
// handleLogout हा App Component कडून Props म्हणून येतो.
export default function EmployeeDashboard({ handleLogout }) {

  // JSX (UI)
  return (

    // Main Container
    // p-10 = Padding
    // bg-[#1C1C1C] = Dark Background
    // h-screen = Full Screen Height
    // w-screen = Full Screen Width
    // overflow-auto = Content मोठा असेल तर Scroll येईल
    <div className="p-10 bg-[#1C1C1C] h-screen w-screen overflow-auto">

      {/* Header Component */}
      {/* Logout Function Header ला Props म्हणून पाठवली आहे */}
      <Header handleLogout={handleLogout} />

      {/* Employee च्या Task ची संख्या दाखवतो */}
      <TaskListNumber />

      {/* Employee चे सर्व Tasks दाखवतो */}
      <TaskList />

    </div>
  );
}