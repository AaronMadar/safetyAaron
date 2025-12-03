// DarkTheme.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: "#ffffffff",
      contrastText: "#ffffffff !important",
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
  },
  components: {
    MuiButton:{
      color: '#121212',
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: '#ffffff !important', // Force blanc pour non sélectionné
          '&.Mui-checked': {
            color: '#ffffff !important', // Force blanc pour sélectionné
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#ffffff !important', // Force blanc pour non sélectionnée
          '&.Mui-checked': {
            color: '#ffffff !important', // Force blanc pour sélectionnée
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          color: '#ffffff !important', // Labels en blanc
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          color: '#ffffff !important', // Force le texte du body en blanc
          backgroundColor: '#121212 !important', // Force le fond en sombre
        },
      },
    },
  },
});

export default darkTheme;