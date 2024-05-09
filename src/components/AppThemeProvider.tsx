"use client"

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
