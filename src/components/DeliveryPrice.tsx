import { Typography } from "@mui/material"
import { SnackbarCalculated } from "./SnackbarCalculated"
import { showDeliveryPrice } from "../utils/showDeliveryPrice"

interface Props {
  deliveryPrice: number | null
}

export const DeliveryPrice: React.FC<Props> = (props) => {
  return (
    <>
      {showDeliveryPrice(props.deliveryPrice) && (
        <>
          <div data-test-id="fee">
            <Typography>Delivery price: {props.deliveryPrice} €</Typography>
          </div>
          <SnackbarCalculated />
        </>
      )}
    </>
  )
}
