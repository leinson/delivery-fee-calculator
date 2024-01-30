import { useState } from "react"
import { Button, Typography, TextField, Stack, Alert } from "@mui/material"
import { DateTimePickerValue } from "./DateTimePicker"
import dayjs, { Dayjs } from "dayjs"
import { calculateDeliveryFee } from "../utils/calculateDeliveryFee"

//TODO
// check valid input only number, error otherwise
// if other values are entered but a number exists, it calculates by the number
// would be wise to have a dynamic input check aswell to avoid wrong values.
// when invalid input is calculated and error pops up, reset delivery price to null
// clean up of checkValidInput, divide to smaller functions

interface DeliveryFeeFormDataProps {
  cartValue: string
  deliveryDistance: string
  numberOfItems: string
}

interface DeliveryFeeFormProps {
  setDeliveryPrice: React.Dispatch<React.SetStateAction<number | null>>
}

export const DeliveryFeeForm: React.FC<DeliveryFeeFormProps> = ({
  setDeliveryPrice,
}) => {
  const [deliveryFeeFormData, setDeliveryFeeFormData] = useState<DeliveryFeeFormDataProps>({
    cartValue: "",
    deliveryDistance: "",
    numberOfItems: "",
  })
  const [orderTime, setOrderTime] = useState<Dayjs | null>(
    dayjs()
  )
  const [isValidInput, setIsValidInput] = useState<boolean>(true)

  const emptyForm = () => {
    setDeliveryFeeFormData({
      cartValue: "",
      deliveryDistance: "",
      numberOfItems: "",
    })
    setDeliveryPrice(null)
    setOrderTime(dayjs())
  }

  const checkValidInput = () => {
    const cartValueDecimal = deliveryFeeFormData.cartValue.replace(/(\d),(?=\d)/g, "$1.")
    console.log("parsed", cartValueDecimal)

    const cartValueFloat = parseFloat(cartValueDecimal)
    console.log("float", cartValueFloat)
    if (
      deliveryFeeFormData.cartValue === "" ||
      deliveryFeeFormData.deliveryDistance === "" ||
      deliveryFeeFormData.numberOfItems === ""
    ) {
      console.log("validinput?")
      return false
    }
    if (isNaN(cartValueFloat)) {
      return false
    }
    if (
      !Number.isInteger(parseInt(deliveryFeeFormData.deliveryDistance)) ||
      !Number.isInteger(parseInt(deliveryFeeFormData.numberOfItems))
    ) {
      console.log(
        "incorrect number",
        Number.isInteger(parseInt(deliveryFeeFormData.deliveryDistance))
      )
      return false
    }
    if (!orderTime?.isValid()) {
      return false
    }
    console.log("correct number", parseInt(deliveryFeeFormData.numberOfItems))
    return true
  }

  console.log("formdata", deliveryFeeFormData)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target
    setIsValidInput(true)
    setDeliveryFeeFormData({ ...deliveryFeeFormData, [id]: value })
  }
  const handleChangeDateTime = (newDate: Dayjs | null) => {
    setOrderTime(newDate)
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (checkValidInput()) {
      setIsValidInput(true)
      const calculatedCost = calculateDeliveryFee(deliveryFeeFormData, orderTime)
      setDeliveryPrice(calculatedCost)
    } else {
      setIsValidInput(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack spacing={1}>
          <TextField
            id="cartValue"
            label="Cart value in euros"
            variant="outlined"
            name="cartValue"
            data-test-id="cartValue"
            value={deliveryFeeFormData.cartValue}
            onChange={handleChange}
          />
          <TextField
            id="deliveryDistance"
            label="Delivery distance in meters"
            variant="outlined"
            name="deliveryDistance"
            data-test-id="deliveryDistance"
            value={deliveryFeeFormData.deliveryDistance}
            onChange={handleChange}
          />
          <TextField
            id="numberOfItems"
            label="Number of Items"
            variant="outlined"
            name="numberOfItems"
            data-test-id="numberOfItems"
            value={deliveryFeeFormData.numberOfItems}
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
          <Button variant="contained" color="secondary" type="submit">
            <Typography variant="button">Calculate</Typography>
          </Button>
          <Button variant="contained" color="secondary" onClick={emptyForm}>
            <Typography variant="button">Reset</Typography>
          </Button>
        </Stack>
      </form>
      {!isValidInput ? (
        <>
          <Alert severity="error">Incorrect input values.</Alert>
        </>
      ) : null}
    </>
  )
}
