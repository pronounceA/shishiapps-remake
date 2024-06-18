import React from 'react'

import type { NextPage } from 'next'
import { Student } from '@/@types/Types'
import { styled, Stack } from '@mui/material'
import fsPromises from 'fs/promises'
import path from 'path'
import StudentsTable from '@/components/organisms/Layout/StudentsTable'
import StudentUpdateModal from '@/components/organisms/Layout/StudentUpdateModal/StudentUpdateModal'
import StudentListUpdateComment from '@/components/molecules/Layout/StudentListUpdatedComment/StudentListUpdateComment'


// import DefaultLayout from '@/layouts/DefaultLayout'

type Props = {
  students: Student[]
}

const Students: NextPage<Props> = ({ students }) => {
  const [studentList, setStudentList] = React.useState<Student[]>([])
  const [isOpenUpdateModal, setIsOpenUpdateModal] = React.useState<boolean>(false)
  const [clickedStudent, setClickedStudent] = React.useState<Student | undefined>(undefined)
  const [id, setId] = React.useState<number>(0)
  const [isDisplayAlert, setIsDisplayAlert] = React.useState<boolean>(false)

  React.useEffect(() => {
    setStudentList(students);
    setId(students.length)
  }, [])

  React.useEffect(() => {
    setIsDisplayAlert(false)
  }, [clickedStudent])

  return (
    <>
      <Stack>
        { isDisplayAlert &&
          <StudentListUpdateComment id={clickedStudent !== undefined ? clickedStudent.id : 0} />
        }
        <StudentsTable studentList={studentList} switchModal={setIsOpenUpdateModal} setClickedStudent={setClickedStudent} />
        <StudentUpdateModal
          isOpen={isOpenUpdateModal}
          switchModal={setIsOpenUpdateModal}
          clickedStudent={clickedStudent}
          studentList={studentList}
          setStudentList={setStudentList}
          id={id}
          setId={setId}
          setIsDisplayAlert={setIsDisplayAlert}
        />
      </Stack>
    </>
  )
}

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'src/data/students.json');
  const data = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(data.toString());

  return {
    props: objectData
  }
}

export default Students
