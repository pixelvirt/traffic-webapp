'use client'

import { fetchAllJunctions } from '@/lib/data'
import { Junction } from '@/lib/definitions'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import styles from './Sidebar.module.css'
import { Button } from '@mui/material'

function Sidebar() {
  const [junctions, setJunctions] = React.useState([] as Junction[])
  const pathname = usePathname()
  const id = pathname.split('/').pop()

  React.useEffect(() => {
    fetchAllJunctions().then((junctions) => setJunctions(junctions))
  }, [id])

  return (
    <aside
      className={`sticky top-16 h-[calc(100dvh-4rem)] min-w-64 border-r-2 border-[#2e2e2e] py-6 pl-5 pr-2 transition-all duration-200 ease-in-out`}
    >
      <div className='flex items-center justify-center'>
        <h1
          className={`flex-1 text-2xl font-bold ${styles.sidebarContentAppear}`}
        >
          Junctions
        </h1>
      </div>
      <div
        className={`mt-6 flex flex-col gap-2 ${styles.sidebarContentAppear}`}
      >
        {junctions.map((junction) => (
          <Button
            key={junction.id}
            className={`w-full cursor-pointer justify-start px-3 py-2 ${
              (id !== undefined ? Number(id) : 0) === junction.id
                ? 'bg-accent'
                : ''
            }`}
          >
            <Link key={junction.id} href={`/junctions/${junction.id}`}>
              {junction.name}
            </Link>
          </Button>
        ))}
      </div>
    </aside>
  )
}

export default Sidebar
