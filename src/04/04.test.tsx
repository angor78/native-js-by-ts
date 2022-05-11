import {myMap} from "./04";

// test.skip("age should be older 90 ", () => {
//     const ages = [22, 23, 45, 1, 91, 100]
//
//     const oldAges = ages.filter(age => age > 90)
//     expect(oldAges.length).toBe(2)
//     expect(oldAges).toStrictEqual([91, 100])
//
//   }
// )
//
// test.skip("should return courses haves price < 160", () => {
//   let courses = [
//     {title: "css", price: 100},
//     {title: "JS", price: 200},
//     {title: "React", price: 150},
//     {title: "Python", price: 170}
//   ]
//
//   let cheapCourses = courses.filter(course => course.price < 160)
//
//   expect(cheapCourses.length).toBe(2)
//   expect(cheapCourses[0].title).toBe('css')
//   expect(cheapCourses[1].title).toBe('React')
//
//
// })
// export type StudentsType = {
//   id: number
//   name: string
//   age: number
//   isResident: boolean
// }
//
// const students: StudentsType[] = [
//   {id: 1, name: "User1", age: 23, isResident: true},
//   {id: 2, name: "User2", age: 45, isResident: false},
//   {id: 3, name: "User3", age: 34, isResident: false},
//   {id: 4, name: "User4", age: 21, isResident: true}
// ]
//
// test.skip("selfMap function return should be equal jsMap return", () => {
//
//   const jsMap = students.map((s: StudentsType, index) => s.isResident ? {...s, name: "Root"} : s)
//   const selfMap = myMap(students, (s: StudentsType) => s.isResident ? {...s, name: "Root"} : s)
//
//   expect(jsMap.length).toBe(4)
//   expect(jsMap[0].name).toBe('Root')
//   expect(selfMap[0].name).toBe('Root')
// })

type ManType = {
  name: string
  age: number
  lessons: Array<{ title: string }>
  address: {
    street: {
      title: string
    }
  }
}
let props: ManType;
beforeEach(() => {
  props = {
        name: "User1",
        age: 23,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
          street: {
            title: 'QQQQ'
          }
        }
      }
  }
)


// const age = props.age
// const lessons = props.lessons


test('1', () => {

  const {age, lessons,...restProps} = props
  const {address} = restProps
  // const {title} = props.address.street

  expect(age).toBe(23)
  expect(lessons.length).toBe(2)
  expect(address.street.title).toBe('QQQQ')
})

test('2',()=>{
  // let l1=props.lessons[0]
  // let l2=props.lessons[1]
  const[l1,l2]=props.lessons

  expect(l1.title).toBe('1')
  expect(l2.title).toBe('2')
  const[,ls2]=props.lessons
  expect(ls2.title).toBe('2')
  expect(props.lessons.length).toBe(2)
})