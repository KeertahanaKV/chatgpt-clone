import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#343541",   
      paper: "#202123",   
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;