import Sidebar from "@/components/sidebar/Sidebar"
import { Box, Toolbar } from "@mui/material"

export default async function Layouts({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
