import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

const StudentUpdateModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Modal
        open={open}
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
