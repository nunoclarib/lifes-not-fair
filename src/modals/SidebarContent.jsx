import React from 'react'

export default function SidebarContent({selectedData}) {

  return (
    <>
     <div className="flex justify-center items-center gap-x-4 mt-7">
    <div className="rounded-full w-20 h-20 flex justify-center items-center bg-gray-100 shadow-xl">
      {/* <div className='w-15 h-15'>{selectedData.emoji}</div> */}
      <img src={`img/` + selectedData?.image} className="rounded-full w-20 h-20"/>
    </div>
    <div className="ml-2 text-center">
      <div className="text-teal-500 font-bold">{selectedData.name}</div>
      <div className="text-gray-400">{selectedData.job}</div>
      <div className="text-gray-500">{selectedData?.age}</div>
    </div>
  </div>
  <div className="text-gray-600 mt-7 text-justify">{selectedData?.info}</div>
    </>
  )
}
