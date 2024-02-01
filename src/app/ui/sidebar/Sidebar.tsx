import { fetchAllJunctions } from '@/app/lib/data'
import { Junction } from '@/app/lib/definitions'
import Link from 'next/link'
import React from 'react'
import SidebarHeader from './SidebarHeader'

const Sidebar = async () => {
  const junctions: Junction[] = await fetchAllJunctions()

  return (
    <aside className='sticky top-16 h-[calc(100dvh-4rem)] min-w-64 border-r-2 border-[#2e2e2e] py-6 pl-5 pr-2'>
      <SidebarHeader />
      <div className='flex flex-col gap-2'>
        {junctions.map((junction) => (
          <Link
            key={junction.id}
            className='w-full cursor-pointer rounded-md px-2 py-2 hover:bg-slate-800'
            href={`/junctions/${junction.id}`}
          >
            {junction.name}
          </Link>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
