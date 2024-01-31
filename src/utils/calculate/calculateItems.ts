export const calculateItems = (numberOfItems: number): number => {
  let itemsFee = 0
  let items = 4
  while (items < numberOfItems) {
    itemsFee += 0.5
    items += 1
  }
  if (numberOfItems > 12) {
    itemsFee += 1.2
  }
  return itemsFee
}
