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
    <div className='flex max-h-min cursor-pointer flex-col gap-2 rounded-md p-4 hover:bg-slate-700'>
      <div className='aspect-video border'>
        <VideoPlayer videoSource={source} />
      </div>
      <div>
        <p className='flex items-center text-sm gap-2'>
          <VideocamIcon /> <span>{cameraName}</span>
        </p>
        <p className='flex items-center text-sm gap-2'>
          <LanIcon /> {ipAddress}
        </p>
      </div>
    </div>
  )
}

export default CameraCard
