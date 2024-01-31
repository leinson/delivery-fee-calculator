import { Dayjs } from "dayjs"
import { calculateCartValue } from "./calculateCartValue"
import { calculateDistance } from "./calculateDistance"
import { calculateItems } from "./calculateItems"
import { calculateRushHour } from "./calculateRushHour"
import { DeliveryFeeFormDataProps } from "../../types"

export const calculateDeliveryFee = (
  deliveryFeeFormData: DeliveryFeeFormDataProps,
  orderTime: Dayjs | null
): number => {
  const cartValue: number = parseFloat(deliveryFeeFormData.cartValue)
  const deliveryDistance: number = parseInt(
    deliveryFeeFormData.deliveryDistance
  )
  const numberOfItems: number = parseInt(deliveryFeeFormData.numberOfItems)
  let deliveryFeeTotal = 0

  const freeDelivery = (cartValue: number): boolean => {
    if (cartValue >= 200) {
      return true
    }
    return false
  }
  const maxDeliveryFee = () => {
    if (deliveryFeeTotal > 15) {
      console.log("maxdelivery", deliveryFeeTotal)
      deliveryFeeTotal = 15
      console.log("maxdelivery", deliveryFeeTotal)
    }
  }

  if (freeDelivery(cartValue) === false) {
    deliveryFeeTotal +=
      calculateCartValue(cartValue) +
      calculateDistance(deliveryDistance) +
      calculateItems(numberOfItems)
    if (calculateRushHour(orderTime) === true) {
      deliveryFeeTotal = deliveryFeeTotal * 1.2
    }
    maxDeliveryFee()
  }

  return Math.round(deliveryFeeTotal * 100) / 100
}
