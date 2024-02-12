import CloseIcon from '@mui/icons-material/Close'
import CommuteIcon from '@mui/icons-material/Commute'
import TurnRightIcon from '@mui/icons-material/TurnRight'
import SwapVertIcon from '@mui/icons-material/SwapVert'
import VideoPlayer from '../VideoPlayer'
import LanIcon from '@mui/icons-material/Lan'

type ExpandedCameraCardProps = {
  cameraName: string
  ipAddress: string
  source: string | undefined
  setExpanded: () => void
}

// Expanded Card
export default function ExpandedCameraCard({
  cameraName,
  ipAddress,
  source,
  setExpanded,
}: ExpandedCameraCardProps) {
  return (
    <div className='max-w-dvw absolute left-0 top-0 flex h-dvh w-dvw bg-black'>
      <button className='absolute right-7 top-7' onClick={setExpanded}>
        <CloseIcon />
      </button>
      <div className='aspect-video w-10/12'>
        <VideoPlayer videoSource={source} />
      </div>
      <div className='flex w-full flex-col px-5 pt-12'>
        <h1 className='mb-6 flex items-center gap-4 text-2xl'>{cameraName}</h1>
        <div className='flex flex-col gap-4'>
          {/* Camera Information */}
          <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-4 text-sm'>
              <LanIcon titleAccess='IP Address' />
              <p>{ipAddress}</p>
            </div>
            <div className='flex items-center gap-4 text-sm'>
              <SwapVertIcon titleAccess='Traffic flow' />
              <p>Incoming from Chabahil</p>
            </div>
            <div className='flex items-center gap-4 text-sm'>
              <CommuteIcon titleAccess='Vehicle count' />
              <p>42</p>
            </div>
          </div>

          {/* Traffic Light Status */}
          <div className='border-t border-white/50 pt-4'>
            <h2 className='text-lg'>Traffic Light Status</h2>
            <div className='mt-4'>
              <div className='mt-4 flex items-center gap-4'>
                <div className='h-8 w-8 rounded-full bg-red-500'></div>
                <p>15 seconds</p>
              </div>
              <div className='mt-4 flex items-center gap-4'>
                <div className='h-8 w-8 rounded-full bg-yellow-500'></div>
                <p>10 seconds</p>
              </div>
              <div className='mt-4 flex items-center gap-4'>
                <div className='h-8 w-8 rounded-full bg-green-500'></div>
                <p>5 seconds</p>
              </div>
            </div>
            <div className='mt-4 flex items-center gap-4'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full border border-white/50 bg-white/20'>
                <TurnRightIcon className='text-green-500' />
              </div>
              <p>20 seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
