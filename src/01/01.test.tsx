import {mult, sum} from "./01";

let a: number
let b: number
beforeEach(() => {
  a = 1
  b = 2
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