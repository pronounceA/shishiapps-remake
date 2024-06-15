import { Student } from '@/@types/Types'
import ModalDescription from '@/components/molecules/Layout/ModalDescription/ModalDescription'
import { Box, Modal, Typography } from '@mui/material'
import React from 'react'

type Props = {
  isOpen: boolean,
  switchModal: React.Dispatch<React.SetStateAction<boolean>>,
  clickedStudent: Student | undefined,
  studentList: Student[],
  setStudentList: React.Dispatch<React.SetStateAction<Student[]>>
  id: number,
  setId: React.Dispatch<React.SetStateAction<number>>
  setIsDisplayAlert: React.Dispatch<React.SetStateAction<boolean>>
}

const StudentUpdateModal = ({ isOpen, switchModal, clickedStudent, studentList, setStudentList, id, setId, setIsDisplayAlert }: Props) => {
  const handleClose = () => {
    switchModal(false)
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
          <ModalDescription
            student={clickedStudent}
            studentList={studentList}
            setStudentList={setStudentList}
            id={id}
            setId={setId}
            switchModal={switchModal}
            setIsDisplayAlert={setIsDisplayAlert}
          />
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
