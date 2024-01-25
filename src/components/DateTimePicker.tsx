import { Dayjs } from "dayjs"
import { DemoContainer } from "@mui/x-date-pickers/internals/demo"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"

interface Props {
  orderTime: Dayjs | null
  handleChangeDateTime: (newDate: Dayjs | null) => void
}

const DateTimePickerValue = ({ orderTime, handleChangeDateTime }: Props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateTimePicker"]}>
        <DateTimePicker
          label="Order time"
          name="orderTime"
          data-test-id="orderTime"
          value={orderTime}
          onChange={handleChangeDateTime}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
}

export default DateTimePickerValue
