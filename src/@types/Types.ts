export type Student = {
  id: number,
  name: string,
  age: number,
  gender: boolean,
  perdonInfo: PersonalInfo,
}

export type PersonalInfo = {
  tel: string,
  address: string,
}
