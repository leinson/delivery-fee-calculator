import "@testing-library/jest-dom"
import { calculateItems } from "./calculateItems"

test("If there are less than 5 items, no surcharge added", () => {
  const numberOfItems = 4
  expect(calculateItems(numberOfItems)).toBe(0)
})

test("If there are 5 or more items, 0.50€ is added for each item", () => {
  let numberOfItems = 5
  expect(calculateItems(numberOfItems)).toBe(0.5)

  numberOfItems = 11
  expect(calculateItems(numberOfItems)).toBe(3.5)
})

test("If there are 12 or more items, a 1,20€ bulk fee is added", () => {
  let numberOfItems = 10
  expect(calculateItems(numberOfItems)).toBe(3)

  numberOfItems = 14
  expect(calculateItems(numberOfItems)).toBe(6.2)
})
