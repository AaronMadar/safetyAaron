import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProviderCustom from "@/context/theme-context";
import DataFormProvider from "@/context/dataform-context";
import { DbProvider } from "@/context/db-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageForm from "@/pages/form-page";
import DashBoard from "@/pages/dashboard";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderCustom>
      <BrowserRouter>
        <DbProvider>
          <Routes>
           
            <Route path="/" element={ <DataFormProvider>
                                        <PageForm />
                                      </DataFormProvider> }
            />

            
            <Route path="/dashboard" element={<DashBoard />} />
          </Routes>
        </DbProvider>
      </BrowserRouter>
    </ThemeProviderCustom>
  </StrictMode>
);