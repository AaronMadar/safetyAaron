import { ThemeProvider} from "@mui/material/styles"; // corrige l'import pour MUI
import { ThemeContext } from "./Context/ThemeContext";
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
import { useContext } from "react";


export default function App() {
 
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <Header theme={theme} toggleTheme={toggleTheme}>
        <UnityField />
        <DateField />
        <Description />
        <Unitactivity />
        <Activity />  
        <KindOfIncident />
        <Place />
        <SeverityIncident />
        <Damage />
        <Weather />
      </Header>
    </ThemeProvider>
  );
}
