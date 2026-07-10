import React, { useState, useContext } from "react";

// AuthContext import केला आहे.
// यामध्ये employees data आणि createTask function आहे.
import { AuthContext } from "../../context/Authprovider";

export default function CreateTask() {

  // Context मधून employees array आणि createTask function घेतले.
  const { employees, createTask } = useContext(AuthContext);

  // Form मधील सर्व input values साठवण्यासाठी state.
  const [taskData, setTaskData] = useState({
    title: "",         // Task Title
    date: "",          // Task Date
    assignTo: "",      // कोणत्या Employee ला Task द्यायचा
    category: "",      // Task Category
    description: "",   // Task Description
  });

  // Success message दाखवण्यासाठी state.
  const [success, setSuccess] = useState(false);

  // ===========================================
  // Input मध्ये काही बदल झाला की हा function चालतो.
  // ===========================================
  const handleChange = (e) => {

    // Input मधून name आणि value घेतो.
    const { name, value } = e.target;

    // Previous data copy करून फक्त बदललेली value update करतो.
    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ===========================================
  // Form Submit Function
  // ===========================================
  const handleSubmit = (e) => {

    // Page Refresh थांबवतो.
    e.preventDefault();

    // -------------------------------
    // Validation
    // -------------------------------
    // जर कोणताही Required Field रिकामा असेल.
    if (
      !taskData.title ||
      !taskData.date ||
      !taskData.assignTo ||
      !taskData.description
    ) {
      alert("Please fill all fields");
      return;
    }

    // -------------------------------
    // Employee अस्तित्वात आहे का?
    // -------------------------------
    const employeeExists = employees.some(
      (emp) => emp.email === taskData.assignTo
    );

    // Employee नसेल तर Error.
    if (!employeeExists) {
      alert("Employee not found");
      return;
    }

    // -------------------------------
    // नवीन Task तयार करतो.
    // -------------------------------
    createTask(taskData);

    // Success Message दाखवतो.
    setSuccess(true);

    // 3 सेकंदानंतर Success Message Hide.
    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    // -------------------------------
    // Form Reset
    // -------------------------------
    setTaskData({
      title: "",
      date: "",
      assignTo: "",
      category: "",
      description: "",
    });
  };

  // ===========================================
  // UI
  // ===========================================
  return (

    // Main Container
    <div className="mt-10 rounded-xl bg-[#2A2A2A] p-7">

      {/* Success Message */}
      {success && (
        <div className="mb-4 bg-emerald-500 text-white p-3 rounded text-center">
          Task created successfully!
        </div>
      )}

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="flex w-full items-start justify-between"
      >

        {/* ================= Left Side ================= */}
        <div className="w-1/2 pr-5">

          {/* Task Title */}
          <div>
            <h3 className="mb-2 text-sm text-gray-300">
              Task Title
            </h3>

            <input
              type="text"

              // State मधील title शी जोडले आहे.
              name="title"

              // Current Value
              value={taskData.title}

              // Value Change झाल्यावर handleChange Call होईल.
              onChange={handleChange}

              placeholder="Make a UI Design"

              className="mb-5 w-4/5 rounded border border-gray-500 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"

              required
            />
          </div>

          {/* Date */}
          <div>

            <h3 className="mb-2 text-sm text-gray-300">
              Date
            </h3>

            <input
              type="date"

              name="date"

              value={taskData.date}

              onChange={handleChange}

              className="mb-5 w-4/5 rounded border border-gray-500 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"

              required
            />
          </div>

          {/* Assign To */}
          <div>

            <h3 className="mb-2 text-sm text-gray-300">
              Assign To
            </h3>

            <select

              name="assignTo"

              value={taskData.assignTo}

              onChange={handleChange}

              className="mb-5 w-4/5 rounded border border-gray-500 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"

              required
            >

              {/* Default Option */}
              <option
                value=""
                className="bg-[#2A2A2A]"
              >
                Select Employee
              </option>

              {/* Employees List */}
              {employees.map((emp) => (

                <option
                  key={emp.id}
                  value={emp.email}
                  className="bg-[#2A2A2A]"
                >
                  {emp.email}
                </option>

              ))}

            </select>

          </div>

          {/* Category */}
          <div>

            <h3 className="mb-2 text-sm text-gray-300">
              Category
            </h3>

            <input

              type="text"

              name="category"

              value={taskData.category}

              onChange={handleChange}

              placeholder="Design, Development"

              className="mb-5 w-4/5 rounded border border-gray-500 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"

            />

          </div>

        </div>

        {/* ================= Right Side ================= */}
        <div className="w-2/5">

          <h3 className="mb-2 text-sm text-gray-300">
            Description
          </h3>

          <textarea

            name="description"

            value={taskData.description}

            onChange={handleChange}

            rows="10"

            placeholder="Write Task Description..."

            className="w-full rounded border border-gray-500 bg-transparent p-3 text-sm text-white outline-none focus:border-emerald-500"

            required

          ></textarea>

          {/* Submit Button */}
          <button

            type="submit"

            className="mt-5 w-full rounded bg-emerald-500 py-3 text-lg font-semibold text-white transition hover:bg-emerald-600"

          >
            Create Task
          </button>

        </div>

      </form>

    </div>
  );
}