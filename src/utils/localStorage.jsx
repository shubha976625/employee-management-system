// src/utils/localStorage.js

const employees = [
  {
    id: 1,
    email: "shubham@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Make a UI Design",
        description: "Create a beautiful dashboard UI using React and Tailwind CSS",
        date: "2026-07-15",
        category: "Design",
        status: "new",
      },
      {
        title: "Write Documentation",
        description: "Write complete documentation for the project",
        date: "2026-07-20",
        category: "Documentation",
        status: "accepted",
      }
    ],
  },
  {
    id: 2,
    email: "rahul@gmail.com",
    password: "123",
    tasks: [
      {
        title: "Fix Login Bug",
        description: "Fix the authentication bug in the login page",
        date: "2026-07-12",
        category: "Bug Fix",
        status: "new",
      }
    ],
  },
  {
    id: 3,
    email: "amit@gmail.com",
    password: "123",
    tasks: [],
  },
  {
    id: 4,
    email: "priya@gmail.com",
    password: "123",
    tasks: [
      {
        title: "API Integration",
        description: "Integrate REST API for employee data",
        date: "2026-07-18",
        category: "Development",
        status: "completed",
      }
    ],
  },
  {
    id: 5,
    email: "neha@gmail.com",
    password: "123",
    tasks: [],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employeesData = JSON.parse(localStorage.getItem("employees")) || [];
  const adminData = JSON.parse(localStorage.getItem("admin")) || [];

  return { employees: employeesData, admin: adminData };
};

// Utility function to add task to specific employee
export const addTaskToEmployee = (employeeEmail, taskData) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  
  const updatedEmployees = employees.map((emp) => {
    if (emp.email === employeeEmail) {
      return {
        ...emp,
        tasks: [...emp.tasks, taskData],
      };
    }
    return emp;
  });

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  return updatedEmployees;
};

// Utility function to update task status
export const updateTaskStatusUtil = (employeeEmail, taskIndex, newStatus) => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  
  const updatedEmployees = employees.map((emp) => {
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

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  return updatedEmployees;
};