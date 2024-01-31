import { useState } from "react"
import { Button, Typography, TextField, Stack, Alert } from "@mui/material"
import { DateTimePickerValue } from "./DateTimePicker"
import dayjs, { Dayjs } from "dayjs"
import { calculateDeliveryFee } from "../utils/calculate/calculateDeliveryFee"
import { DeliveryFeeFormDataProps } from "../types"
import { checkDeliveryFeeFormInput } from "../utils/checkDeliveryFeeForm/checkDeliveryFeeFormInput"

interface DeliveryFeeFormProps {
  setDeliveryPrice: React.Dispatch<React.SetStateAction<number | null>>
}

export const DeliveryFeeForm: React.FC<DeliveryFeeFormProps> = ({
  setDeliveryPrice,
}) => {
  const [deliveryFeeFormData, setDeliveryFeeFormData] =
    useState<DeliveryFeeFormDataProps>({
      cartValue: "",
      deliveryDistance: "",
      numberOfItems: "",
    })
  const [orderTime, setOrderTime] = useState<Dayjs | null>(dayjs())
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
    setDeliveryPrice(null)
    if (checkDeliveryFeeFormInput(deliveryFeeFormData, orderTime)) {
      setIsValidInput(true)
      const calculatedCost = calculateDeliveryFee(
        deliveryFeeFormData,
        orderTime
      )
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
          <div data-test-id="orderTime">
            <DateTimePickerValue
              orderTime={orderTime}
              handleChangeDateTime={handleChangeDateTime}
            />
          </div>
        </Stack>
        <Stack
          paddingY={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            data-test-id="calculate"
            variant="contained"
            color="secondary"
            type="submit"
          >
            <Typography variant="button">Calculate</Typography>
          </Button>
          <Button
            data-test-id="reset"
            variant="contained"
            color="secondary"
            onClick={emptyForm}
          >
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
