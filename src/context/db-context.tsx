import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { useMyDbType } from "@/types/use-my-db-type";

const DbContext = createContext<any>({
  dbLocal: [],
  add: () => {},
  deleteOne: () => {},
  deleteAll: () => {},
});

export function DbProvider({ children }: { children: ReactNode }) {
  const [dbLocal, setDbLocal] = useState<any>(() => {
    const saved = localStorage.getItem("mySafetyDb");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("mySafetyDb", JSON.stringify(dbLocal));
  }, [dbLocal]);

  const add = (newEvent: any) => {
    setDbLocal((prev: any[]) => [
      ...prev,
      { ...newEvent, id: Date.now(), date: new Date().toLocaleString() },
    ]);
  };

  const deleteOne = (id: any) => {
    setDbLocal((prev: any[]) => prev.filter((x) => x.id !== id));
  };

  const deleteAll = () => setDbLocal([]);

  const value: useMyDbType = { dbLocal, add, deleteOne, deleteAll };

  return <DbContext.Provider value={value}>{children}</DbContext.Provider>;
}

export default DbContext;
