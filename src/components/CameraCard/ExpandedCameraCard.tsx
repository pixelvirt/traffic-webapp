import CloseIcon from "@mui/icons-material/Close"
import DeleteIcon from "@mui/icons-material/Delete"
import CommuteIcon from "@mui/icons-material/Commute"
import SwapVertIcon from "@mui/icons-material/SwapVert"
import VideoPlayer from "../VideoPlayer"
import LanIcon from "@mui/icons-material/Lan"
import { Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material"

type ExpandedCameraCardProps = {
  cameraName: string
  ipAddress: string
  source: string | undefined
  green: number
  count: number
  setExpanded: () => void
}

// Expanded Card
export default function ExpandedCameraCard({
  cameraName,
  ipAddress,
  source,
  green,
  count,
  setExpanded,
}: ExpandedCameraCardProps) {
  return (
    <Box
      sx={{
        width: "100dvw",
        position: "fixed",
        left: "0",
        top: "0",
        display: "flex",
        height: "100dvh",
        overflow: "hidden",
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: (theme) => theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "28px",
          right: "28px",
        }}
      >
        <Tooltip title="Close">
          <IconButton aria-label="close" onClick={setExpanded}>
            <CloseIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        sx={{
          width: "83.33%",
          height: "100%",
        }}
      >
        <VideoPlayer videoSource={source} />
      </Box>
      <Box
        sx={{
          px: "20px",
          pt: "32px",
        }}
        className="flex w-full flex-col px-5 pt-12"
      >
        <Typography
          component="h1"
          variant="h5"
          sx={{
            marginBottom: "1.5rem",
          }}
        >
          {cameraName}
        </Typography>
        <Box className="flex flex-col gap-4">
          {/* Camera Information */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <LanIcon titleAccess="IP Address" />
            <p>{ipAddress}</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <SwapVertIcon titleAccess="Traffic flow" />
            <p>Incoming from Chabahil</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <CommuteIcon titleAccess="Vehicle count" />
            <p>{count}</p>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                height: "32px",
                width: "32px",
                borderRadius: "100%",
                backgroundColor: "green",
              }}
              className="h-8 w-8 rounded-full bg-green-500"
            ></Box>
            <p>{green} seconds</p>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
