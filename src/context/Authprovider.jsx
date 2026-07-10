import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

export default function Authprovider({ children }) {
  const [userData, setUserData] = useState({
    employees: [],
    admin: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // LocalStorage सेट करा
    if (!localStorage.getItem("employees")) {
      setLocalStorage();
    }

    const data = getLocalStorage();
    setUserData(data);
    setLoading(false);
  }, []);

  // ✅ handleLogin function - context मध्ये add केली
  const handleLogin = (email, password) => {
    console.log("handleLogin called with:", email, password); // Debug log
    
    // Admin Login Check
    const admin = userData.admin.find(
      (a) => a.email === email && a.password === password
    );

    if (admin) {
      console.log("Admin login success");
      return "admin";
    }

    // Employee Login Check
    const employee = userData.employees.find(
      (e) => e.email === email && e.password === password
    );

    if (employee) {
      console.log("Employee login success");
      return "employee";
    }

    console.log("Login failed - Invalid credentials");
    return null;
  };

  // ✅ Create Task function
  const createTask = (taskData) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.email === taskData.assignTo) {
        return {
          ...emp,
          tasks: [
            ...emp.tasks,
            {
              title: taskData.title,
              description: taskData.description,
              date: taskData.date,
              category: taskData.category || "General",
              status: "new",
            },
          ],
        };
      }
      return emp;
    });

    const updatedData = {
      ...userData,
      employees: updatedEmployees,
    };

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  // ✅ Update Task Status function
  const updateTaskStatus = (employeeEmail, taskIndex, newStatus) => {
    const updatedEmployees = userData.employees.map((emp) => {
      if (emp.email === employeeEmail) {
        const updatedTasks = emp.tasks.map((task, index) => {
          if (index === taskIndex) {
            return { ...task, status: newStatus };
          }
          return task;
        });
        return { ...emp, tasks: updatedTasks };
      }
      return emp;
    });

    const updatedData = {
      ...userData,
      employees: updatedEmployees,
    };

    setUserData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  // ✅ सर्व functions आणि data context मध्ये pass करा
  return (
    <AuthContext.Provider
      value={{
        ...userData,           // employees, admin
        loading,
        handleLogin,           // ✅ login function
        createTask,            // ✅ create task function
        updateTaskStatus,      // ✅ update status function
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}