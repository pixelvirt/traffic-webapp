"use client"

import { AppBar, Button, List, ListItemButton, Toolbar } from "@mui/material"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

type NavigationItem = {
  label: string
  path: string
}

const navigationItems: NavigationItem[] = [
  {
    label: "Junctions",
    path: "/junctions",
  },
  {
    label: "Cases",
    path: "/cases",
  },
]

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <List
          sx={{
            display: "flex",
            ml: "16px",
          }}
        >
          {navigationItems.map((item) => (
            <Link href={item.path} key={item.label}>
              <Button>{item.label}</Button>
            </Link>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
