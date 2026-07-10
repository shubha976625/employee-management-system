// React Library import केली आहे.
import React from 'react';

// NewTask Component
// task हा Parent Component कडून Props म्हणून येतो.
export default function NewTask({ task }) {

  // JSX (UI)
  return (

    // ==========================
    // Main Task Card
    // ==========================
    // h-72 = Height
    // w-80 = Width
    // flex-shrink-0 = Width कमी होणार नाही
    // rounded-xl = Rounded Corners
    // bg-red-400 = Red Background
    // p-5 = Padding
    // flex flex-col = Vertical Layout
    // justify-between = वर माहिती, खाली Button
    <div className="h-72 w-80 flex-shrink-0 rounded-xl bg-red-400 p-5 flex flex-col justify-between">

      {/* ==========================
          Task Information
      ========================== */}
      <div>

        {/* Category आणि Date */}
        <div className="flex items-center justify-between">

          {/* Task Category */}
          <h3 className="rounded bg-red-600 px-3 py-1 text-sm text-white">

            {/* जर Category असेल तर ती दाखवेल,
                नाहीतर "New Task" दाखवेल */}
            {task.category || "New Task"}

          </h3>

          {/* Task Date */}
          <h4 className="text-sm text-white">

            {task.date}

          </h4>

        </div>

        {/* ==========================
            Task Title
        ========================== */}
        <h2 className="mt-5 text-2xl font-semibold text-white">

          {task.title}

        </h2>

        {/* ==========================
            Task Description
        ========================== */}
        <p className="mt-2 text-sm text-white line-clamp-3">

          {task.description}

        </p>

      </div>

      {/* ==========================
          New Task Button
      ========================== */}
      <div className="mt-4">

        <button

          // हा Button फक्त "New Task"
          // Status दाखवण्यासाठी आहे.
          // यामध्ये कोणतेही Function Call होत नाही.

          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded transition"

        >
          New Task
        </button>

      </div>

    </div>
  );
}