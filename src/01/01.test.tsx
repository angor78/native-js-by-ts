import {mult, removeChar, sum} from "./01";

let a: number
let b: number
let word: string
beforeEach(() => {
  a = 1
  b = 2
  word = 'sentense'
})

test.skip('sum should be', () => {

  const result = sum(a, b)
  //expept result
  expect(result).toBe(3)
})
test.skip('mult should be correct', () => {

  const result = mult(a, b)
  expect(result).toBe(2)

})
test.skip("removeChar should be remove first and last char from word", () => {
  const splicer = removeChar(word)
  expect(splicer).toBe("entens")
})