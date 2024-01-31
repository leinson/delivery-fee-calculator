import "@testing-library/jest-dom"
import { calculateDeliveryFee } from "./calculateDeliveryFee"
import dayjs from "dayjs"

describe("In calculateDeliveryFee", () => {
  let orderTime = dayjs("2024-01-17T15:30")
  let deliveryFeeFormData = {
    cartValue: "10",
    deliveryDistance: "1000",
    numberOfItems: "4",
  }

  test("Minimum delivery fee calculated correctly", () => {
    expect(calculateDeliveryFee(deliveryFeeFormData, orderTime)).toBe(2)
  })
  test("Rush hour multiplies delivery fee by *1.2", () => {
    orderTime = dayjs("2024-01-26T16:00")
    expect(calculateDeliveryFee(deliveryFeeFormData, orderTime)).toBe(2.4)
  })
  test("Delivery fee cannot be over 15€", () => {
    deliveryFeeFormData = {
      cartValue: "1",
      deliveryDistance: "2000",
      numberOfItems: "10",
    }
    expect(calculateDeliveryFee(deliveryFeeFormData, orderTime)).toBe(15)
  })
  test("Free delivery, if cart value is 200€ or more", () => {
    deliveryFeeFormData = {
      cartValue: "200",
      deliveryDistance: "2000",
      numberOfItems: "10",
    }
    expect(calculateDeliveryFee(deliveryFeeFormData, orderTime)).toBe(0)
  })
})
