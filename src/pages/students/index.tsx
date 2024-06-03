import React from 'react'

import type { NextPage } from 'next'
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from '@mui/material'
import { Student } from '@/@types/Types'
import { styled } from '@mui/material'
import fsPromises from 'fs/promises'
import path from 'path'

// import DefaultLayout from '@/layouts/DefaultLayout'

type Props = {
  students: Student[]
}

const Students: NextPage<Props> = ({ students }) => {
  const [studentList, setStudentList] = React.useState<Student[]>([]);

  React.useEffect(() => {
    setStudentList(students);
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} >
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
    </>
  )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.info.light,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'src/data/students.json');
  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data.toString());

  return {
    props: objectData
  }
}

export default Students
