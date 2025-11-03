// ThemeContext.jsx
import { createContext, useState } from "react";
import lightTheme from "../Theme/LightTheme";
import darkTheme from "../Theme/DarkTheme";

// Provide a safe default so consumers (TSX files) get a known shape
export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
  
});

export const ThemeProviderCustom = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(prev => (prev === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
