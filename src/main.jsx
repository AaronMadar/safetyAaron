// main.jsx
import { StrictMode, useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { ThemeProvider } from "@mui/material/styles"; // corrige l'import pour MUI
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProviderCustom } from "./Context/ThemeContext.jsx";
import { CssBaseline } from "@mui/material";

function Root() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderCustom>
      {/* <CssBaseline /> */}
      <Root />
    </ThemeProviderCustom>
  </StrictMode>
)