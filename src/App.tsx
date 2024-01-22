import { useState } from 'react'
import './App.css'


const calculateCost = (cartVal: string, deliveryDist: string, numOfItems: string, Time: string) => {
  const cartValue: number = parseFloat(cartVal)
  const deliveryDistance: number = parseInt(deliveryDist)
  const numberOfItems: number = parseInt(numOfItems)
  const orderTime: string = Time
  const total = cartValue+deliveryDistance+numberOfItems
  return (
    total
  )
}

const App = () => {
  const [cartValue, setCartValue] = useState('')
  const [deliveryDistance, setDeliveryDistance] = useState('')
  const [numberOfItems, setNumberOfItems] = useState('')
  const [orderTime, setOrderTime] = useState('')
  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null)
 

  console.log('cartValue', cartValue)
  console.log('deliveryDistance', deliveryDistance)
  console.log('numberOfItems', numberOfItems)
  console.log('orderTime', orderTime)
  console.log('deliveryPrice', deliveryPrice)

  const calculateInputs = (e: React.FormEvent) => {
    e.preventDefault()
    const calculatedCost = calculateCost(cartValue, deliveryDistance, numberOfItems, orderTime)
    setDeliveryPrice(calculatedCost)
  }
  
  const emptyForm = () => {
    setCartValue('')
    setDeliveryDistance('')
    setNumberOfItems('')
    setOrderTime('')
    setDeliveryPrice(null)
  }

  return (
    <>
      <h1>Delivery Fee Calculator</h1>
      <div>
        <form onSubmit={calculateInputs}>
          Cart Value
          <input 
            type='number'
            id='cartValue'
            data-test-id='cartValue'
            value={cartValue}
            onChange={(event) => setCartValue(event.target.value)} 
          />
          <br/>
          Delivery Distance
          <input
            type='number'
            id='deliveryDistance'
            data-test-id='deliveryDistance'
            value={deliveryDistance}
            onChange={(event) => setDeliveryDistance(event.target.value)}
          />
         
          <div>
          Number of Items
          <input
            type='number'
            id='numberOfItems'
            data-test-id='numberOfItems'
            value={numberOfItems}
            onChange={(event) => setNumberOfItems(event.target.value)}
          />
          </div>
          <div>
          Order Time
          <input
            id='orderTime'
            data-test-id='orderTime'
            value={orderTime}
            onChange={(event) => setOrderTime(event.target.value)}
          />
          </div>
          <button type='submit'>Calculate</button>
        </form>
      </div>
      <div>
        {deliveryPrice !== null && (
            <div>
                Delivery price: {deliveryPrice}
                <button onClick={emptyForm} >Reset</button>
            </div>
          )}
      </div>
    </>
  )
}

export default App
