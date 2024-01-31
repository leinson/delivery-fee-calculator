import { Dayjs } from "dayjs"
import { DeliveryFeeFormDataProps } from "../../types"
import { cartValueFormat } from "./cartValueFormat"

export const checkDeliveryFeeFormInput = (
  deliveryFeeFormData: DeliveryFeeFormDataProps,
  orderTime: Dayjs | null
): boolean => {
  const cartValueFloat = cartValueFormat(deliveryFeeFormData.cartValue)
  if (
    isNaN(cartValueFloat) ||
    !deliveryFeeFormData.cartValue ||
    !deliveryFeeFormData.deliveryDistance ||
    !deliveryFeeFormData.numberOfItems ||
    !Number.isInteger(parseInt(deliveryFeeFormData.deliveryDistance)) ||
    !Number.isInteger(parseInt(deliveryFeeFormData.numberOfItems)) ||
    !orderTime?.isValid()
  ) {
    return false
  }
  return true
}
