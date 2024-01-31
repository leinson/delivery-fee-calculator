export const calculateDistance = (deliveryDistance: number): number => {
  let distanceFee = 2
  let distance = 1000
  while (distance < deliveryDistance) {
    distanceFee += 1
    distance += 500
  }
  return distanceFee
}
