import "@testing-library/jest-dom"
import { cartValueFormat } from "./cartValueFormat"

test("A string integer gets converted to a number", () => {
  const cartValue = "10"
  expect(cartValueFormat(cartValue)).toBe(10)
})
test("First decimalpoint in a string is changed to a dot, and string is converted to a float number", () => {
  const cartValue = "10,20"
  expect(cartValueFormat(cartValue)).toBe(10.2)
})
test("If the string is not convertable to a number, return NaN", () => {
  const cartValue = "ten"
  expect(cartValueFormat(cartValue)).toBe(NaN)
})
test("If an acceptable string is followed by non numerical values, they get parsed away", () => {
  const cartValue = "10,20€"
  expect(cartValueFormat(cartValue)).toBe(10.2)
})
