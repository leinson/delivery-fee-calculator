import { useState } from "react"
import Form from "./components/Form"
import DeliveryPrice from "./components/DeliveryPrice"
import theme from "./theme"
import { Dayjs } from "dayjs"
import { ThemeProvider } from "@emotion/react"
import { Typography, Stack, Card, CardContent } from "@mui/material"

//TODO
//Extract Fri day & rush hour from datetime
//Do the Cost calculations => Move to DeliveryPrice

interface FormData {
  cartValue: string
  deliveryDistance: string
  numberOfItems: string
}

const calculateCost = (formData: FormData, orderTime: Dayjs | null) => {
  const cartValue: number = parseFloat(formData.cartValue)
  const deliveryDistance: number = parseInt(formData.deliveryDistance)
  const numberOfItems: number = parseInt(formData.numberOfItems)

  const total = cartValue + deliveryDistance + numberOfItems
  console.log("ordertime CALCULATE", orderTime)
  return total
}

const App = () => {
  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null)

  console.log("delprice", deliveryPrice)

  return (
    <ThemeProvider theme={theme}>
      <Stack alignItems="center" padding={{ xs: 1, md: 4 }}>
        <Card elevation={5} sx={{ padding: 3 }}>
          <CardContent>
            <Typography
              variant="h1"
              align="center"
              color="primary"
              sx={{ paddingBottom: 3 }}
            >
              Delivery Fee Calculator
            </Typography>
            <Form
              calculateCost={(formData, orderTime) =>
                calculateCost(formData, orderTime)
              }
              setDeliveryPrice={setDeliveryPrice}
            />
            <DeliveryPrice deliveryPrice={deliveryPrice} />
          </CardContent>
        </Card>
      </Stack>
    </ThemeProvider>
  )
}

export default App
