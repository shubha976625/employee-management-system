import React, { useContext, useState, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/Authprovider";

export default function App() {
  // ✅ Context मधून handleLogin घ्या
  const { handleLogin, loading } = useContext(AuthContext);
  
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState("");

  console.log("App rendered, handleLogin:", handleLogin); // Debug log

  useEffect(() => {
    // Check if user already logged in (session)
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // ✅ handleLogin wrapper function
  const handleLoginWrapper = (email, password) => {
    console.log("handleLoginWrapper called"); // Debug log
    setLoginError("");
    
    // Check if handleLogin exists
    if (typeof handleLogin !== 'function') {
      console.error("handleLogin is not a function!");
      setLoginError("System error. Please try again.");
      return null;
    }
    
    const result = handleLogin(email, password);
    console.log("Login result:", result); // Debug log

    if (result === "admin" || result === "employee") {
      setUser(result);
      localStorage.setItem("currentUser", result);
      return result;
    } else {
      setLoginError("Invalid Credentials");
      return null;
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("currentUser");
  };

  // Loading state
  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#1C1C1C] text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLoginWrapper} error={loginError} />
      ) : user === "admin" ? (
        <AdminDashboard handleLogout={handleLogout} />
      ) : (
        <EmployeeDashboard handleLogout={handleLogout} />
      )}
    </>
  );
}