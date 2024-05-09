"use client"

import {
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material"
import Link from "next/link"
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
          {navigationItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <Link href={item.path} passHref legacyBehavior>
                <ListItemButton component="a">
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
