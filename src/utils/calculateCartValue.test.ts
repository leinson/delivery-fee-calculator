import "@testing-library/jest-dom"
import { calculateCartValue } from "./calculateCartValue"

test("If cart value is 10 or more, no surcharge is added", () => {
    const cartValue = 10

  expect(calculateCartValue(cartValue)).toBe(0)
})

test("If cart value is less than 10, surcharge is added", () => {
    const cartValue = 9

  expect(calculateCartValue(cartValue)).toBe(1)
})