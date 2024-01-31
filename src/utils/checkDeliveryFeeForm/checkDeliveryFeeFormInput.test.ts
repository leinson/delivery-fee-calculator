import "@testing-library/jest-dom"
import { checkDeliveryFeeFormInput } from "./checkDeliveryFeeFormInput"
import dayjs from "dayjs"

describe("In the delivery fee form", () => {
  let orderTime = dayjs("2024-01-17T15:30")
  const deliveryFeeFormData = {
    cartValue: "10",
    deliveryDistance: "1000",
    numberOfItems: "4",
  }

  test("if the input values are correct, return true", () => {
    expect(checkDeliveryFeeFormInput(deliveryFeeFormData, orderTime)).toBe(true)
  })
  test("if a form field is empty, return false", () => {
    deliveryFeeFormData["cartValue"] = ""
    expect(checkDeliveryFeeFormInput(deliveryFeeFormData, orderTime)).toBe(
      false
    )
  })
  test("if the cartValue is invalid, return false", () => {
    deliveryFeeFormData["cartValue"] = "twelve"
    expect(checkDeliveryFeeFormInput(deliveryFeeFormData, orderTime)).toBe(
      false
    )
  })
  test("if only non numerical characters are entered, return false", () => {
    deliveryFeeFormData["cartValue"] = "10"
    deliveryFeeFormData["deliveryDistance"] = "thousand"
    expect(checkDeliveryFeeFormInput(deliveryFeeFormData, orderTime)).toBe(
      false
    )
  })
  test("if only non numerical characters are entered, return false", () => {
    deliveryFeeFormData["cartValue"] = "10"
    deliveryFeeFormData["deliveryDistance"] = "thousand"
    expect(checkDeliveryFeeFormInput(deliveryFeeFormData, orderTime)).toBe(
      false
    )
  })
  test("if order time is invalid, return false", () => {
    orderTime = dayjs("0000-01-17T15:30")
    expect(checkDeliveryFeeFormInput(deliveryFeeFormData, orderTime)).toBe(
      false
    )
  })
})
