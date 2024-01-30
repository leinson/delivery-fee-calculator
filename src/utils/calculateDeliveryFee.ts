import { Dayjs } from "dayjs"
import { calculateCartValue } from "./calculateCartValue"
import { calculateDistance } from "./calculateDistance"
import { calculateItems } from "./calculateItems"
import { calculateRushHour } from "./calculateRushHour"
//TODO
// Needs more tests to make sure no edge cases are faulty - especially for floats.

interface DeliveryFeeFormDataProps {
  cartValue: string
  deliveryDistance: string
  numberOfItems: string
}

export const calculateDeliveryFee = (deliveryFeeFormData: DeliveryFeeFormDataProps, orderTime: Dayjs | null) => {
  const cartValue: number = parseFloat(deliveryFeeFormData.cartValue)
  const deliveryDistance: number = parseInt(deliveryFeeFormData.deliveryDistance)
  const numberOfItems: number = parseInt(deliveryFeeFormData.numberOfItems)
  let deliveryFee = 0

  const freeDelivery = (cartValue: number): boolean => {
    if (cartValue >= 200) {
      return true
    }
    return false
  }
  const maxDeliveryFee = () => {
    if (deliveryFee > 15) {
      console.log('maxdelivery', deliveryFee)
      deliveryFee = 15
      console.log('maxdelivery', deliveryFee)
    }
  }
  
  if (freeDelivery(cartValue) === false) {
    deliveryFee += calculateCartValue(cartValue) + calculateDistance(deliveryDistance) + calculateItems(numberOfItems)
    if (calculateRushHour(orderTime) === true){
      deliveryFee = deliveryFee*1.2
    }
    maxDeliveryFee()
  }

  return Math.round(deliveryFee*100)/100
}
