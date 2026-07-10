// React Library import केली आहे.
import React from 'react';

// CompleteTask Component
// task हा Parent Component कडून Props म्हणून येतो.
export default function CompleteTask({ task }) {

  // JSX (UI)
  return (

    // Main Task Card
    // h-72 = Height
    // w-80 = Width
    // flex-shrink-0 = Width कमी होणार नाही
    // rounded-xl = Rounded Corners
    // bg-green-400 = Green Background
    // p-5 = Padding
    // flex flex-col = Vertical Layout
    // justify-between = वर माहिती, खाली Button
    <div className="h-72 w-80 flex-shrink-0 rounded-xl bg-green-400 p-5 flex flex-col justify-between">

      {/* =========================
          Task Information
      ========================= */}
      <div>

        {/* Category आणि Date */}
        <div className="flex items-center justify-between">

          {/* Task Category */}
          <h3 className="rounded bg-green-600 px-3 py-1 text-sm text-white">

            {/* Category असेल तर ती दाखवेल, नाहीतर Completed */}
            {task.category || "Completed"}

          </h3>

          {/* Task Date */}
          <h4 className="text-sm text-white">

            {task.date}

          </h4>

        </div>

        {/* Task Title */}
        <h2 className="mt-5 text-2xl font-semibold text-white">

          {task.title}

        </h2>

        {/* Task Description */}
        <p className="mt-2 text-sm text-white line-clamp-3">

          {task.description}

        </p>

      </div>

      {/* =========================
          Completed Button
      ========================= */}
      <div className="mt-4">

        <button

          // हा Button फक्त Completed Status दाखवण्यासाठी आहे.
          // यावर Click केल्यावर काही Action होत नाही.
          // opacity-50 आणि cursor-not-allowed मुळे
          // हा Disabled सारखा दिसतो.

          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition opacity-50 cursor-not-allowed"

        >
          ✅ Completed
        </button>

      </div>

    </div>

  );
}