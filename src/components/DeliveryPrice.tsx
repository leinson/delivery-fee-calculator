import { Typography } from "@mui/material"

interface Props {
  deliveryPrice: number | null
}

export const DeliveryPrice: React.FC<Props> = (props) => {
  return (
    <>
      {typeof props.deliveryPrice === "number" &&
        !isNaN(props.deliveryPrice) && (
          <div>
            <Typography>Delivery price: {props.deliveryPrice} €</Typography>
          </div>
        )}
    </>
  )
}
