// ThemeContext.jsx
import { createContext, useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import lightTheme from "@/theme/light-theme"
import darkTheme from "@/theme/dark-theme";


// Provide a safe default so consumers (TSX files) get a known shape
export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => { },

});


export default function ThemeProviderCustom({ children }: any) {

  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(prev => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}

      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
