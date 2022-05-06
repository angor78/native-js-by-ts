import {myMap} from "./04";

test("age should be older 90 ", () => {
    const ages = [22, 23, 45, 1, 91, 100]

    const oldAges = ages.filter(age => age > 90)
    expect(oldAges.length).toBe(2)
    expect(oldAges).toStrictEqual([91, 100])

  }
)

test("should return courses haves price < 160", () => {
  let courses = [
    {title: "css", price: 100},
    {title: "JS", price: 200},
    {title: "React", price: 150},
    {title: "Python", price: 170}
  ]

  let cheapCourses = courses.filter(course => course.price < 160)

  expect(cheapCourses.length).toBe(2)
  expect(cheapCourses[0].title).toBe('css')
  expect(cheapCourses[1].title).toBe('React')


})
export type StudentsType = {
  id: number
  name: string
  age: number
  isResident: boolean
}

const students: StudentsType[] = [
  {id: 1, name: "User", age: 23, isResident: true},
  {id: 2, name: "User", age: 23, isResident: false},
  {id: 3, name: "User", age: 23, isResident: false},
  {id: 4, name: "User", age: 23, isResident: true}
]

test("selfMap function return should be equal jsMap return", () => {

  const jsMap = students.map((s: StudentsType, index) => s.isResident ? {...s, name: "Root"} : s)
  const selfMap = myMap(students, (s: StudentsType) => s.isResident ? {...s, name: "Root"} : s)

  expect(jsMap.length).toBe(4)
  expect(jsMap[0].name).toBe('Root')
  expect(selfMap[0].name).toBe('Root')
})