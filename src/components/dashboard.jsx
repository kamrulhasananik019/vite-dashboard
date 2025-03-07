import React from 'react'
import Apis from './dashboard-comp/apis'
import { TbTopologyStarRing3 } from 'react-icons/tb'
import { RxAvatar } from 'react-icons/rx'
import { IoMenu } from 'react-icons/io5'

export default function Dashboard() {
  return (
    <div className="w-full  bg-[#060504]">
      <div className='block md:hidden' >
        <div className='flex justify-between items-center px-4 py-5'>
          <div className='flex items-center gap-4'>
            <div className='text-3xl'>
              <IoMenu />
            </div>
            <div className='flex px-2 py-1 rounded-lg items-center gap-2 border-gray-700 border'>
              <RxAvatar className='text-xl' />
              <input className='bg-black focus:outline-none font-medium' type="text" value={"Personal"} />
            </div>
          </div>
          <div className='text-3xl'>
            <RxAvatar />
          </div>
        </div>
      </div>
      <div className='h-full  bg-black border-gray-800 border-l border-t md:rounded-tl-xl mt-2'>
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
        <div className='px-4 border-b  border-gray-700 "' >
          dfdfs
        </div>
        <div className='px-4'>
          <Apis />
        </div>
      </div>
    </div>
  )
}
