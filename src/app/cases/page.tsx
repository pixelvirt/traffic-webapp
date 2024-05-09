"use client"

import { getViolations } from "@/lib/data"
import { Box, ThemeProvider, Toolbar, createTheme } from "@mui/material"
import {
  MRT_ColumnDef,
  MRT_Table,
  useMaterialReactTable,
} from "material-react-table"
import Image from "next/image"
import { useEffect, useMemo, useState } from "react"

type Case = {
  object_id: string
  violation_type: string
  violation_date_time: string
  image_url: string
  camera_id: number
}

export default function Cases() {
  const [violations, setViolations] = useState<Case[]>([])

  useEffect(() => {
    getViolations().then((data) => {
      setViolations(data)
    })
  }, [])

  const theme = createTheme({
    palette: {
      background: {
        default: "#000",
      },
      text: {
        disabled: "#fff",
        secondary: "#fff",
        primary: "#fff",
      },
    },
  })

  const columns = useMemo<MRT_ColumnDef<Case>[]>(
    () => [
      {
        accessorFn: (row) => `${row.image_url}`,
        id: "image",
        header: "Image",
        Cell: ({ row }) => {
          return (
            <Box>
              <Image
                src={row.original.image_url}
                alt="image"
                width={100}
                height={100}
              />
            </Box>
          )
        },
      },
      {
        accessorKey: "violation_type",
        header: "Violation Type",
        Cell: ({ row }) => {
          let violationType = row.original.violation_type
            .split(".")[1]
            .split("_")
            .join(" ")
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textTransform: "capitalize",
                gap: 1,
              }}
            >
              {violationType}
            </Box>
          )
        },
      },
      {
        accessorKey: "violation_date_time",
        header: "Time",
      },
      {
        accessorKey: "object_id",
        header: "ID",
      },
      {
        accessorKey: "camera_id",
        header: "Camera ID",
      },
    ],
    [],
  )

  const table = useMaterialReactTable({
    columns,
    data: violations,
    renderEmptyRowsFallback: () => {
      return (
        <Box sx={{ w: "100%", py: "24px", textAlign: "center" }}>
          <p>No cases found</p>
        </Box>
      )
    },
  })
  return (
    <Box>
      <Toolbar />
      <MRT_Table table={table} />
    </Box>
  )
}
