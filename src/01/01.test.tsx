import {
  addBooks, addFriend,
  changeIngredientsFavoriteDish,
  changeMotherAge,
  makeCopyObjInObj,
  makeDeepCopyMan,
  makeDeepCopySimpleObj, updateUserAddress, updateUserBooks
} from "./01";


test('deep copy simple', () => {
  let man = {
    name: 'John',
    age: 28
  };

  const manCopy = makeDeepCopySimpleObj(man)
  expect(man.name).toBe(manCopy.name)
  expect(man.age).toBe(manCopy.age)
})

test('deep copy object inside an object', () => {
  let man1 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50
    }
  };
  const copyMan = makeCopyObjInObj(man1)
  const changedMan = changeMotherAge(man1, 22)

  expect(man1.name).toBe(copyMan.name)
  expect(man1.mother.name).toBe(copyMan.mother.name)
  expect(man1.mother.age).not.toBe(changedMan.mother.age)

})

test('deep copy and change nested objects', () => {
  let man = {
    name: 'John',
    age: 28,
    mother: {
      name: "Kate",
      age: 50,
      work: {
        position: "doctor",
        experience: 15
      },
      parents: [
        {
          name: "Kevin",
          age: 80,
          favoriteDish: {
            title: "borscht",
            ingredients: [
              {title: "beet", amount: 3},
              {title: "potatoes", amount: 5},
              {title: "carrot", amount: 1},
            ]
          }
        },
        {
          name: "Jennifer",
          age: 78,
          favoriteDish: {
            title: "sushi",
            ingredients: [
              {title: "fish", amount: 1},
              {title: "rise", amount: 0.5}
            ]
          }
        },
      ]
    }
  }

  const deepCopyMan = makeDeepCopyMan(man)
  expect(man.mother.parents[0].favoriteDish.ingredients[0].title).toBe(deepCopyMan.mother.parents[0].favoriteDish.ingredients[0].title)
  const changedMan = changeIngredientsFavoriteDish(man, 'pig')
  expect(man.mother.parents[0].favoriteDish.ingredients[0].title).not.toBe(changedMan.mother.parents[0].favoriteDish.ingredients[0].title)
  expect(changedMan.mother.parents[0].favoriteDish.ingredients[0].title).toBe('pig')

})

test('update field object', () => {
  let user = {
    name: 'Andrey',
    age: 43,
    address: {
      city: "Penza",
      house: 66
    },
    books: ['js', 'react', 'html']
  }

  const changedUser = updateUserBooks(user, 'js', 'ts')
  expect(user.books.length).toBe(3)
  expect(changedUser.books[0]).toBe('ts')
  expect(user.books[0]).toBe('js')
})
test('update field object vol2', () => {
  let user = {
    name: 'Andrey',
    age: 43,
    address: {
      city: "Penza",
      house: 66
    },
    books: ['js', 'react', 'html']
  }

  const changedUser = updateUserAddress(user,"Alupka")
  expect(changedUser.address.city).toBe('Alupka')
  expect(user.address.city).toBe('Penza')
})
test('add element to array', () => {
  let user = {
    name: 'Andrey',
    age: 43,
    address: {
      city: "Penza",
      house: 66
    },
    books: ['js', 'react', 'html']
  }

  const changedUser = addBooks(user, 'css')
  expect(user.books.length).toBe(3)
  expect(changedUser.books.length).toBe(4)
  expect(changedUser.books[3]).toBe('css')
})
test('add element to array object', () => {
  let user = {
    name: 'Andrey',
    age: 43,
    address: {
      city: "Penza",
      house: 66
    },
    books: ['js', 'react', 'html'],
    friends:[]
  }
  const newFriend = {name:'Bob',age:36}
  const changedUser = addFriend(user, newFriend)
  expect(changedUser.friends[0].age).toBe(36)
})