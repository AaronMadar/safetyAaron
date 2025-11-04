// import { ThemeProvider } from "@mui/material/styles"; // corrige l'import pour MUI
// import { ThemeContext } from "./Context/ThemeContext";
import Header from "./components/Layout/Header";
import UnityField from "./components/fields/Unity";
import DateField from "./components/fields/Date";
import Description from "./components/fields/Description";
import Unitactivity from "./components/fields/Unitactivity";
import Activity from "./components/fields/Activity";
import KindOfIncident from "./components/fields/KindOfIncident";
import Place from "./components/fields/Place";
import SeverityIncident from "./components/fields/SeverityIncident";
import Damage from "./components/fields/Damage";
import Weather from "./components/fields/Weather";
import SendIcon from '@mui/icons-material/Send';
// import { useContext } from "react";
import { Box, Button } from "@mui/material";


export default function App({theme,toggleTheme}:any) {

  // const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    // <ThemeProvider theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", dl: 'row' }, gap: 2, minHeight: '100vh', paddingTop: 4, backgroundColor: 'background.default', }}>

          <Box sx={{ flex: 1, margin: 2, display: "flex", flexDirection: "column", gap: 2, justifyContent: 'top', }}>
            <UnityField />
            <DateField />
            <Description />
            <Unitactivity />
            <Activity />
          </Box>

          <Box sx={{ flex: 1, margin: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <KindOfIncident />
            <Place />
            <SeverityIncident />
            <Damage />
            <Weather />
            <Button variant="contained"  endIcon={<SendIcon />} sx={{ width: 'fit-content', alignSelf: { xs: 'center', sm: 'flex-end' }, marginTop: 2 }}>
              Send
            </Button>
          </Box>

        </Box>
      </Header>
    // </ThemeProvider>
  );
}
