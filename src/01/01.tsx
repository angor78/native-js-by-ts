export type MenPropsType = {
  name: string
  age: number
}
export type MotherPropsType = {
  name: string
  age: number
}
export const makeDeepCopySimpleObj = (obj: MenPropsType) => {
  return {...obj}
}

export type ObjInObjPropsType = MenPropsType & {
  mother: MotherPropsType
}
export const makeCopyObjInObj = (obj: ObjInObjPropsType) => {
  return {...obj, mother: {...obj.mother}}
}
export const changeMotherAge = (obj: ObjInObjPropsType, newAge: number) => {
  return {...obj, mother: {...obj.mother, age: newAge}}
}
type SingleIngridientType = {
  title: string
  amount: number
}
type FavoriteDish = {
  title: string
  ingredients: Array<SingleIngridientType>
}
type ParentsType = {
  name: string
  age: number
  favoriteDish: FavoriteDish
}
type WorkType = {
  position: string
  experience: number
}
type MotherType = {
  name: string
  age: number
  work: WorkType
  parents: Array<ParentsType>
}

export type makeDeepCopyManPropsType = {
  name: string
  age: number
  mother: MotherType
}

export const makeDeepCopyMan = (obj: makeDeepCopyManPropsType) => {
  return {
    ...obj,
    mother: {
      ...obj.mother, work: {...obj.mother.work},
      parents: [...obj.mother.parents.map(el => el = {
        ...el,
        favoriteDish: {
          ...el.favoriteDish,
          ingredients: [...el.favoriteDish.ingredients.map(i => i={...i})]
        }
      })]
    }
  }
}
export const changeIngredientsFavoriteDish = (obj: makeDeepCopyManPropsType, ingridient: string) => {
  return {
    ...obj,
    mother: {
      ...obj.mother,
      work: {...obj.mother.work},
      parents: [...obj.mother.parents.map(el => el = {
        ...el,
        favoriteDish: {
          ...el.favoriteDish,
          ingredients: [...el.favoriteDish.ingredients.map(i => el.favoriteDish.ingredients[0] ?  {
            ...i,
            title: ingridient
          } : {...i})]
        }
      })]
    }
  }
}

type UserType = {
  name: string
  age: number
  address: { city: string, house: number }
  books: Array<string>
}
type SingleFriendType = {
  name: string
  age: number
}
type UserChangedType = {
  name: string
  age: number
  address: { city: string, house: number }
  books: Array<string>
  friends:Array<SingleFriendType>
}


export const updateUserBooks = (user: UserType, oldBook: string, newBook: string) => {
  return {
    ...user,
    books: user.books.map(b => b === oldBook ? newBook : b)
  }
}
export const updateUserAddress = (user: UserType, newCity: string) => {
  return {
    ...user,
    address: {...user.address, city: newCity}
  }
}
export const addBooks = (user: UserType, newBook: string) => {
  return {
    ...user,
    books: [...user.books, newBook]
  }
}
export const addFriend = (user: UserType, newFriend: SingleFriendType) => {
  return {
    ...user,
    friends: [newFriend]
  }
}

export const changeFriendAgeField = (user: UserChangedType, nameFriend: string, newAge: number) => {
  return {
    ...user,
    friends:[...user.friends,user.friends.find(el=>el.name===nameFriend?el.age=newAge:el)]
  }
}
