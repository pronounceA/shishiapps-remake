import React from 'react'
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check'

type Props = {
  id: number,
}

const StudentListUpdateComment = ({ id }: Props) => {
  return (
    <Alert icon={<CheckIcon fontSize='inherit' />} severity='success' variant='filled'>
      生徒情報を更新しました。 ID={id}
    </Alert>
  )
}

export default StudentListUpdateComment
