import "@testing-library/jest-dom"
import { showDeliveryPrice } from "./showDeliveryPrice"

test("If the delivery price is a number, return true", () => {
  const deliveryPrice = 4
  expect(showDeliveryPrice(deliveryPrice)).toBe(true)
})
test("If the delivery price is NaN, return false", () => {
  const deliveryPrice = NaN
  expect(showDeliveryPrice(deliveryPrice)).toBe(false)
})
