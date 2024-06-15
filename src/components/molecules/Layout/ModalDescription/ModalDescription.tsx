import { Student } from '@/@types/Types'
import { Box, Button, FormControl, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

export type Props = {
  student?: Student,
  studentList: Student[],
  setStudentList: React.Dispatch<React.SetStateAction<Student[]>>,
  id: number,
  setId: React.Dispatch<React.SetStateAction<number>>,
  switchModal: React.Dispatch<React.SetStateAction<boolean>>,
  setIsDisplayAlert: React.Dispatch<React.SetStateAction<boolean>>,
}

const ModalDescription = ({ student, studentList, setStudentList, id, setId, switchModal, setIsDisplayAlert }: Props) => {
  const [editedStudent, setEditedStudent] = React.useState<Student | undefined>(student)
  const [hasNameError, setHasNameError] = React.useState<boolean>(false)
  const [hasAgeError, setHasAgeError] = React.useState<boolean>(false)
  const [nameLengthError, setNameLengthError] = React.useState<boolean>(false)

  const clickSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    changeStudents()
    switchModal(false)
    setIsDisplayAlert(true)
  }

  const inputName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    const isEmpty = inputValue === ''
    const lengthOver = inputValue.length >= 20
    const editedStudentOrt = { ...editedStudent! }

    editedStudentOrt.name = inputValue
    console.log('editedStudentOrt', editedStudentOrt)
    console.log('editStudent', editedStudent)
    setEditedStudent(editedStudentOrt)
    setHasNameError(isEmpty)
    setNameLengthError(lengthOver)
    console.log('nameValue', editedStudentOrt.name)
  }

  const inputAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    const editedStudentOrt = { ...editedStudent! }

    editedStudentOrt.age = parseInt(inputValue)
    setEditedStudent(editedStudentOrt)
    console.log('ageValue', editedStudentOrt.age)
  }

  const changeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    const editedStudentOrt = { ...editedStudent! }
    console.log('value', event.target.value)

    editedStudentOrt.age = parseInt(inputValue)
    setEditedStudent(editedStudentOrt)
    console.log('ageValue', editedStudentOrt.age)
  }

  const validateStudent = (): boolean => {
    const nameBlankValidate = editedStudent!.name === ''
    const nameLengthValidate = editedStudent!.name.length >= 20
    const ageValidate = editedStudent!.age === 0
    setHasNameError(nameBlankValidate)
    setHasAgeError(ageValidate)
    setNameLengthError(nameLengthValidate)
    console.log('namelength', editedStudent!.name.length)
    console.log('hasNameError', hasNameError)
    console.log('hasAgeError', hasAgeError)
    return nameBlankValidate || nameLengthValidate || ageValidate
  }

  const changeStudents = () => {
    console.log('cs start')
    if (validateStudent()) return
    console.log('through validate')

    const editedStudentOrta = { ...editedStudent! }
    const studentListOrta = studentList.concat()
    console.log('editedStudentOrta', editedStudentOrta)

    if (editedStudent!.id === 0) {
      console.log('through if (editedStudent.id === 0)')
      editedStudentOrta.id = id
      setId(id + 1)
    }

    studentListOrta.map((stu, i) => {
      const existsInStudentList = stu.id === editedStudentOrta.id
      console.log(`existsInStudent${i}回目`, stu.id === editedStudentOrta.id)
      if (existsInStudentList) {
        studentListOrta[i] = editedStudentOrta
        setStudentList(studentListOrta)
        console.log(studentListOrta)
        return
      }
    })


  }

  return (
    <>
      <Stack
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={clickSubmit}
      >
        <TextField
          required
          id='name-input'
          label='氏名'
          placeholder='田中太郎'
          defaultValue={student ? student.name : ''}
          error={hasNameError || nameLengthError}
          helperText={hasNameError ? (
            <>
              名前を入力してください。
            </>
          )
            :
            nameLengthError ? (
              <>
                名前を短くしてください。
              </>
            )
              :
              ''}
          onChange={inputName}
          sx={{ mt: 3 }}
        />
        <TextField
          select
          required
          id='age-input'
          label='年齢'
          placeholder='helowa'
          defaultValue={student ? student.age : ''}
          error={hasAgeError}
          helperText={hasAgeError ? '年齢が未入力です。' : ''}
          sx={{  mt: 3 }}
          onChange={inputAge}
        >
          {
            Array(19).fill(0).map((option, i) => {
              if (i > 5 && i < 19) {
                return (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                )
              }
            })
          }
        </TextField>
        <FormControl
          required
        >
          <FormLabel id='gender-input' sx={{ mt: 3, ml: 2 }}>性別</FormLabel>
          <RadioGroup
            sx={{ ml: 5 }}
            defaultValue={student?.gender === 'femele' ? 'femele' : 'male'}
            onChange={changeGender}
          >
            <FormControlLabel
              value='male'
              control={<Radio />}
              label='男'
            />
            <FormControlLabel
              value='femele'
              control={<Radio />}
              label='女'
            />
          </RadioGroup>
        </FormControl>
        <Button variant='contained' type='submit' sx={{ mt: 2}}>
          送信
        </Button>
      </Stack>
    </>
  )
}

export default ModalDescription
