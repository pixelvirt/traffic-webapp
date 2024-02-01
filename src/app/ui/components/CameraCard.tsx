import VideocamIcon from '@mui/icons-material/Videocam'
import LanIcon from '@mui/icons-material/Lan'
import React from 'react'
import VideoPlayer from './VideoPlayer'

const CameraCard = ({
  cameraName,
  ipAddress,
  source,
}: {
  cameraName: string
  ipAddress: string
  source: string | undefined
}) => {
  return (
    <div className='hover:bg-primary-100 border-primary-100 flex max-h-min cursor-pointer flex-col gap-2 rounded-md border p-4'>
      <div className='aspect-video'>
        <VideoPlayer videoSource={source} />
      </div>
      <div>
        <p className='flex items-center gap-2 text-sm'>
          <VideocamIcon /> <span>{cameraName}</span>
        </p>
        <p className='flex items-center gap-2 text-sm'>
          <LanIcon /> {ipAddress}
        </p>
      </div>
    </div>
  )
}

export default CameraCard
