import React from 'react';

export default function FailedTask({ task }) {
  return (
    <div className="h-72 w-80 flex-shrink-0 rounded-xl bg-yellow-400 p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-yellow-600 px-3 py-1 text-sm text-white">
            {task.category || "Failed"}
          </h3>
          <h4 className="text-sm text-white">{task.date}</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold text-white">{task.title}</h2>

        <p className="mt-2 text-sm text-white line-clamp-3">{task.description}</p>
      </div>

      <div className="mt-4">
        <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded transition opacity-50 cursor-not-allowed">
          ❌ Failed
        </button>
      </div>
    </div>
  );
}