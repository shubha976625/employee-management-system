import React, { useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

export default function Header({ handleLogout }) {
  const { employees } = useContext(AuthContext);

  // Get current logged in user (for demo, we'll show first employee)
  const currentUser = employees[0]?.email || "User";

  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium text-white">
        Hello <br />
        <span className="text-emerald-500">{currentUser} 👋</span>
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded transition"
      >
        Log Out
      </button>
    </div>
  );
}