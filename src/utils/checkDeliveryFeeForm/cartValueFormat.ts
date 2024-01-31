import { DeliveryFeeFormDataProps } from "../../types"

export const cartValueFormat = (
  cartValue: DeliveryFeeFormDataProps["cartValue"]
) => {
  const cartValueDecimal = cartValue.replace(/(\d),(?=\d)/g, "$1.")
  return parseFloat(cartValueDecimal)
}
