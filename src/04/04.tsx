import {StudentsType} from "./04.test";

const ages = [22, 23, 45, 1, 91, 100]

const predicat = (age: number) => {
  return age > 90
}
const oldAges = [100]

export type CoursersType = {
  title: string
  price: number
}
let courses = [
  {title: "css", price: 100},
  {title: "JS", price: 200},
  {title: "React", price: 160},
  {title: "Python", price: 100}
]

export const myMap = (array: StudentsType[], callback: any) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i])
  }
  return newArray
}
export const myFilter = (array: StudentsType[], callback: any) => {
  const newArray = []
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArray[i] = array[i]
    }
  }
  return newArray
}
