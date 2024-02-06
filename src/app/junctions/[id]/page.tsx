'use client'

import { getCameras } from '@/app/lib/data'
import CameraCard from '@/app/ui/components/CameraCard'
import { usePathname } from 'next/navigation'
import React from 'react'

type Camera = {
  id: number
  name: string
  ip: string
  source: string
}

export default function JunctionCameras() {
  const pathname = usePathname()

  const id = pathname.split('/').pop()
  const [cameras, setCameras] = React.useState<Camera[]>([])

  React.useEffect(() => {
    console.log('id', id)
    if (id !== undefined) {
      getCameras({ junctionId: id }).then((data) => {
        setCameras(data)
      })
    }
  }, [id])

  return (
    <div className='grid w-full grid-flow-row auto-rows-min grid-cols-3 gap-3 px-5 pt-5'>
      {
        cameras.length === 0 && (
          <div className='col-span-3 text-center text-2xl font-bold'>
            No cameras found
          </div>
        )
      }
      {cameras.map((camera) => (
        <CameraCard
          key={camera.id}
          cameraName={camera.name}
          ipAddress={camera.ip}
          source={camera.source}
        />
      ))}
    </div>
  )
}
