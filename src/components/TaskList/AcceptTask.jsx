// React Library import केली आहे.
import React from 'react';

// AcceptTask Component
// task = एका Task ची माहिती
// onAccept = Parent Component कडून आलेला Function
export default function AcceptTask({ task, onAccept }) {

  // JSX (UI)
  return (

    // Main Task Card
    // h-72 = Height
    // w-80 = Width
    // flex-shrink-0 = Card ची Width कमी होणार नाही
    // rounded-xl = Rounded Corners
    // bg-blue-400 = Blue Background
    // p-5 = Padding
    // flex flex-col = Items Vertical
    // justify-between = वर Content आणि खाली Buttons
    <div className="h-72 w-80 flex-shrink-0 rounded-xl bg-blue-400 p-5 flex flex-col justify-between">

      {/* =========================
          Task Information
      ========================== */}
      <div>

        {/* Category आणि Date */}
        <div className="flex items-center justify-between">

          {/* Task Category */}
          <h3 className="rounded bg-blue-600 px-3 py-1 text-sm text-white">

            {/* Category असेल तर ती दाखवेल, नाहीतर Accepted */}
            {task.category || "Accepted"}

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
          Action Buttons
      ========================== */}
      <div className="mt-4 flex gap-2">

        {/* Complete Button */}
        <button

          // Button Click झाला की
          // Parent Component मधील onAccept()
          // completed Status सोबत Call होईल.
          onClick={() => onAccept("completed")}

          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"

        >
          Complete
        </button>

        {/* Fail Button */}
        <button

          // Button Click झाला की
          // Parent Component मधील onAccept()
          // failed Status सोबत Call होईल.
          onClick={() => onAccept("failed")}

          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded transition"

        >
          Fail
        </button>

      </div>

    </div>

  );
}