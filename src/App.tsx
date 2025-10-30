import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles"; // corrige l'import pour MUI
import { lightTheme, darkTheme } from "./Theme/DarkLightTheme.js";
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

export default function App() {
  const [theme, setTheme] = useState(lightTheme); // stocke le thème MUI, pas une string

  const toggleTheme = () => {
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));
  };

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
