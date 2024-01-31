export const showDeliveryPrice = (deliveryPrice: number | null): boolean => {
  return typeof deliveryPrice === "number" && !isNaN(deliveryPrice)
}
