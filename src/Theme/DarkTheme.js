// DarkTheme.js
import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Activer explicitement le mode sombre
    primary: {
      main: "#1f1925ff", // Violet clair
      contrastText: "#ffffffff", // Texte blanc
    },
    background: {
      default: '#121212', // Fond sombre pour l'ensemble de l'application
      paper: '#1e1e1e', // Fond pour les composants comme Box ou Paper
    },
  },
});

export default darkTheme;