import { createContext, useState } from "react";
import type { ReactNode } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import type { Theme } from "@mui/material";
import lightTheme from "@/theme/light-theme"
import darkTheme from "@/theme/dark-theme";

/**
 * COMMENT TYPER LE CONTEXTE DE THÈME :
 * 
 * 1. Les thèmes MUI sont de type Theme (importé de @mui/material)
 * 2. toggleTheme ne prend rien et retourne void
 * 3. On crée une interface pour la valeur du contexte
 */
interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

// Provide a safe default so consumers (TSX files) get a known shape
export const ThemeContext = createContext<ThemeContextValue>({
  theme: lightTheme,
  toggleTheme: () => {},
});

/**
 * COMMENT TYPER LES PROPS D'UN PROVIDER :
 * 
 * children: ReactNode = le contenu à wrapper
 * ReactNode peut être un élément, un string, un number, etc.
 */
interface ThemeProviderCustomProps {
  children: ReactNode;
}

export default function ThemeProviderCustom({ children }: ThemeProviderCustomProps) {
  /**
   * COMMENT TYPER useState avec un type union :
   * useState<Theme>(lightTheme) = le thème peut être lightTheme ou darkTheme
   * TypeScript infère que c'est de type Theme
   */
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = (): void => {
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
