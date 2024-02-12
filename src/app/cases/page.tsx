'use client'

import { Box, MenuItem, ThemeProvider, createTheme } from '@mui/material'
import {
  MRT_ColumnDef,
  MRT_Table,
  useMaterialReactTable,
} from 'material-react-table'
import Image from 'next/image'
import { useMemo } from 'react'

type Case = {
  objectID: number
  violationType: string
  Time: string
  imagePath: string
  cameraID: number
}

const data: Case[] = [
  {
    objectID: 1,
    violationType: 'Speeding',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 1,
  },
  {
    objectID: 2,
    violationType: 'Running Red Light',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 2,
  },
  {
    objectID: 3,
    violationType: 'Speeding',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 3,
  },
  {
    objectID: 4,
    violationType: 'Running Red Light',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 4,
  },
  {
    objectID: 5,
    violationType: 'Speeding',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 5,
  },
  {
    objectID: 6,
    violationType: 'Running Red Light',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 6,
  },
  {
    objectID: 7,
    violationType: 'Speeding',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 7,
  },
  {
    objectID: 8,
    violationType: 'Running Red Light',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 8,
  },
  {
    objectID: 9,
    violationType: 'Speeding',
    Time: '2021-10-12 12:00:00',
    imagePath: 'https://placehold.co/200/png',
    cameraID: 9,
  },
]

export default function cases() {
  const theme = createTheme({
    palette: {
      background: {
        default: '#000',
      },
      text: {
        disabled: '#fff',
        secondary: '#fff',
        primary: '#fff',
      },
    },
  })

  const columns = useMemo<MRT_ColumnDef<Case>[]>(
    () => [
      {
        accessorKey: 'objectID',
        header: 'ID',
      },
      {
        accessorKey: 'violationType',
        header: 'Violation Type',
      },
      {
        accessorKey: 'Time',
        header: 'Time',
      },

      {
        accessorFn: (row) => `${row.imagePath}`,
        id: 'image',
        header: 'Image',
        Cell: ({ row }) => (
          <Box>
            <Image
              src={row.original.imagePath}
              alt='image'
              width={200}
              height={400}
            />
          </Box>
        ),
      },

      {
        accessorKey: 'cameraID',
        header: 'Camera ID',
      },
    ],
    [],
  )

  const table = useMaterialReactTable({
    columns,
    data: data,
    renderEmptyRowsFallback: ({ table }) => {
      return (
        <div className='w-full py-6 text-center text-lg italic'>
          <p>No cases found</p>
        </div>
      )
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <MRT_Table table={table} />
    </ThemeProvider>
  )
}
