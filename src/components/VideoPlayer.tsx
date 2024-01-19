'use client'
import dynamic from 'next/dynamic'
import React from 'react'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const VideoPlayer = ({ videoSource }: { videoSource: string | undefined }) => {
  return (
    <>
      {videoSource === undefined ? (
        <div className='flex h-full items-center justify-center text-lg text-white'>
          <p>Video source not found</p>
        </div>
      ) : (
        <ReactPlayer
          url={videoSource}
          playing={true}
          controls={false}
          volume={0}
          width={'100%'}
          height={'100%'}
          loop={true}
        />
      )}
    </>
  )
}

export default VideoPlayer
