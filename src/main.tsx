import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app.tsx";
import ThemeProviderCustom from "@/context/theme-context.tsx";
import DataFormProvider from "./context/dataform-context.tsx";
import { DbProvider } from "@/context/db-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./pages/dashboard.tsx";

function Root() {
  return (
    <DbProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </DbProvider>

  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderCustom>
      <DataFormProvider>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </DataFormProvider>
    </ThemeProviderCustom>
  </StrictMode>
);
