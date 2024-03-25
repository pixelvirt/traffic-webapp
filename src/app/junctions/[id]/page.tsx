'use client'

import { getCameras } from '@/lib/data'
import CameraCard from '@/components/CameraCard/CameraCard'
import { usePathname } from 'next/navigation'
import React from 'react'

type Camera = {
  id: number
  name: string
  ip: string
  source: string
  green: number
  count: number
}

export default function JunctionCameras() {
  const pathname = usePathname()

  const id = pathname.split('/').pop()
  const [cameras, setCameras] = React.useState<Camera[]>([])

  React.useEffect(() => {
    if (id !== undefined) {
      getCameras({ junctionId: id }).then((data) => {
        setCameras(data)
      })
    }
  }, [id])

  return (
    <div className='grid w-full grid-flow-row auto-rows-min grid-cols-3 gap-3 px-5 pt-5'>
      {cameras.length === 0 && (
        <div className='col-span-3 text-center text-2xl font-bold'>
          No cameras found
        </div>
      )}
      {cameras.map((camera) => (
        <CameraCard
          key={camera.id}
          cameraName={camera.name}
          ipAddress={camera.ip}
          source={camera.source}
          green={camera.green}
          count={camera.count}
        />
      ))}
    </div>
  )
}
