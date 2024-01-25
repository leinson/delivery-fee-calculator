import { useState } from "react"
import Form from "./components/Form"
import DeliveryPrice from "./components/DeliveryPrice"
import theme from "./theme"
import { ThemeProvider } from "@emotion/react"
import {
  Typography,
  Stack,
  Card,
  CardContent,
  CssBaseline,
} from "@mui/material"

const App = () => {
  const [deliveryPrice, setDeliveryPrice] = useState<number | null>(null)
  console.log("delprice", deliveryPrice)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack alignItems="center" padding={{ xs: 1, md: 4 }}>
        <Card elevation={5} sx={{ padding: 3, borderRadius: 4 }}>
          <CardContent>
            <Typography
              variant="h1"
              align="center"
              color="primary"
              sx={{ paddingBottom: 3 }}
            >
              Delivery Fee Calculator
            </Typography>
            <Form setDeliveryPrice={setDeliveryPrice} />
            <DeliveryPrice deliveryPrice={deliveryPrice} />
          </CardContent>
        </Card>
      </Stack>
    </ThemeProvider>
  )
}

export default App
