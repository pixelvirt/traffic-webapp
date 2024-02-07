'use client'

import { fetchAllJunctions } from '@/lib/data'
import { Junction } from '@/lib/definitions'
import Link from 'next/link'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
// import SidebarHeader from './SidebarHeader'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'
// import { toast } from 'react-toastify'

function Sidebar() {
  // const junctions: Junction[] = await fetchAllJunctions()
  const [junctions, setJunctions] = React.useState([] as Junction[])
  const pathname = usePathname()
  const id = pathname.split('/').pop()

  React.useEffect(() => {
    fetchAllJunctions().then((junctions) => setJunctions(junctions))
  }, [id])

  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

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
    <aside
      className={`sticky top-16 h-[calc(100dvh-4rem)] border-r-2 border-[#2e2e2e] py-6 pl-5 pr-2 transition-all duration-200 ease-in-out ${
        isSidebarOpen ? 'min-w-64' : 'min-w-16 pl-2'
      }`}
    >
      <div className='flex items-center justify-center'>
        <h1
          className={`flex-1 text-2xl font-bold ${
            isSidebarOpen
              ? styles.sidebarContentAppear
              : styles.sidebarContentDisappear
          }`}
        >
          Junctions
        </h1>
        <button
          onClick={toggleSidebar}
          className='cursor-pointer'
          aria-label='Toggle Sidebar'
          title='Toggle Sidebar'
        >
          <MenuIcon />
        </button>
      </div>
      {/* <SidebarHeader /> */}
      <div
        className={`mt-6 flex flex-col gap-2 ${
          isSidebarOpen
            ? styles.sidebarContentAppear
            : styles.sidebarContentDisappear
        }`}
      >
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
