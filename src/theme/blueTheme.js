import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: blue[900],
    },
    secondary: {
      main: blue[50],
    },

    error: {
      main: red.A400,
    },
  },
});
