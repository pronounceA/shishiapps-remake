export type Student = {
  id: number,
  name: string,
  age: number,
  gender: string,
  perdonInfo: PersonalInfo,
}

export type PersonalInfo = {
  tel: string,
  address: string,
}
