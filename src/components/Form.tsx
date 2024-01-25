import { useState } from "react"
import { Button, Typography, TextField, Stack } from "@mui/material"
import DateTimePickerValue from "./DateTimePicker"
import dayjs, { Dayjs } from "dayjs"
import { calculateCost } from "../utils/calculateCost"
//TODO
// regex check valid input only number, error otherwise
// Own button component
//
interface FormData {
  cartValue: string
  deliveryDistance: string
  numberOfItems: string
}

interface Props {
  setDeliveryPrice: React.Dispatch<React.SetStateAction<number | null>>
}

const Form = ({ setDeliveryPrice }: Props) => {
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
        <Stack spacing={1}>
          <TextField
            id="cartValue"
            label="Cart value"
            variant="outlined"
            name="cartValue"
            data-test-id="cartValue"
            value={formData.cartValue}
            onChange={handleChange}
          />
          <TextField
            id="deliveryDistance"
            label="Delivery distance"
            variant="outlined"
            name="deliveryDistance"
            data-test-id="deliveryDistance"
            value={formData.deliveryDistance}
            onChange={handleChange}
          />
          <TextField
            id="numberOfItems"
            label="Number of Items"
            variant="outlined"
            name="numberOfItems"
            data-test-id="numberOfItems"
            value={formData.numberOfItems}
            onChange={handleChange}
          />
          <DateTimePickerValue
            orderTime={orderTime}
            handleChangeDateTime={handleChangeDateTime}
          />
        </Stack>
        <Stack
          paddingY={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button variant="contained" color="primary" type="submit">
            <Typography variant="button">Calculate</Typography>
          </Button>
          <Button variant="contained" color="primary" onClick={emptyForm}>
            <Typography variant="button">Reset</Typography>
          </Button>
        </Stack>
      </form>
    </>
  )
}

export default Form
