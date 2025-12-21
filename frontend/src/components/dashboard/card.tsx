import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import type { CardProps } from "@/types/cardprops-type";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useState } from "react";
import UpdateIcon from '@mui/icons-material/Update';
import CancelIcon from '@mui/icons-material/Cancel';
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import type { snackType } from "@/types/snack-type";
import dayjs from "dayjs";
import "dayjs/locale/he";

export default function Card({
  activity, id, damage, date, description, kindOfIncident, place,
  severityIncident, severityInjurie, unitActivity, unity, weather, onDelete,
  onUpdate
}: CardProps) {

  const [isEditing, setIsEditing] = useState(false);
  const [snack, setSnack] = useState<snackType>({
    open: false, message: "", severity: "success",
  });
  const handleCloseSnack = () => setSnack((prev) => ({ ...prev, open: false }));

  // --- CORRECTION : INITIALISATION DES ÉTATS ---
  // On initialise avec les données brutes. 
  // Pour 'place', on s'assure que c'est une chaîne pour le TextField.
  const [editedUnity, setEditedUnity] = useState(unity);
  const [editedDate, setEditedDate] = useState(date);
  const [editedPlace, setEditedPlace] = useState(Array.isArray(place) ? place.join(", ") : place);
  const [editedDamage, setEditedDamage] = useState(damage);
  const [editedSeverityIncident, setEditedSeverityIncident] = useState(severityIncident);
  const [editedSeverityInjurie, setEditedSeverityInjurie] = useState(severityInjurie);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedUnitActivity, setEditedUnitActivity] = useState(unitActivity);
  const [editedKindOfIncident, setEditedKindOfIncident] = useState(kindOfIncident);
  const [editedActivity, setEditedActivity] = useState(activity);
  const [editedWeather, setEditedWeather] = useState(weather);

  const resetEdits = () => {
    setEditedUnity(unity); setEditedDate(date); 
    setEditedPlace(Array.isArray(place) ? place.join(", ") : place);
    setEditedDamage(damage); setEditedDescription(description);
    setEditedSeverityIncident(severityIncident); setEditedSeverityInjurie(severityInjurie);
    setEditedUnitActivity(unitActivity); setEditedKindOfIncident(kindOfIncident);
    setEditedActivity(activity); setEditedWeather(weather);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    resetEdits();
    setIsEditing(false);
  };

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    // --- CORRECTION : PRÉPARATION DES DONNÉES POUR LE SERVEUR ---
    const updatedData = {
      unity: editedUnity,
      date: editedDate, 
      // On re-transforme la chaîne "Lieu1, Lieu2" en tableau ["Lieu1", "Lieu2"]
      place: typeof editedPlace === 'string' ? editedPlace.split(",").map(s => s.trim()) : editedPlace,
      damage: editedDamage,
      severityIncident: editedSeverityIncident,
      severityInjurie: editedSeverityInjurie,
      description: editedDescription,
      unitActivity: editedUnitActivity,
      kindOfIncident: editedKindOfIncident,
      activity: editedActivity,
      weather: editedWeather,
    };

    try {
      const response = await fetch(`http://localhost:3000/safety-event/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        setSnack({ open: true, message: "האירוע עודכן בהצלחה! ✨", severity: "success" });
        setIsEditing(false);
        // On informe le DashBoard pour qu'il mette à jour son state local
        if (onUpdate) onUpdate(updatedData);
      } else {
        setSnack({ open: true, message: "שגיאה בעדכון (500)", severity: "error" });
      }
    } catch (error) {
      setSnack({ open: true, message: "שגיאת תקשורת עם השרת", severity: "error" });
    }
  };

  // Helper pour les champs éditables
  const renderEditableField = (label: string, value: string | undefined, setter: (v: string) => void, multiline = false) => (
    <TextField
      label={label}
      value={value || ''}
      onChange={(e) => setter(e.target.value)}
      variant="outlined" size="small" fullWidth multiline={multiline}
      sx={{ direction: 'rtl', my: 0.5 }}
    />
  );

  // Helper pour l'affichage visuel (Gère le formatage ici !)
  const renderDisplayItem = (label: string | undefined, value: any, variant: any = "body2", fontWeight: any = "normal", format: 'simple' | 'title-over' | 'label-side' = 'label-side') => {
    let displayValue = value || '—';
    
    // --- CORRECTION VISUELLE : Formatage de la date ---
    if (label === undefined && value === date) {
        displayValue = dayjs(value).locale("he").format("dddd DD/MM/YYYY");
    }
    // --- CORRECTION VISUELLE : Formatage du lieu ---
    if (label === "מיקום") {
        displayValue = Array.isArray(value) ? value.join(", ") : value;
    }

    if (format === 'simple') return <Typography variant={variant} fontWeight={fontWeight}>{displayValue}</Typography>;

    if (format === 'title-over') return (
      <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
        <Typography variant="caption" fontWeight="bold">{label}</Typography>
        <Typography variant={variant} fontWeight={fontWeight}>{displayValue}</Typography>
      </Box>
    );

    return (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Typography variant={variant} fontWeight="bold" sx={{ minWidth: '100px', textAlign: 'right' }}>{label}:</Typography>
        <Typography variant={variant} fontWeight={fontWeight}>{displayValue}</Typography>
      </Box>
    );
  };

  return (
    <Accordion sx={{ width: "calc(45vw - (100vw - 100%))", direction: "rtl" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
          
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton onClick={(e) => { e.stopPropagation(); onDelete(id); }}><DeleteIcon /></IconButton>
            {isEditing ? (
              <>
                <Button variant="outlined" color="error" size="small" onClick={handleCancel}>בטל</Button>
                <Button variant="contained" color="success" size="small" onClick={handleUpdate}>עדכן</Button>
              </>
            ) : (
              <IconButton onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}><EditIcon /></IconButton>
            )}
          </Box>

          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-around", alignItems: "center" }}>
            <Box>
              {isEditing ? (
                <>
                  {renderEditableField("יחידה", editedUnity, setEditedUnity)}
                  {renderEditableField("תאריך", editedDate, setEditedDate)}
                </>
              ) : (
                <>
                  {renderDisplayItem(undefined, unity, "subtitle1", "bold", 'simple')}
                  {renderDisplayItem(undefined, date, "caption", "normal", 'simple')}
                </>
              )}
            </Box>

            <Box>
              {isEditing ? renderEditableField("מיקום", editedPlace, setEditedPlace) : renderDisplayItem("מיקום", place, "body2", "bold", 'title-over')}
            </Box>

            <Box>
              {isEditing ? renderEditableField("חומרה", editedSeverityIncident, setEditedSeverityIncident) : renderDisplayItem("חומרה", severityIncident, "body2", "bold", 'title-over')}
            </Box>
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {isEditing ? renderEditableField("תיאור", editedDescription, setEditedDescription, true) : renderDisplayItem("תיאור", description)}
          <Divider />
          {isEditing ? (
            <>
              {renderEditableField("פעילות יחידה", editedUnitActivity, setEditedUnitActivity)}
              {renderEditableField("סוג אירוע", editedKindOfIncident, setEditedKindOfIncident)}
            </>
          ) : (
            <>
              {renderDisplayItem("פעילות יחידה", unitActivity)}
              {renderDisplayItem("סוג אירוע", kindOfIncident)}
            </>
          )}
        </Box>
      </AccordionDetails>

      <Snackbar open={snack.open} autoHideDuration={4000} onClose={handleCloseSnack} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert onClose={handleCloseSnack} severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
    </Accordion>
  );
}