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