import "@testing-library/jest-dom"
import { calculateRushHour } from "./calculateRushHour"
import dayjs from "dayjs"

test("Will not multiply whole fee by 1.2 if it is not during rush hour 3-7PM", () => {
    const orderTime = dayjs("2024-01-17T15:30")
    expect(calculateRushHour(orderTime)).toBe(false)
})

test("Will multiply whole fee by 1.2 if it is during rush hour 3-7PM", () => {
    const orderTime = dayjs("2024-01-26T16:00")
    expect(calculateRushHour(orderTime)).toBe(true)
})