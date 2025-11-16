import { createContext, useState, ReactNode } from "react";

// Définition du context avec des valeurs par défaut
export const DataForm = createContext({
 data: {
  "activity": "",
  "damage": "",
  "date": "",
  "description": "",
  "kindOfIncident": "",
  "place": "",
  "severityIncident": "",
  "severityInjurie": "",
  "unitActivity": "",
  "unity": "",
  "weather": ""
},

  handleValue: (key: string, value: any) => {} // fonction par défaut
});


interface DataFormProviderProps {
  children: ReactNode;
}

export default function DataFormProvider({ children }: DataFormProviderProps) {
  const [formData, setFormData] = useState({});

  // Fonction pour mettre à jour les données du formulaire
  const handleValue = (key: string, value: any) => {
    setFormData(prev => ({
      ...prev,[key]: value
    }));
  };

  return (
    <DataForm.Provider value={{ data: formData, handleValue }}>
      {children}
    </DataForm.Provider>
  );
}
