import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { useMyDbType } from "@/types/use-my-db-type";
import type { SafetyIncident, SafetyIncidentWithId } from "@/types/safety-incident-type";

/**
 * COMMENT TYPER createContext :
 * createContext<useMyDbType>({...}) = on dit que le contexte expose useMyDbType
 */
const DbContext = createContext<useMyDbType>({
  dbLocal: [],
  add: () => {},
  deleteOne: () => {},
  deleteAll: () => {},
});

export function DbProvider({ children }: { children: ReactNode }) {
  /**
   * COMMENT TYPER useState avec une fonction initiale :
   * useState<SafetyIncidentWithId[]>(() => {...})
   * 
   * Le problème : JSON.parse retourne "any", donc on doit typer le résultat
   * Solution : on utilise "as" pour dire à TypeScript le type attendu
   */
  const [dbLocal, setDbLocal] = useState<SafetyIncidentWithId[]>(() => {
    const saved = localStorage.getItem("mySafetyDb");
    if (saved) {
      // JSON.parse retourne any, on doit typer le résultat
      return JSON.parse(saved) as SafetyIncidentWithId[];
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("mySafetyDb", JSON.stringify(dbLocal));
  }, [dbLocal]);

  /**
   * COMMENT TYPER add :
   * - Prend SafetyIncident (sans id)
   * - Retourne void
   * - setDbLocal reçoit un array de SafetyIncidentWithId
   * - On ajoute l'id et on écrase la date
   */
  const add = (newEvent: SafetyIncident): void => {
    setDbLocal((prev) => [
      ...prev,
      { 
        ...newEvent, 
        id: Date.now(), 
        date: new Date().toLocaleString() 
      } as SafetyIncidentWithId,
    ]);
  };

  /**
   * COMMENT TYPER deleteOne :
   * - Prend number (l'id)
   * - Retourne void
   * - TypeScript infère automatiquement le type de prev (SafetyIncidentWithId[])
   */
  const deleteOne = (id: number): void => {
    setDbLocal((prev) => prev.filter((x) => x.id !== id));
  };

  /**
   * COMMENT TYPER deleteAll :
   * - Ne prend rien
   * - Retourne void
   * - setDbLocal([]) = array vide de type SafetyIncidentWithId[]
   */
  const deleteAll = (): void => setDbLocal([]);

  const value: useMyDbType = { dbLocal, add, deleteOne, deleteAll };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}

export default DbContext;
