import {
  addFriends,
  findAnn, findBestStudents, getSumScores,
  make3BestStudents,
  makeBestStudents,
  makeDeepCopy,
  makeDeepCopyStudents, makeNamesWithComma, makeNamesWithSpace, makeNickIsMarried, makenotMarriedStudents,
  makeSortedByScores,
  makeSortedStudents, makeStudentsNames, makeTrueStudents,
  shadowCopy,
  shadowCopyStudents
} from "./06";


test('homework_1', () => {
  const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
  }

  //1. Создайте поверхностную копию объекта user
  let copyUser = shadowCopy(user)
  expect(copyUser.name).toBe('Bob')
  expect(user.friends === copyUser.friends).toBe(true)
  expect(user === copyUser).toBe(false)
})
test('homework_2', () => {
  const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
  }

//2. Полная (глубокая) копия объекта user
  let deepCopyUser = makeDeepCopy(user);
  expect(deepCopyUser.name).toBe('Bob')
  expect(user.friends === deepCopyUser.friends).toBe(false)
  expect(user === deepCopyUser).toBe(false)
  expect(deepCopyUser.friends[0]).toBe("Alex")
})
test('Homework_3', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];

  //3. Поверхностная копия массива students
  let copyStudents = shadowCopyStudents(students);
  copyStudents[0].age = 1
  expect(students.length === copyStudents.length).toBe(true)
  expect(students === copyStudents).toBe(false)
  expect(copyStudents[0].name).toBe('Bob')
  expect(students[0].age).toBe(1)
  expect(students[0].age === copyStudents[0].age).toBe(true)
})
test('Homework_4', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//4*. Полная (глубокая) копия массива students (map)
  let deepCopyStudents = makeDeepCopyStudents(students);
  deepCopyStudents[0].age = 1
  expect(students.length === deepCopyStudents.length).toBe(true)
  expect(students === deepCopyStudents).toBe(false)
  expect(deepCopyStudents[0].name).toBe('Bob')
  expect(students[0].age === deepCopyStudents[0].age).toBe(false)

})
test('Homework_5', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
  let sortedByName = makeSortedStudents(students);
  console.log(sortedByName);
  expect(students.length === sortedByName.length).toBe(true)
  expect(students === sortedByName).toBe(false)
  expect(sortedByName[0].name).toBe("Alex")
})
test('Homework_5a', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
  let sortedByScores = makeSortedByScores(students);
  console.log(sortedByScores);
  expect(students.length === sortedByScores.length).toBe(true)
  expect(students === sortedByScores).toBe(false)
  expect(sortedByScores[0].scores).toBe(120)
})
test('Homework_6', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
  let bestStudents = makeBestStudents(students)
  console.log(bestStudents)
  expect(bestStudents.length).toBe(4)
})
test('Homework_6a', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
  let bestStudents = make3BestStudents(students)
  console.log(bestStudents)
  expect(bestStudents.length).toBe(3)
})
test('Homework_7', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//7. Сформируйте массив холостых студентов (filter)
  let notMarriedStudents = makenotMarriedStudents(students);
  console.log(notMarriedStudents)
  expect(notMarriedStudents.length).toBe(4)
})
test('Homework_8', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//8. Сформируйте массив имён студентов (map)
  let studentsNames = makeStudentsNames(students);
  console.log(studentsNames)
  expect(studentsNames.length).toBe(6)
  expect(studentsNames[0]).toBe("Bob")
})
test('Homework_8a', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//8a. Сформируйте строку из имён студентов, разделённых
// - пробелом (join)
// - запятой (join)
  let namesWithSpace = makeNamesWithSpace(students);
  console.log(namesWithSpace)
  let namesWithComma = makeNamesWithComma(students);
  console.log(namesWithComma)
})
test('Homework_9', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];

//9. Добавьте всем студентам свойство "isStudent" со значением true (map)
  let trueStudents = makeTrueStudents(students);
  console.log(trueStudents)
  expect(trueStudents[0].isStudent).toBe(true)

})
test('Homework_10', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
  let studentsWithMarriedNick = makeNickIsMarried(students);
  console.log(studentsWithMarriedNick)
  expect(studentsWithMarriedNick[2].isMarried).toBe(true)
})
test('Homework_11', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];
//11. Найдите студента по имени Ann (find)
  let ann = findAnn(students);
  console.log(ann)

})
test('Homework_12', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];

//12. Найдите студента с самым высоким баллом (reduce)
// - c помощью reduce
// - *не испльзуя методы массивов и Math.max()*
  let bestStudent = findBestStudents(students);
  console.log(bestStudent)
  expect(bestStudent.name).toBe("Nick")
})
test('Homework_13', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];

//13. Найдите сумму баллов всех студентов (reduce)
  let totalScores = getSumScores(students)
  console.log(totalScores)
  expect(totalScores).toBe(610)
})
test('Homework_14', () => {
  const students = [
    {
      name: "Bob",
      age: 22,
      isMarried: true,
      scores: 85
    },
    {
      name: "Alex",
      age: 21,
      isMarried: true,
      scores: 90,
    },
    {
      name: "Nick",
      age: 20,
      isMarried: false,
      scores: 120
    },
    {
      name: "John",
      age: 19,
      isMarried: false,
      scores: 100
    },
    {
      name: "Helen",
      age: 20,
      isMarried: false,
      scores: 110
    },
    {
      name: "Ann",
      age: 20,
      isMarried: false,
      scores: 105
    },
  ];

// и добавляет в каждому студенту свойство "friends",
// значением которого является массив имён всех остальных студентов из массива students,
// за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
  let newStudents = addFriends(students)
  console.log(newStudents);
})