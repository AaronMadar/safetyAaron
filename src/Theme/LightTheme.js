import { createTheme } from "@mui/material";

 
const lightTheme = createTheme({
    palette: {
    mode: 'light',
    primary: {
    main: '#1e5611ff',
    },
    background: {
    default: '#f5f5f5',
    paper: '#ffffff',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87) '  // Texte noir pour lisibilité
    },
    MuiCssBaseline: {
      styleOverrides: { body: { backgroundColor: "#f5f5f5", color: "rgba(0,0,0,0.87)" } }
    }
    },
});

export default lightTheme

