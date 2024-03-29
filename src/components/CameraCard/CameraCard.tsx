'use client'

import VideocamIcon from '@mui/icons-material/Videocam'
import LanIcon from '@mui/icons-material/Lan'
import React from 'react'
import VideoPlayer from '../VideoPlayer'
import ExpandedCameraCard from './ExpandedCameraCard'

const CameraCard = ({
  cameraName,
  ipAddress,
  source,
  green,
  count,
}: {
  cameraName: string
  ipAddress: string
  source: string | undefined
  green: number
  count: number
}) => {
  const [expanded, setExpanded] = React.useState(false)
  return (
    <>
      {expanded ? (
        <ExpandedCameraCard
          cameraName={cameraName}
          ipAddress={ipAddress}
          source={source}
          green={green}
          count={count}
          setExpanded={() => setExpanded(false)}
        />
      ) : (
        <CompactCameraCard
          param={{ cameraName, ipAddress, source }}
          setExpanded={() => setExpanded(true)}
        />
      )}
    </>
  )
}

// Compact Card
function CompactCameraCard({
  param,
  setExpanded,
}: {
  param: any
  setExpanded: any
}) {
  const { cameraName, ipAddress, source } = param
  return (
    <div
      onClick={setExpanded}
      className='border-primary-100 hover:bg-primary-100 flex max-h-min cursor-pointer flex-col gap-2 rounded-md border p-4'
    >
      <div className='aspect-video overflow-hidden'>
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
