import React from 'react'

import type { NextPage } from 'next'
import { Student } from '@/@types/Types'
import { styled } from '@mui/material'
import fsPromises from 'fs/promises'
import path from 'path'
import StudentsTable from '@/components/organisms/Layout/StudentsTable'
import StudentUpdateModal from '@/components/organisms/Layout/StudentUpdateModal/StudentUpdateModal'

// import DefaultLayout from '@/layouts/DefaultLayout'

type Props = {
  students: Student[]
}

const Students: NextPage<Props> = ({ students }) => {
  const [studentList, setStudentList] = React.useState<Student[]>([]);
  const [isOpenUpdateModal, setIsOpenUpdateModal] = React.useState<boolean>(false);
  const [clickedStudent, setClickedStudent] = React.useState<Student | null>(null);

  const switchUpdateModal = (bool: boolean) => {
    setIsOpenUpdateModal(bool);
  }

  React.useEffect(() => {
    setStudentList(students);
  }, [])

  return (
    <>
      <StudentsTable studentList={studentList} switchModal={switchUpdateModal} setClickedStudent={setClickedStudent} />
      <StudentUpdateModal
        isOpen={isOpenUpdateModal}
        switchModal={switchUpdateModal}
        clickedStudent={clickedStudent}
      />
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
