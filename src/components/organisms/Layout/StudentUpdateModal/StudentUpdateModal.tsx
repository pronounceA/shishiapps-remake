import { Student } from '@/@types/Types'
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

type Props = {
  isOpen: boolean,
  switchModal: (bool: boolean) => void,
  clickedStudent: Student | null,
}

const StudentUpdateModal = ({ isOpen, switchModal, clickedStudent }: Props) => {
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
        <Box sx={modalStyle}>
          <Typography id='modal-student-update-title' variant='h4' component='h3'>
            生徒情報更新
          </Typography>
          <Typography id='modal-student-update-description' variant='h5' sx={{ mt: 2 }}>
            description
          </Typography>
        </Box>
      </Modal>
    </>
  )
}

const modalStyle = ({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1 / 2,
  minHeight: 1 / 2,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
});

export default StudentUpdateModal
