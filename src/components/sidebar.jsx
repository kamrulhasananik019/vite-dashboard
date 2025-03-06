import React from 'react'

export default function sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-6">Personal</h1>
      <ul className="flex-1 space-y-4">
        <li className="flex items-center gap-2 p-2 bg-gray-800 rounded-lg">
          <FaHome /> APIs
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
          <FaChartBar /> Rate Limit
        </li>
        <li className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded-lg">
          <FaCog /> Settings
        </li>
      </ul>
      <div className="mt-auto">
        <p className="text-sm">Kamrulhasan Anik</p>
      </div>
    </div>
  )
}
