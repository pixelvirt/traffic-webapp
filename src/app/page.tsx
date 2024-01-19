import CameraCard from '@/components/CameraCard'
import Sidebar from '@/components/Sidebar'

type Camera = {
  name: string
  ip: string
  videoSource?: string
}

let cameras: Camera[] = [
  {
    name: 'Camera 1',
    ip: '0.0.0.0',
    videoSource: 'https://youtu.be/fh3EdeGNKus?feature=shared',
  },
  {
    name: 'Camera 2',
    ip: '1.1.1.1',
    videoSource: 'https://youtu.be/iJZcjZD0fw0?feature=shared',
  },
  {
    name: 'Camera 3',
    ip: '2.2.2.2',
    videoSource: 'https://youtu.be/wqctLW0Hb_0?feature=shared',
  },
  {
    name: 'Camera 4',
    ip: '3.3.3.3',
    videoSource: 'https://youtu.be/7HaJArMDKgI?feature=shared',
  },
]

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='grid w-full grid-flow-row auto-rows-min grid-cols-2 gap-3 px-5 pt-5'>
        {cameras.map((camera) => (
          <CameraCard
            key={camera.name}
            cameraName={camera.name}
            ipAddress={camera.ip}
            source={camera.videoSource}
          />
        ))}
      </div>
    </div>
  )
}
