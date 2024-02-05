'use client'

import React from 'react'
// import AddIcon from '@mui/icons-material/Add'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import { addJunction } from '@/app/lib/data'

const modalStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#000',
  border: '1px solid hsla(0, 0%, 100%, 0.145)',
  borderRadius: '0.5rem',
  boxShadow: 24,
  padding: '12px 24px 24px',
}

const BootstrapFormControl = styled(FormControl)(({ theme }) => ({
  '&:focus-within': {
    '& .MuiInputLabel-root': {
      color: '#fff',
    },
  },
}))

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: '#1A1A1A',
    border: '1px solid',
    borderColor: '#1a1a1a',
    borderRadius: '8px',
    color: '#fff',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),

    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))

const SidebarHeader = ({
  onAddJunction,
}: {
  onAddJunction?: () => Promise<void>
}) => {
  const [showModal, setShowModal] = React.useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
  }

  const handleSubmit = async (formData: FormData) => {
    const rawFormData = {
      junctionName: formData.get('junction-name'),
    }

    addJunction({ junctionName: rawFormData.junctionName as string })
      .then(onAddJunction)
      .finally(() => handleCloseModal())
  }

  return (
    <div className='flex items-center'>
      <h1 className='flex-1 text-lg font-medium'>Junctions</h1>
      {/* <button
        className='inline-flex rounded-md bg-white px-1 py-1 text-sm text-black'
        type='submit'
        onClick={handleOpenModal}
      >
        <AddIcon />
      </button> */}
      <Modal
        open={showModal}
        onClose={handleCloseModal}
        slotProps={{
          backdrop: {
            sx: {
              backdropFilter: 'blur(35px)',
              backgroundColor: 'hsla(0, 0%, 0%, 0.6)',
            },
          },
        }}
      >
        <Box sx={modalStyle}>
          <form action={handleSubmit}>
            <Typography
              id='modal-modal-title'
              variant='h6'
              component='h2'
              className='mb-4'
            >
              Add a Junction
            </Typography>
            <BootstrapFormControl variant='standard'>
              <InputLabel
                shrink
                htmlFor='junction-name'
                className=' text-white/60'
              >
                Junction Name
              </InputLabel>
              <BootstrapInput name='junction-name' id='junction-name' />
              <button
                className='mt-4 rounded-lg border border-[#1a1a1a] bg-[#ededed] px-4 py-2 font-medium text-[#0a0a0a] hover:bg-[#ccc]'
                type='submit'
              >
                Add Junction
              </button>
            </BootstrapFormControl>
          </form>
        </Box>
      </Modal>
    </div>
  )
}

export default SidebarHeader
