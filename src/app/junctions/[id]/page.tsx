"use client"

import { getCameras } from "@/lib/data"
import CameraCard from "@/components/CameraCard/CameraCard"
import { usePathname } from "next/navigation"
import React from "react"
import { Container, Grid, Typography } from "@mui/material"

type Camera = {
  id: number
  name: string
  ip: string
  video_feed_url: string
  green: number
  count: number
}

export default function JunctionCameras() {
  const pathname = usePathname()

  const id = pathname.split("/").pop()
  const [cameras, setCameras] = React.useState<Camera[]>([])

  React.useEffect(() => {
    if (id !== undefined) {
      getCameras({ junctionId: id }).then((data) => {
        setCameras(data)
      })
    }
  }, [])

  if (cameras.length <= 0) {
    return (
      <Container
        sx={{
          display: "flex",
          flexGrow: "1",
          height: "80dvh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">No Cameras Found</Typography>
      </Container>
    )
  }

  return (
    <Grid container spacing={2}>
      {cameras.map((camera) => (
        <Grid key={camera.id} item xs={4}>
          <CameraCard
            cameraName={camera.name}
            ipAddress={camera.ip}
            source={camera.video_feed_url}
            green={camera.green}
            count={camera.count}
          />
        </Grid>
      ))}
    </Grid>
  )
}
