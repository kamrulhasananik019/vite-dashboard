import React from 'react'
import Apis from './dashboard-comp/apis'

export default function Dashboard() {
  return (
    <div className="flex-1 p-6 bg-[#060504] border-gray-800 border-l border-t rounded-tl-2xl mt-2">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">APIs</h2>
        <button className="dark:bg-white bg-black  text-white text-sm font-semibold dark:text-black  py-2 px-3 rounded-xl">+ Create New API</button>
      </div>

      <div>
        <Apis />
      </div>
    </div>
  )
}
