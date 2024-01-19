import React from 'react'

const Sidebar = () => {
  return (
    <aside className='sticky top-16 h-[calc(100dvh-4rem)] min-w-64 border-r-2 border-[#2e2e2e] py-6 pl-5 pr-2'>
      <h1 className='mb-6 text-lg font-medium'>Junctions</h1>
      <ul className='flex flex-col gap-2'>
        <li className='w-full cursor-pointer rounded-md px-2 py-2 hover:bg-slate-800'>
          Chabahil
        </li>
        <li className='w-full cursor-pointer rounded-md px-2 py-2 hover:bg-slate-800'>
          Mitrapark
        </li>
        <li className='w-full cursor-pointer rounded-md px-2 py-2 hover:bg-slate-800'>
          Gaushala
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
