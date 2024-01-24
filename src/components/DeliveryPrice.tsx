import { Typography } from "@mui/material"

interface Props {
  deliveryPrice: number | null
}

const DeliveryPrice = (props: Props) => {
  return (
    <>
      {typeof props.deliveryPrice === "number" &&
        !isNaN(props.deliveryPrice) && (
          <div>
            <Typography>Delivery price: {props.deliveryPrice}€</Typography>
          </div>
        )}
    </>
  )
}

export default DeliveryPrice
