// ==========================================
// src/utils/localStorage.js
// ==========================================

// ==========================================
// Default Employees Data
// ==========================================
const employees = [

  // ==========================
  // Employee 1
  // ==========================
  {
    id: 1,                              // Employee ID

    email: "shubham@gmail.com",          // Login Email

    password: "123",                     // Login Password

    // Employee चे Tasks
    tasks: [

      {
        title: "Make a UI Design",       // Task Title

        description:
          "Create a beautiful dashboard UI using React and Tailwind CSS",

        date: "2026-07-15",              // Due Date

        category: "Design",              // Category

        status: "new",                   // Task Status
      },

      {
        title: "Write Documentation",

        description:
          "Write complete documentation for the project",

        date: "2026-07-20",

        category: "Documentation",

        status: "accepted",
      }

    ],

  },

  // ==========================
  // Employee 2
  // ==========================
  {
    id: 2,

    email: "rahul@gmail.com",

    password: "123",

    tasks: [

      {
        title: "Fix Login Bug",

        description:
          "Fix the authentication bug in the login page",

        date: "2026-07-12",

        category: "Bug Fix",

        status: "new",
      }

    ],

  },

  // ==========================
  // Employee 3
  // ==========================
  {
    id: 3,

    email: "amit@gmail.com",

    password: "123",

    // अजून Task नाही
    tasks: [],
  },

  // ==========================
  // Employee 4
  // ==========================
  {
    id: 4,

    email: "priya@gmail.com",

    password: "123",

    tasks: [

      {
        title: "API Integration",

        description:
          "Integrate REST API for employee data",

        date: "2026-07-18",

        category: "Development",

        status: "completed",
      }

    ],

  },

  // ==========================
  // Employee 5
  // ==========================
  {
    id: 5,

    email: "neha@gmail.com",

    password: "123",

    tasks: [],
  },

];

// ==========================================
// Admin Data
// ==========================================
const admin = [

  {
    id: 1,

    email: "admin@example.com",

    password: "123",
  },

];

// ==========================================
// LocalStorage मध्ये Data Save करतो.
// ==========================================
export const setLocalStorage = () => {

  // Employees Save
  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  );

  // Admin Save
  localStorage.setItem(
    "admin",
    JSON.stringify(admin)
  );

};

// ==========================================
// LocalStorage मधून Data घेऊन येतो.
// ==========================================
export const getLocalStorage = () => {

  // Employees Data
  const employeesData =

    JSON.parse(

      localStorage.getItem("employees")

    ) || [];

  // Admin Data
  const adminData =

    JSON.parse(

      localStorage.getItem("admin")

    ) || [];

  // Object Return
  return {

    employees: employeesData,

    admin: adminData,

  };

};

// ==========================================
// एका Employee ला नवीन Task Add करतो.
// ==========================================
export const addTaskToEmployee = (

  employeeEmail,

  taskData

) => {

  // LocalStorage मधून Employees घेतो.
  const employees =

    JSON.parse(

      localStorage.getItem("employees")

    ) || [];

  // Employees Loop
  const updatedEmployees =

    employees.map((emp) => {

      // योग्य Employee
      if (emp.email === employeeEmail) {

        return {

          ...emp,

          // जुने Tasks + नवीन Task
          tasks: [

            ...emp.tasks,

            taskData,

          ],

        };

      }

      return emp;

    });

  // LocalStorage Update
  localStorage.setItem(

    "employees",

    JSON.stringify(updatedEmployees)

  );

  // Updated Employees Return
  return updatedEmployees;

};

// ==========================================
// Task Status Update
// ==========================================
export const updateTaskStatusUtil = (

  employeeEmail,

  taskIndex,

  newStatus

) => {

  // Employees Data
  const employees =

    JSON.parse(

      localStorage.getItem("employees")

    ) || [];

  // Employees Loop
  const updatedEmployees =

    employees.map((emp) => {

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

  // LocalStorage Update
  localStorage.setItem(

    "employees",

    JSON.stringify(updatedEmployees)

  );

  // Updated Data Return
  return updatedEmployees;

};