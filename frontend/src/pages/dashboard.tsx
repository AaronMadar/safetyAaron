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
import dayjs from "dayjs";
import "dayjs/locale/he";

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

    const onSearch = (term: string) => {
    setSearchTerm(term);
  };

  const searchContent = () => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return data;

    return data.filter((item) => {
      const placeText = Array.isArray(item.place)
        ? item.place.join(" ").toLowerCase()
        : (item.place || "")

      const searchIn = [
        item.activity,
        item.damage,
        item.description,
        item.kindOfIncident,
        placeText,
        item.severityIncident,
        item.severityInjurie,
        item.unitActivity,
        item.unity,
        item.weather,
      ]
        .join(" ")
        .toLowerCase();

      return searchIn.includes(term);
    });
  };

  const handleCloseSnack = () => {
    setSnack((prev) => ({ ...prev, open: false }));
  };

  const handleDelete = async (id: number) => {
    const result = await fetchDelete(id);

    setSnack({    
      open: true,
      severity: result.bool ? "success" : "error",
      message: result.message,
    });

    if (result.bool) {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  };

  return (
    <Box sx={{ scrollbarGutter: "stable both-edges" }}>
      <Header title={"רשימת האירועים"} showSearch={true} onSearch={onSearch} />

      <Box sx={boxCardCss}>
        {searchContent().map((x) => (
          <Card
            key={x.id}
            id={x.id}
            activity={x.activity}
            damage={x.damage}
            date={dayjs(x.date).locale("he").format("dddd DD/MM/YYYY")}            
            description={x.description}
            kindOfIncident={x.kindOfIncident}
            place={Array.isArray(x.place) ? x.place.join(", ") : x.place}
            severityIncident={x.severityIncident}
            severityInjurie={x.severityInjurie}
            unitActivity={x.unitActivity}
            unity={x.unity}
            weather={x.weather}
            onDelete={handleDelete}
          />
        ))}
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={handleCloseSnack}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnack} severity={snack.severity}>
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}
