import { createTheme, responsiveFontSizes } from "@mui/material"

// #00c2e8
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: { main: "#00c2e8", contrastText: "#FFFFFF" },
      secondary: { main: "#00c2e8" },
      background: { default: "#00c2e8" },
    },

    typography: {
      h1: {
        fontWeight: "bold",
        fontSize: "3rem",
      },
      button: {
        fontWeight: 700,
        letterSpacing: 1,
      },
    },
  })
)

export default theme
