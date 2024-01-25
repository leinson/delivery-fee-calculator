import { Dayjs } from "dayjs"
//TODO
//Extract Fri day & rush hour from datetime
//Do the Cost calculations => Move to DeliveryPrice

interface FormData {
  cartValue: string
  deliveryDistance: string
  numberOfItems: string
}

export const calculateCost = (formData: FormData, orderTime: Dayjs | null) => {
  const cartValue: number = parseFloat(formData.cartValue)
  const deliveryDistance: number = parseInt(formData.deliveryDistance)
  const numberOfItems: number = parseInt(formData.numberOfItems)

  const total = cartValue + deliveryDistance + numberOfItems
  console.log("ordertime CALCULATE", orderTime)
  return total
}
