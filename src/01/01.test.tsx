import {mult, removeChar, sum} from "./01";

let a: number
let b: number
let word: string
beforeEach(() => {
  a = 1
  b = 2
  word = 'sentense'
})

test('sum should be', () => {

  const result = sum(a, b)
  //expept result
  expect(result).toBe(3)
})
test('mult should be correct', () => {

  const result = mult(a, b)
  expect(result).toBe(2)

})
test("removeChar should be remove first and last char from word", () => {
  const splicer = removeChar(word)
  expect(splicer).toBe("entens")
})