// React Library import केली आहे.
import React from "react";

// Header Component import केला आहे.
import Header from "../other/Header";

// Task तयार करण्यासाठी CreateTask Component import केला आहे.
import CreateTask from "../other/CreateTask";

// सर्व Tasks दाखवण्यासाठी AllTask Component import केला आहे.
import AllTask from "../other/AllTask";

// AdminDashboard Component
// handleLogout हा App Component कडून Props म्हणून येतो.
export default function AdminDashboard({ handleLogout }) {

  // JSX (UI)
  return (

    // पूर्ण Screen Cover करणारा Container
    // h-screen = Full Height
    // w-full = Full Width
    // bg-[#1C1C1C] = Dark Background
    // p-10 = Padding
    // overflow-auto = Content मोठा झाला तर Scroll येईल
    <div className="h-screen w-full bg-[#1C1C1C] p-10 overflow-auto">

      {/* Header Component */}
      {/* handleLogout Function Header ला Props म्हणून पाठवली आहे */}
      <Header handleLogout={handleLogout} />

      {/* नवीन Task तयार करण्याचा Form */}
      <CreateTask />

      {/* सर्व Employees चे Tasks दाखवतो */}
      <AllTask />

    </div>
  );
}