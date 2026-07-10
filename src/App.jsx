// ==========================================
// React Hooks Import
// ==========================================

// useContext -> Context मधून Data घेण्यासाठी
// useState -> State तयार करण्यासाठी
// useEffect -> Component Load झाल्यावर Code चालवण्यासाठी
import React, { useContext, useState, useEffect } from "react";

// ==========================================
// Components Import
// ==========================================

// Login Page
import Login from "./components/Auth/Login";

// Employee Dashboard
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

// Admin Dashboard
import AdminDashboard from "./components/Dashboard/AdminDashboard";

// Context Import
import { AuthContext } from "./context/Authprovider";

// ==========================================
// Main App Component
// ==========================================
export default function App() {

  // ==========================================
  // Context मधून Data घेतो
  // ==========================================

  // handleLogin -> Login Function
  // loading -> Data Load झाला का?
  const { handleLogin, loading } = useContext(AuthContext);

  // ==========================================
  // User State
  // ==========================================

  // User Login आहे का?
  const [user, setUser] = useState(null);

  // Login Error Message
  const [loginError, setLoginError] = useState("");

  console.log("App Rendered");

  // ==========================================
  // Component Load झाल्यावर
  // ==========================================
  useEffect(() => {

    // LocalStorage मधून Current User
    const savedUser = localStorage.getItem("currentUser");

    // User मिळाला तर Login ठेवतो.
    if (savedUser) {

      setUser(savedUser);

    }

  }, []);

  // ==========================================
  // Login Wrapper Function
  // ==========================================
  const handleLoginWrapper = (

    email,

    password

  ) => {

    // जुना Error Remove
    setLoginError("");

    // handleLogin आहे का?
    if (typeof handleLogin !== "function") {

      setLoginError("System Error");

      return null;

    }

    // Context Login Function Call
    const result = handleLogin(

      email,

      password

    );

    // Login Success
    if (

      result === "admin" ||

      result === "employee"

    ) {

      // User State
      setUser(result);

      // Session Save
      localStorage.setItem(

        "currentUser",

        result

      );

      return result;

    }

    // Login Failed
    else {

      setLoginError(

        "Invalid Credentials"

      );

      return null;

    }

  };

  // ==========================================
  // Logout
  // ==========================================
  const handleLogout = () => {

    // User Remove
    setUser(null);

    // LocalStorage Remove
    localStorage.removeItem(

      "currentUser"

    );

  };

  // ==========================================
  // Loading Screen
  // ==========================================
  if (loading) {

    return (

      <div className="h-screen w-screen flex items-center justify-center bg-[#1C1C1C] text-white">

        Loading...

      </div>

    );

  }

  // ==========================================
  // JSX
  // ==========================================
  return (

    <>

      {/* जर Login नसेल */}

      {!user ? (

        <Login

          handleLogin={handleLoginWrapper}

          error={loginError}

        />

      )

      /* जर Admin असेल */

      : user === "admin" ? (

        <AdminDashboard

          handleLogout={handleLogout}

        />

      )

      /* नाहीतर Employee */

      : (

        <EmployeeDashboard

          handleLogout={handleLogout}

        />

      )}

    </>

  );

}