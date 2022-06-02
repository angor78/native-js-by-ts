import {
  changeIngredientsFavoriteDish,
  changeMotherAge,
  makeCopyObjInObj,
  makeDeepCopyMan,
  makeDeepCopySimpleObj
} from "./01";


test('deep copy simple',()=>{
  let man = {
    name: 'John',
    age: 28
  };

  const manCopy = makeDeepCopySimpleObj(man)
  expect(man.name).toBe(manCopy.name)
  expect(man.age).toBe(manCopy.age)
})

test('deep copy object inside an object',()=>{
  let man1 = {
    name: 'John',
    age: 28,
    mother: {
      name: 'Kate',
      age: 50
    }
  };
  const copyMan = makeCopyObjInObj(man1)
  const changedMan = changeMotherAge(man1,22)

  expect(man1.name).toBe(copyMan.name)
  expect(man1.mother.name).toBe(copyMan.mother.name)
  expect(man1.mother.age).not.toBe(changedMan.mother.age)

})

test('deep copy and change nested objects',()=>{
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
  const changedMan=changeIngredientsFavoriteDish(man,'pig')
  expect(man.mother.parents[0].favoriteDish.ingredients[0].title).not.toBe(changedMan.mother.parents[0].favoriteDish.ingredients[0].title)

})