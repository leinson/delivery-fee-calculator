import { useState } from "react"
import { Button, Typography, TextField } from "@mui/material"
import DateTimePickerValue from "./DateTimePicker"
import dayjs, { Dayjs } from "dayjs"
//TODO
// regex check valid input only number, error otherwise 
// Own button component
// Change inputs to textfields
//
interface FormData {
  cartValue: string
  deliveryDistance: string
  numberOfItems: string
}

interface Props {
  calculateCost: (formData: FormData, orderTime: Dayjs | null) => number
  setDeliveryPrice: React.Dispatch<React.SetStateAction<number | null>>
}

const Form = ({ calculateCost, setDeliveryPrice }: Props) => {
  const [formData, setFormData] = useState<FormData>({
    cartValue: "",
    deliveryDistance: "",
    numberOfItems: "",
  })
  const [orderTime, setOrderTime] = useState<Dayjs | null>(
    dayjs("2024-01-17T15:30")
  )

  const emptyForm = () => {
    setFormData({
      cartValue: "",
      deliveryDistance: "",
      numberOfItems: "",
    })
    setDeliveryPrice(null)
    setOrderTime(dayjs("2024-01-17T15:30"))
  }

  console.log("formdata", formData)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setFormData({ ...formData, [id]: value })
  }
  const handleChangeDateTime = (newDate: Dayjs | null) => {
    setOrderTime(newDate)
    console.log("ordertime CHANGE", orderTime)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const calculatedCost = calculateCost(formData, orderTime)
    setDeliveryPrice(calculatedCost)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cartValue">
          <Typography>Cart Value</Typography>
          <input
            type="number"
            id="cartValue"
            name="cartValue"
            data-test-id="cartValue"
            value={formData.cartValue}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="deliveryDistance">
          <Typography>Delivery Distance</Typography>
          <input
            type="number"
            id="deliveryDistance"
            name="deliveryDistance"
            data-test-id="deliveryDistance"
            value={formData.deliveryDistance}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="numberOfItems">
          <Typography>Number of Items</Typography>
          <TextField
            id="numberOfItems"
            label="Number of Items"
            variant="outlined"
            name="numberOfItems"
            data-test-id="numberOfItems"
            value={formData.numberOfItems}
            onChange={handleChange}
          />
        </label>
        <br />
        <DateTimePickerValue
          orderTime={orderTime}
          handleChangeDateTime={handleChangeDateTime}
        />
        <br />
        <Button variant="contained" color="primary" type="submit">
          <Typography variant="button">Calculate</Typography>
        </Button>
        <Button variant="contained" color="primary" onClick={emptyForm}>
          <Typography variant="button">Reset</Typography>
        </Button>
      </form>
    </>
  )
}

export default Form