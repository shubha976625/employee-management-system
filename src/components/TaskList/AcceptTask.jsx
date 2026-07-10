import React from 'react';

export default function AcceptTask({ task, onAccept }) {
  return (
    <div className="h-72 w-80 flex-shrink-0 rounded-xl bg-blue-400 p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="rounded bg-blue-600 px-3 py-1 text-sm text-white">
            {task.category || "Accepted"}
          </h3>
          <h4 className="text-sm text-white">{task.date}</h4>
        </div>

        <h2 className="mt-5 text-2xl font-semibold text-white">{task.title}</h2>

        <p className="mt-2 text-sm text-white line-clamp-3">{task.description}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button 
          onClick={() => onAccept('completed')}
          className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
        >
          Complete
        </button>
        <button 
          onClick={() => onAccept('failed')}
          className="flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-2 rounded transition"
        >
          Fail
        </button>
      </div>
    </div>
  );
}