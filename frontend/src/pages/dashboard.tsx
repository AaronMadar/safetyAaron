import Card from "@/components/dashboard/card";
import Header from "@/components/layout/header";
import { incidentsSection } from "@/style/pages/dashboard";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState, useCallback, useMemo } from "react";
import type { SafetyIncidentWithId } from "@/types/safety-incident-type";
import type { snackType } from "@/types/snack-type";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { fetchDelete } from "@/functions/fetchDelete";

// Constants
const API_ENDPOINTS = 'http://localhost:3000/safety-event' as const;


const MESSAGES = {
  LOADING_ERROR: "שגיאה בטעינת הנתונים",
  DELETE_SUCCESS: "האירוע נמחק בהצלחה",
  DELETE_ERROR: "שגיאה במחיקת האירוע",
} as const;

export default function DashBoard() {
  // State management
  const [data, setData] = useState<SafetyIncidentWithId[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [snack, setSnack] = useState<snackType>({
    open: false,
    severity: "success",
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(API_ENDPOINTS);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(MESSAGES.LOADING_ERROR);
        setData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const onSearch = useCallback((term: string) => setSearchTerm(term), []);

  // Memoized filtered data to avoid unnecessary recalculations
  const filteredData = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return data;

    return data.filter((item) => {
      const placeText = Array.isArray(item.place) ? item.place.join(" ") : (item.place || "");
      // CREATE A LONG STRING WITH ALL THE DATA OF EACH OBJECT AND CHECK IF THE SEARCH TERM IS IN THE STRING
      const searchIn = [
        item.activity, item.damage, item.description, item.kindOfIncident,
        placeText, item.severityIncident, item.severityInjurie,
        item.unitActivity, item.unity, item.weather,item.date.toString()
      ].join(" ").toLowerCase();
      return searchIn.includes(term);
    });
  }, [data, searchTerm]);

  const handleCloseSnack = useCallback(() => {
    setSnack((prev) => ({ ...prev, open: false }));
  }, []);

  const handleDelete = useCallback(async (id: number) => {
    const result = await fetchDelete(id);
    setSnack({
      open: true,
      severity: result.bool ? "success" : "error",
      message: result.message
    });
    if (result.bool) {
      setData((prev) => prev.filter((item) => item.id !== id));
    }
  }, []);

  // Update event handler with proper typing
  const handleUpdateEvent = useCallback((id: string, updatedData: Partial<SafetyIncidentWithId>) => {
    const numId = Number(id);
    setData((prevData) =>
      prevData.map((event) =>
        event.id === numId
          ? { ...event, ...updatedData }
          : event
      )
    );
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        flexDirection: 'column',
        gap: 2
      }}>
        <CircularProgress />
        <Typography>טוען נתונים...</Typography>
      </Box>
    );
  }

  // Error state
  if (error) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        flexDirection: 'column',
        gap: 2
      }}>
        <Alert severity="error" sx={{ maxWidth: 400 }}>
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{ scrollbarGutter: "stable both-edges" }}
      component="main"      
    >
      <Header title={"רשימת האירועים"} showSearch={true} onSearch={onSearch} />

      <Box
        sx={incidentsSection}
        component="section"       
      >
        {filteredData.length === 0 ? (
          <Box sx={{
            textAlign: 'center',
            py: 4,
            color: 'text.secondary'
          }}>
            <Typography variant="h6">
              {searchTerm ? "לא נמצאו תוצאות לחיפוש" : "אין אירועים"}
            </Typography>
          </Box>
        ) : (
          filteredData.map((x) => (
            <Card
              key={x.id}
              {...x}
              onDelete={handleDelete}
              onUpdate={(updatedData) => handleUpdateEvent(String(x.id), updatedData)}
            />
          ))
        )}
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