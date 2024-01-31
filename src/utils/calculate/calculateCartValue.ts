export const calculateCartValue = (cartValue: number): number => {
  if (cartValue < 10) {
    return 10 - cartValue
  }
  return 0
}
