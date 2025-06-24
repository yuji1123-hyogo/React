import { createTheme } from "@mui/material";
import { green, orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    }
  },
  spacing: 10,
  // components: {
  //   MuiButton: {
  //     defaultProps: {
  //       variant: 'contained',
  //     },
  //   },
  // },
});

export default theme;