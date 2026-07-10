import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/Authprovider";

export default function CreateTask() {
  const { employees, createTask } = useContext(AuthContext);
  const [taskData, setTaskData] = useState({
    title: "",
    date: "",
    assignTo: "",
    category: "",
    description: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!taskData.title || !taskData.date || !taskData.assignTo || !taskData.description) {
      alert("Please fill all fields");
      return;
    }

    // Check if employee exists
    const employeeExists = employees.some((emp) => emp.email === taskData.assignTo);
    if (!employeeExists) {
      alert("Employee not found");
      return;
    }

    createTask(taskData);

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);

    // Reset form
    setTaskData({
      title: "",
      date: "",
      assignTo: "",
      category: "",
      description: "",
    });
  };

  return (
    <div className="mt-10 rounded-xl bg-[#2A2A2A] p-7">
      {success && (
        <div className="mb-4 bg-emerald-500 text-white p-3 rounded text-center">
          Task created successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex w-full items-start justify-between">
        {/* Left Side */}
        <div className="w-1/2 pr-5">
          <div>
            <h3 className="mb-2 text-sm text-gray-300">Task Title</h3>
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              placeholder="Make a UI Design"
              className="mb-5 w-4/5 rounded border border-gray-500 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"
              required
            />
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Date</h3>
            <input
              type="date"
              name="date"
              value={taskData.date}
              onChange={handleChange}
              className="mb-5 w-4/5 rounded border border-gray-500 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"
              required
            />
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Assign To</h3>
            <select
              name="assignTo"
              value={taskData.assignTo}
              onChange={handleChange}
              className="mb-5 w-4/5 rounded border border-gray-500 bg-transparent px-3 py-2 text-sm text-white outline-none focus:border-emerald-500"
              required
            >
              <option value="" className="bg-[#2A2A2A]">
                Select Employee
              </option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.email} className="bg-[#2A2A2A]">
                  {emp.email}
                </option>
              ))}
            </select>
          </div>

          <div>
            <h3 className="mb-2 text-sm text-gray-300">Category</h3>
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

        {/* Right Side */}
        <div className="w-2/5">
          <h3 className="mb-2 text-sm text-gray-300">Description</h3>
          <textarea
            name="description"
            value={taskData.description}
            onChange={handleChange}
            rows="10"
            placeholder="Write Task Description..."
            className="w-full rounded border border-gray-500 bg-transparent p-3 text-sm text-white outline-none focus:border-emerald-500"
            required
          ></textarea>

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