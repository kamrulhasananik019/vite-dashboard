import React from 'react'
import Apis from './dashboard-comp/apis'
import { TbTopologyStarRing3 } from 'react-icons/tb'

export default function Dashboard() {
  return (
    <div className="flex-1   bg-[#060504] border-gray-800 border-l border-t rounded-tl-xl mt-2">
      <div className="flex justify-between items-center border-gray-700 border-b px-4 py-4">
        <div>
          <h2 className=" flex items-center gap-3 text-gray-500 ">
            <TbTopologyStarRing3 />
            APIs</h2>
        </div>
        <div>
          <button className="dark:bg-slate-100 bg-black  text-slate-700 text-sm font-semibold dark:text-black  py-1 px-4 rounded-md">+ Create New API</button>
        </div>
      </div>

      <div className='px-4'>
        <Apis />
      </div>
    </div>
  )
}
