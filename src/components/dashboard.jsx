import React from 'react'

export default function dashboard() {
  return (
    <div className="flex-1 p-6 bg-gray-950 text-white">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold">APIs</h2>
      <button className="bg-blue-600 px-4 py-2 rounded-lg">+ Create New API</button>
    </div>

    <div className="mt-6 bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg">Board</h3>
      <p className="text-sm text-gray-400">api_36J...JfB</p>
      <div className="flex gap-4 mt-2">
        <span className="text-yellow-400">0 VALID</span>
        <span className="text-red-400">0 INVALID</span>
      </div>
    </div>
  </div>
  )
}
