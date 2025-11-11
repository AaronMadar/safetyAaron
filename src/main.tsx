// main.jsx
import { StrictMode, useContext } from "react";
import { ThemeContext } from "./context/theme-context.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import ThemeProviderCustom  from "@/context/theme-context.tsx";


function Root() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <ThemeProviderCustom theme={theme}>      
      <App theme={theme} toggleTheme={toggleTheme} />
    </ThemeProviderCustom>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>      
      <Root />    
  </StrictMode>
)