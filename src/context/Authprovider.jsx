// ==========================================
// React Hooks Import
// ==========================================

// createContext -> Context तयार करण्यासाठी
// useEffect -> Component Load झाल्यावर Code चालवण्यासाठी
// useState -> State तयार करण्यासाठी
import { createContext, useEffect, useState } from "react";

// Local Storage Functions Import
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

// ==========================================
// Context तयार केला.
// ==========================================
export const AuthContext = createContext();

// ==========================================
// AuthProvider Component
// ==========================================
export default function Authprovider({ children }) {

  // ==========================================
  // State
  // ==========================================

  // employees आणि admin data Store करतो.
  const [userData, setUserData] = useState({

    employees: [],

    admin: [],

  });

  // Data Loading साठी State
  const [loading, setLoading] = useState(true);

  // ==========================================
  // Component पहिल्यांदा Load झाला की चालेल.
  // ==========================================
  useEffect(() => {

    // जर Local Storage मध्ये employees नसतील
    if (!localStorage.getItem("employees")) {

      // Default Data Store करतो.
      setLocalStorage();

    }

    // Local Storage मधून Data घेतो.
    const data = getLocalStorage();

    // State Update
    setUserData(data);

    // Loading संपले.
    setLoading(false);

  }, []);

  // ==========================================
  // Login Function
  // ==========================================
  const handleLogin = (email, password) => {

    console.log("handleLogin called");

    // -------------------------------
    // Admin Check
    // -------------------------------
    const admin = userData.admin.find(

      (a) =>

        a.email === email &&
        a.password === password

    );

    // Admin Login Success
    if (admin) {

      console.log("Admin Login Success");

      return "admin";

    }

    // -------------------------------
    // Employee Check
    // -------------------------------
    const employee = userData.employees.find(

      (e) =>

        e.email === email &&
        e.password === password

    );

    // Employee Login Success
    if (employee) {

      console.log("Employee Login Success");

      return "employee";

    }

    // Login Failed
    console.log("Invalid Login");

    return null;

  };

  // ==========================================
  // Create Task Function
  // ==========================================
  const createTask = (taskData) => {

    // Employees Loop
    const updatedEmployees = userData.employees.map((emp) => {

      // योग्य Employee मिळाला का?
      if (emp.email === taskData.assignTo) {

        return {

          ...emp,

          // जुन्या Tasks Copy
          tasks: [

            ...emp.tasks,

            // नवीन Task Add
            {

              title: taskData.title,

              description: taskData.description,

              date: taskData.date,

              category:

                taskData.category || "General",

              status: "new",

            },

          ],

        };

      }

      return emp;

    });

    // New Data तयार
    const updatedData = {

      ...userData,

      employees: updatedEmployees,

    };

    // State Update
    setUserData(updatedData);

    // Local Storage Update
    localStorage.setItem(

      "employees",

      JSON.stringify(updatedEmployees)

    );

  };

  // ==========================================
  // Update Task Status
  // ==========================================
  const updateTaskStatus = (

    employeeEmail,

    taskIndex,

    newStatus

  ) => {

    const updatedEmployees =

      userData.employees.map((emp) => {

        // योग्य Employee
        if (emp.email === employeeEmail) {

          // Tasks Loop
          const updatedTasks =

            emp.tasks.map((task, index) => {

              // योग्य Task
              if (index === taskIndex) {

                return {

                  ...task,

                  status: newStatus,

                };

              }

              return task;

            });

          return {

            ...emp,

            tasks: updatedTasks,

          };

        }

        return emp;

      });

    // Updated Data
    const updatedData = {

      ...userData,

      employees: updatedEmployees,

    };

    // State Update
    setUserData(updatedData);

    // Local Storage Update
    localStorage.setItem(

      "employees",

      JSON.stringify(updatedEmployees)

    );

  };

  // ==========================================
  // Context Provider
  // ==========================================
  return (

    <AuthContext.Provider

      value={{

        // Employees आणि Admin
        ...userData,

        // Loading State
        loading,

        // Login Function
        handleLogin,

        // Create Task
        createTask,

        // Update Status
        updateTaskStatus,

      }}

    >

      {/* App चे सर्व Components */}
      {children}

    </AuthContext.Provider>

  );

}