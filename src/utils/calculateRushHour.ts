import { Dayjs } from "dayjs"

export const calculateRushHour = (orderTime: Dayjs | null):boolean => {
    const rush = [15,16,17,18,19]
   if (orderTime?.day() === 5 && rush.includes(orderTime.hour())) {
      console.log("rushday", orderTime?.day())
      console.log('hour',orderTime.hour())
      return true
    }
    return false
}