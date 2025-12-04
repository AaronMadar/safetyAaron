import { createContext, useState } from "react";
import type { SafetyIncident } from "@/types/safety-incident-type";
import type { ReactNode } from "react";
/**
 * COMMENT TYPER UN CONTEXTE :
 * 
 * 1. On crée un type pour la valeur du contexte (ce qu'il expose)
 * 2. On utilise ce type dans createContext avec "as" pour le typage
 * 3. Pour handleValue, on utilise des génériques pour typer correctement
 *    la relation entre la clé et sa valeur
 */

// Type pour la fonction handleValue
// K extends keyof SafetyIncident = on dit que K doit être une clé de SafetyIncident
// SafetyIncident[K] = le type de la valeur correspondant à cette clé
type HandleValueFunction = <K extends keyof SafetyIncident>(
  key: K,
  value: SafetyIncident[K]
) => void;

// Type pour la valeur du contexte
interface DataFormContextValue {
  data: SafetyIncident;
  handleValue: HandleValueFunction;
  resetForm: () => void;
}

// Définition du context avec des valeurs par défaut typées
export const DataForm = createContext<DataFormContextValue>({
  data: {
    activity: "",
    damage: "",
    date: "",
    description: "",
    kindOfIncident: "",
    place: [],
    severityIncident: "",
    severityInjurie: "",   // ← corrigé
    unitActivity: "",
    unity: "",
    weather: ""
  },
  handleValue: () => {},
  resetForm: () => {}       // ← ajouté
});



const initialFormData: SafetyIncident = {
  activity: "",
  damage: "",
  date: "",
  description: "",
  kindOfIncident: "",
  place: [],
  severityIncident: "",
  severityInjurie: "",
  unitActivity: "",
  unity: "",
  weather: "",
} as const;

export default function DataFormProvider({ children }: { children: ReactNode }) {
  /**
   * COMMENT TYPER useState :
   * useState<SafetyIncident>({...}) = on dit que l'état est de type SafetyIncident
   * TypeScript infère automatiquement le type de setFormData
   */
  const [formData, setFormData] = useState<SafetyIncident>(initialFormData);

  /**
   * COMMENT TYPER handleValue :
   * 
   * <K extends keyof SafetyIncident> = générique qui dit "K est une clé de SafetyIncident"
   * (key: K, value: SafetyIncident[K]) = la valeur doit correspondre au type de la clé
   * 
   * Exemple : si key = "place", alors value doit être string[]
   *          si key = "unity", alors value doit être string
   */
  const handleValue: HandleValueFunction = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };


  const resetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <DataForm.Provider value={{ data: formData, handleValue , resetForm }}>
      {children}
    </DataForm.Provider>
  );
}