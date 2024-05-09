"use client"

import VideocamIcon from "@mui/icons-material/Videocam"
import LanIcon from "@mui/icons-material/Lan"
import React from "react"
import VideoPlayer from "../VideoPlayer"
import ExpandedCameraCard from "./ExpandedCameraCard"
import { Box, Card, Tooltip, Typography } from "@mui/material"

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
    <Tooltip title="Expand Video" placement="top">
      <Card
        onClick={setExpanded}
        variant="outlined"
        sx={{
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            aspectRatio: 16 / 9,
          }}
        >
          <VideoPlayer videoSource={source} />
        </Box>
        <Box
          sx={{
            px: 2,
            py: 2,
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <VideocamIcon />
            <Typography component={"p"} variant="body1">
              {cameraName}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <LanIcon />{" "}
            <Typography component={"p"} variant="body1">
              {ipAddress}
            </Typography>
          </Box>
        </Box>
      </Card>
    </Tooltip>
  )
}

export default CameraCard
