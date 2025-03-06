import React from 'react'
import { FaHome, FaChartBar, FaCog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen  p-4 flex flex-col">
      <h1 className="text-xl font-bold mb-6">Personal</h1>
      <ul className="flex-1 space-y-4 text-sm">
        <li className="flex items-center gap-2 p-2 bg-neutral-800 rounded-lg">
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
