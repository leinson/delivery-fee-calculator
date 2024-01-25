import { Dayjs } from "dayjs"
//TODO
//Extract Fri day & rush hour from datetime
//Do the Cost calculations => Move to DeliveryPrice
//If used comma ',' to separate decimal, convert to dot
//round decimals to 2 decimals

interface FormData {
  cartValue: string
  deliveryDistance: string
  numberOfItems: string
}

export const calculateCost = (formData: FormData, orderTime: Dayjs | null) => {
  const cartValue: number = parseFloat(formData.cartValue)
  const deliveryDistance: number = parseInt(formData.deliveryDistance)
  const numberOfItems: number = parseInt(formData.numberOfItems)
  console.log("ordertime CALCULATE", orderTime)
  let deliveryFee = 0
  const smallCartValue = (cartValue: number) => {
    if (cartValue < 10) {
      const surcharge = 10 - cartValue
      console.log("surcharge", surcharge)
      deliveryFee += surcharge
    }
  }
  const calculateDistance = (deliveryDistance: number) => {
    let distanceFee = 2
    let distance = 1000
    while (distance < deliveryDistance) {
      distanceFee += 1
      console.log("distancefee", distanceFee)
      distance += 500
      console.log("distance", distance)
    }
    deliveryFee += distanceFee
  }

  const calculateItems = (numberOfItems: number) => {}
  const maxDeliveryFee = (deliveryFee: number) => {}
  const freeDelivery = (deliveryFee: number) => {}
  const rushHour = (deliveryFee: number, orderTime: Dayjs | null) => {}

  smallCartValue(cartValue)
  calculateDistance(deliveryDistance)

  return deliveryFee
}
