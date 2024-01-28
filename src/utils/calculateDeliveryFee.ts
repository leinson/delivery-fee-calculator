import { Dayjs } from "dayjs"
import { calculateCartValue } from "./calculateCartValue"
import { calculateDistance } from "./calculateDistance"
//TODO

//Do the Cost calculations to own files
//If used comma ',' to separate decimal, convert to dot
//round decimals to 2 decimals

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


  const calculateItems = (numberOfItems: number) => {
    let itemsFee = 0
    let items = 4
    while (items < numberOfItems ) {
      itemsFee += 0.50
      console.log("itemsfee", itemsFee)
      items += 1
      console.log('items', items)
    }
    if (numberOfItems > 12) {
      itemsFee += 1.20
      console.log("itemsfee extra", itemsFee)
    }
    deliveryFee += itemsFee
  }
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
  
  const rushHour = (orderTime: Dayjs | null) => {
    const rush = [15,16,17,18,19]
   if (orderTime?.day() === 5 && rush.includes(orderTime.hour())) {
      console.log("rushday", orderTime?.day())
      console.log('hour',orderTime.hour())
      console.log('delfee before rush', deliveryFee)
      deliveryFee = deliveryFee*1.2
    }

  }

  if (freeDelivery(cartValue) === false) {
    deliveryFee += calculateCartValue(cartValue)
    deliveryFee += calculateDistance(deliveryDistance)
    calculateItems(numberOfItems)
    rushHour(orderTime)
    maxDeliveryFee()
  }

  return Math.round(deliveryFee*100)/100
}
