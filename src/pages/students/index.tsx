import React from 'react'

import type { NextPage } from 'next'
import { Student } from '@/@types/Types'
import { styled } from '@mui/material'
import fsPromises from 'fs/promises'
import path from 'path'
import StudentsTable from '@/components/organisms/Layout/StudentsTable'

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
      <StudentsTable studentList={ studentList } />
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
