import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

type Props = {
  isOpen: boolean,
  switchModal: (bool: boolean) => void,
}

const StudentUpdateModal = ({ isOpen, switchModal }: Props) => {
  const handleClose = () => {
    switchModal(false);
  }
  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        area-labelledby='modal-student-update-title'
        area-describedby='modal-student-update-description'
      >
        <Box>
          <Typography id='modal-student-update-title' variant='h6' component='h2'>
            title
          </Typography>
          <Typography id='modal-student-update-description' sx={{ mt: 2 }}>
            description
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

export default StudentUpdateModal
