type UserType = {
  name: string
  age: number
  friends: Array<string>
}
type StudentType = {
  name: string
  age: number
  isMarried: boolean
  scores: number
}

export const shadowCopy = (obj: UserType) => {
  return {...obj}
}
export const makeDeepCopy = (obj: UserType) => {
  return {...obj, friends: [...obj.friends]}
}
export const shadowCopyStudents = (obj: Array<StudentType>) => {
  return [...obj]
}
export const makeDeepCopyStudents = (students: Array<StudentType>) => {
  return students.map(el =>({...el}))
}
export const makeSortedStudents = (students:Array<StudentType>) => {
  return students.map(el=>({...el})).sort((a,b)=>a.name>b.name?1:-1)
}
export const makeSortedByScores = (students:Array<StudentType>) => {
  return students.map(el=>({...el})).sort((a,b)=>a.scores<b.scores?1:-1)
}
export const makeBestStudents = (students:Array<StudentType>) => {
  return students.filter(el=>el.scores>=100)
}
export const make3BestStudents = (students:Array<StudentType>) => {
  return students.map(el=>({...el}))
    .sort((a,b)=>a.scores>b.scores?1:-1)
    .splice(3,5)
}
export const makenotMarriedStudents = (students:Array<StudentType>) => {
  return students.filter(el=>el.isMarried!==true)
}
export const makeStudentsNames = (students:Array<StudentType>) => {
  return students.map(el=>el.name)
}