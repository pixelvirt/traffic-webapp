'use client'

import { fetchAllJunctions } from '@/lib/data'
import { Junction } from '@/lib/definitions'
import Link from 'next/link'
import React from 'react'
import SidebarHeader from './SidebarHeader'
import { usePathname } from 'next/navigation'
// import { toast } from 'react-toastify'

function Sidebar() {
  // const junctions: Junction[] = await fetchAllJunctions()
  const [junctions, setJunctions] = React.useState([] as Junction[])
  const pathname = usePathname()
  const id = pathname.split('/').pop()

  React.useEffect(() => {
    fetchAllJunctions().then((junctions) => setJunctions(junctions))
  }, [id])

  // const updateJunctions = async () => {
  //   const updatedJunctions = await fetchAllJunctions()
  //   setJunctions(updatedJunctions)
  //   toast.success('Junction added successfully', {
  //     position: 'top-right',
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     progress: undefined,
  //   })
  // }

  return (
    <aside className='sticky top-16 h-[calc(100dvh-4rem)] min-w-64 border-r-2 border-[#2e2e2e] py-6 pl-5 pr-2'>
      <SidebarHeader />
      <div className='mt-6 flex flex-col gap-2'>
        {junctions.map((junction) => (
          <Link
            key={junction.id}
            className={`w-full cursor-pointer rounded-md px-3 py-2 hover:bg-[#1a1a1a] ${
              (id !== undefined ? Number(id) : 0) === junction.id
                ? 'bg-[#1a1a1a]'
                : ''
            }`}
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
