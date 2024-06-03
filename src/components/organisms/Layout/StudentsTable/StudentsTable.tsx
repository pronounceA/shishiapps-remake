import { Student } from '@/@types/Types'
import Button from '@mui/material/Button/Button'
import Paper from '@mui/material/Paper/Paper'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import TableContainer from '@mui/material/TableContainer/TableContainer'
import TableHead from '@mui/material/TableHead/TableHead'
import TableRow from '@mui/material/TableRow/TableRow'
import React from 'react'
import StyledTableCell from './StyledTableCell'
import { Box, Typography } from '@mui/material'

type Props = {
  studentList: Student[]
}
const StudentsTable = ({ studentList }: Props) => {
  return (
    <>
      {studentList.length !== 0 ? (
        <Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align='right'>ID</StyledTableCell>
                <StyledTableCell>氏名</StyledTableCell>
                <StyledTableCell sx={{ width: 400 }}></StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {studentList.map((student: Student) => (
                <TableRow
                  key={student.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  hover
                >
                  <StyledTableCell align='right'>
                    {student.id}
                  </StyledTableCell>
                  <StyledTableCell>
                    {student.name}
                  </StyledTableCell>
                  <StyledTableCell>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Button variant='contained'>詳細</Button>
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box justifyContent='flex-end' display='flex'>
          <Button variant='contained' sx={{ width: 180, marginTop: 4 }}>
            新規追加
          </Button>
        </Box>
        </Box>
      )
      :
      (
        <Box sx={{ width: 1}}>
          <Typography>
            ※登録されている生徒データがありません。
          </Typography>
          <Box justifyContent='flex-end' display='flex'>
            <Button variant='contained' sx={{ width: 180, marginTop: 4 }}>
              新規追加
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}

export default StudentsTable
