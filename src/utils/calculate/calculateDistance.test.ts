import "@testing-library/jest-dom"
import { calculateDistance } from "./calculateDistance"

test("If delivery distance is 1000m or less, the fee is 2€", () => {
  const deliveryDistance = 1000
  expect(calculateDistance(deliveryDistance)).toBe(2)
})

test("If delivery distance is more than 1000m, the fee increases with +1€ per 500m", () => {
  let deliveryDistance = 1499
  expect(calculateDistance(deliveryDistance)).toBe(3)

  deliveryDistance = 1500
  expect(calculateDistance(deliveryDistance)).toBe(3)

  deliveryDistance = 1501
  expect(calculateDistance(deliveryDistance)).toBe(4)
})
