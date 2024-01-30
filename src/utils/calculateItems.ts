export const calculateItems = (numberOfItems: number):number => {
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
    return itemsFee
  }