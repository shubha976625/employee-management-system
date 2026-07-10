// React मधून useContext Hook import केला आहे.
import React, { useContext } from "react";

// AuthContext import केला आहे.
// यात Employees चा Data आहे.
import { AuthContext } from "../../context/Authprovider";

export default function AllTask() {

  // Context मधून employees मिळवले.
  const { employees } = useContext(AuthContext);

  // ------------------------------------
  // सर्व Employees चे Tasks एका Array मध्ये आणतो.
  // ------------------------------------

  const allTasks = employees.flatMap((emp) =>

    // प्रत्येक Employee चे Tasks Loop करतो.
    emp.tasks.map((task) => ({

      // Task ची सर्व माहिती Copy करतो.
      ...task,

      // कोणत्या Employee चा Task आहे ते Add करतो.
      employeeEmail: emp.email,

    }))
  );

  // ------------------------------------
  // Status नुसार Background Color ठरवतो.
  // ------------------------------------

  const getStatusColor = (status) => {

    switch (status) {

      case "new":
        return "bg-red-400";

      case "completed":
        return "bg-green-400";

      case "accepted":
        return "bg-blue-400";

      case "failed":
        return "bg-yellow-400";

      default:
        return "bg-gray-400";
    }
  };

  // JSX

  return (

    // Main Container
    <div
      id="alltask"
      className="bg-[#1C1C1C] p-5 rounded mt-5 h-40 overflow-auto"
    >

      {/* जर एकही Task नसेल */}
      {allTasks.length === 0 ? (

        <div className="text-center text-gray-400 py-5">
          No tasks assigned yet
        </div>

      ) : (

        // सर्व Tasks Display करतो.
        allTasks.map((task, index) => (

          <div

            // प्रत्येक Item साठी Unique Key
            key={index}

            // Status नुसार Color
            className={`${getStatusColor(task.status)}
            py-2
            px-4
            flex
            justify-between
            rounded
            mb-2
            text-white`}

          >

            {/* Employee Email */}
            <h2 className="font-semibold">
              {task.employeeEmail}
            </h2>

            {/* Task Title */}
            <h2>
              {task.title}
            </h2>

            {/* Task Status */}
            <h2 className="capitalize">
              {task.status}
            </h2>

          </div>

        ))

      )}

    </div>
  );
}