"use client"

import { fetchAllJunctions } from "@/lib/data"
import { Junction } from "@/lib/definitions"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material"

const drawerWidth = 240

function Sidebar() {
  const [junctions, setJunctions] = React.useState([] as Junction[])
  const pathname = usePathname()
  const id = pathname.split("/").pop()

  React.useEffect(() => {
    fetchAllJunctions().then((junctions) => setJunctions(junctions))
  }, [id])

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {junctions.map((junction, index) => (
            <ListItem key={index} disablePadding>
              <Link href={`/junctions/${junction.id}`} passHref legacyBehavior>
                <ListItemButton component="a">
                  <ListItemText primary={junction.name} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  )
}

export default Sidebar
