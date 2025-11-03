import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {ThemeProviderCustom} from "./Context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderCustom>
      <App />
    </ThemeProviderCustom>
  </StrictMode>
);
