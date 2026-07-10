// React मधून useContext Hook import केला आहे.
// useContext चा उपयोग Context मधील Data घेण्यासाठी होतो.
import React, { useContext } from "react";

// AuthContext import केला आहे.
// यामध्ये employees आणि इतर shared data आहे.
import { AuthContext } from "../../context/Authprovider";

// Header Component
// handleLogout हा App Component कडून Props म्हणून येतो.
export default function Header({ handleLogout }) {

  // Context मधून employees array घेतली.
  const { employees } = useContext(AuthContext);

  // ===========================================
  // Current Logged In User
  // ===========================================

  // Demo साठी पहिल्या Employee चा Email दाखवतो.
  // ?. म्हणजे Optional Chaining.
  // जर employees[0] नसेल तर Error येणार नाही.
  // || "User" म्हणजे Email नसेल तर Default "User" दाखवेल.
  const currentUser = employees[0]?.email || "User";

  // ===========================================
  // JSX (UI)
  // ===========================================
  return (

    // Main Header Container
    // flex = Items एका Row मध्ये
    // items-center = Vertical Center
    // justify-between = Left आणि Right ला Space
    <div className="flex items-center justify-between">

      {/* Welcome Message */}
      <h1 className="text-2xl font-medium text-white">

        {/* Greeting */}
        Hello

        {/* Line Break */}
        <br />

        {/* User Email Green Color मध्ये */}
        <span className="text-emerald-500">

          {/* Current User Email */}
          {currentUser}

          {/* Emoji */}
          👋

        </span>

      </h1>

      {/* Logout Button */}
      <button

        // Button Click झाला की handleLogout Function Call होईल.
        onClick={handleLogout}

        className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded transition"

      >

        Log Out

      </button>

    </div>
  );
}