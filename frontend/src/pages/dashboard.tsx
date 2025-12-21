import Card from "@/components/dashboard/card";
import Header from "@/components/layout/header";
import { boxCardCss } from "@/style/style";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import type { SafetyIncidentWithId } from "@/types/safety-incident-type";
import type { snackType } from "@/types/snack-type";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { fetchDelete } from "@/functions/fetchDelete";
import type { CardProps } from "@/types/cardprops-type";

export default function DashBoard() {
  const [data, setData] = useState<SafetyIncidentWithId[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [snack, setSnack] = useState<snackType>({
    open: false,
    severity: "success",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dbEvent = await fetch("http://localhost:3000/safety-event");
        const jsonData = await dbEvent.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
      }
    };
    fetchData();
  }, []);

  const onSearch = (term: string) => setSearchTerm(term);

  const searchContent = () => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return data;

    return data.filter((item) => {
      const placeText = Array.isArray(item.place) ? item.place.join(" ") : (item.place || "");
      const searchIn = [
        item.activity, item.damage, item.description, item.kindOfIncident,
        placeText, item.severityIncident, item.severityInjurie,
        item.unitActivity, item.unity, item.weather,
      ].join(" ").toLowerCase();
      return searchIn.includes(term);
    });
  };

  const handleCloseSnack = () => setSnack((prev) => ({ ...prev, open: false }));

  const handleDelete = async (id: number) => {
    const result = await fetchDelete(id);
    setSnack({ open: true, severity: result.bool ? "success" : "error", message: result.message });
    if (result.bool) {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // CORRECTION ICI : On force TypeScript à accepter l'objet mis à jour
  const handleUpdateEvent = (id: string, updatedData: Partial<CardProps>) => {
    const numId = Number(id);
    setData((prevData) =>
      prevData.map((event) =>
        event.id === numId 
          ? ({ ...event, ...updatedData } as SafetyIncidentWithId) 
          : event
      )
    );
  };

  return (
    <Box sx={{ scrollbarGutter: "stable both-edges" }}>
      <Header title={"רשימת האירועים"} showSearch={true} onSearch={onSearch} />

      <Box sx={boxCardCss}>
        {searchContent().map((x) => (
          <Card
            key={x.id}
            {...x} 
            /* IMPORTANT : On passe 'x.date' (ISO) et 'x.place' (Array) sans les transformer.
               La Card recevra donc les types originaux et s'occupera du visuel.
            */
            onDelete={handleDelete}
            onUpdate={(updatedData) => handleUpdateEvent(String(x.id), updatedData)}
          />
        ))}
      </Box>

      <Snackbar open={snack.open} autoHideDuration={4000} onClose={handleCloseSnack} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleCloseSnack} severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
    </Box>
  );
}