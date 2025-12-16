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
// Assurez-vous d'avoir ce type d'import pour Snackbar
import type { snackType } from "@/types/snack-type";


export default function Card({
  activity, id, damage, date, description, kindOfIncident, place,
  severityIncident, severityInjurie, unitActivity, unity, weather, onDelete,
  onUpdate // ESSENTIEL pour la mise à jour des données dans le parent (DashBoard)
}: CardProps) {

  // 1. États pour l'édition et les notifications
  const [isEditing, setIsEditing] = useState(false);
  const [snack, setSnack] = useState<snackType>({
    open: false, message: "", severity: "success",
  });
  const handleCloseSnack = () => setSnack((prev) => ({ ...prev, open: false }));

  // 2. États locaux pour les champs modifiables (initialisation avec les props)
  const [editedUnity, setEditedUnity] = useState(unity);
  const [editedDate, setEditedDate] = useState(date);
  const [editedPlace, setEditedPlace] = useState(place);
  const [editedDamage, setEditedDamage] = useState(damage);
  const [editedSeverityIncident, setEditedSeverityIncident] = useState(severityIncident);
  const [editedSeverityInjurie, setEditedSeverityInjurie] = useState(severityInjurie);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedUnitActivity, setEditedUnitActivity] = useState(unitActivity);
  const [editedKindOfIncident, setEditedKindOfIncident] = useState(kindOfIncident);
  const [editedActivity, setEditedActivity] = useState(activity);
  const [editedWeather, setEditedWeather] = useState(weather);


  // 3. Fonctions de contrôle et Logique de Fetch (PUT)
  const resetEdits = () => {
    setEditedUnity(unity); setEditedDate(date); setEditedPlace(place); setEditedDamage(damage);
    setEditedDescription(description); setEditedSeverityIncident(severityIncident);
    setEditedSeverityInjurie(severityInjurie); setEditedUnitActivity(unitActivity);
    setEditedKindOfIncident(kindOfIncident); setEditedActivity(activity); setEditedWeather(weather);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    resetEdits()
    setIsEditing(false);
  };

  const handleUpdate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    // Création de l'objet à envoyer à l'API
    const updatedData = {
      unity: editedUnity, date: editedDate, place: editedPlace, damage: editedDamage,
      severityIncident: editedSeverityIncident, severityInjurie: editedSeverityInjurie,
      description: editedDescription, unitActivity: editedUnitActivity,
      kindOfIncident: editedKindOfIncident, activity: editedActivity, weather: editedWeather,
    };

    try {
      const response = await fetch(`http://localhost:3000/safety-event/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        setSnack({ open: true, message: "האירוע מעודכן בהצלחה! ✨", severity: "success" });
        setIsEditing(false);
        if (onUpdate) {
          onUpdate(id, updatedData); // Mise à jour de l'état parent (DashBoard)
        }
      } else {
        const errorText = await response.text();
        setSnack({ open: true, message: `העידכון כשל. ❌ Erreur ${response.status}: ${errorText.substring(0, 50)}...`, severity: "error" });
      }
    } catch (error) {
      setSnack({ open: true, message: `העידכון כשל. ❌ Erreur réseau/API.`, severity: "error" });
    }
  }

  // 4. Helpers de Rendu pour gérer les différents formats (Le Chef-d'Œuvre visuel)
  const renderEditableField = (currentPropValue: string | string[] | undefined, localStateValue: string | string[] | undefined, label: string, setter: (value: string) => void, multiline = false) => {
    const displayValue = Array.isArray(localStateValue) ? localStateValue.join(', ') : localStateValue || '';

    return (
      <TextField
        label={label}
        value={displayValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setter(e.target.value)}
        placeholder={currentPropValue || 'אופציונלי'}
        variant="outlined"
        size="small"
        fullWidth
        multiline={multiline}
        maxRows={multiline ? 4 : 1}
        // Styles pour la compacité
        sx={{
          direction: 'rtl', my: 0.2,
          '& .MuiInputBase-root': { height: multiline ? 'auto' : 36, padding: multiline ? '4px 8px' : '0 8px' },
          '& .MuiInputBase-input': { p: '6px 8px' },
          '& .MuiInputLabel-root': {
            transform: 'translate(14px, 6px) scale(0.75)',
            fontSize: '0.8rem',
          },
          '& .MuiInputLabel-shrink': { transform: 'translate(14px, -9px) scale(0.75)' }
        }}
      />
    );
  };

  // Helper pour l'affichage en mode non-édition
  const renderDisplayItem = (label: string | undefined, value: string | string[] | undefined, variant: "subtitle1" | "caption" | "body2" = "body2", fontWeight: "bold" | "normal" = "normal", format: 'simple' | 'title-over' | 'label-side' = 'label-side') => {
    const displayValue = Array.isArray(value) ? value.join(', ') : value || '—';

    if (format === 'simple') {
      // Pour Unité et Date (valeur seule)
      return <Typography variant={variant} fontWeight={fontWeight}>{displayValue}</Typography>;
    }

    if (format === 'title-over') {
      // Pour Mikum et Nezek (Label au-dessus de la valeur)
      return (
        <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
          <Typography variant="caption" fontWeight="bold">{label}</Typography>
          <Typography variant={variant} fontWeight={fontWeight}>{displayValue}</Typography>
        </Box>
      );
    }

    // Format 'label-side' (pour Gravité et Détails)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', width: '100%', gap: 1 }}>
        <Typography variant={variant} fontWeight="bold" sx={{ minWidth: '80px', textAlign: 'right' }}>{label}:</Typography>
        <Typography variant={variant} fontWeight={fontWeight}>{displayValue}</Typography>
      </Box>
    );
  };


  return (
    <Accordion sx={{ width: "calc(45vw - (100vw - 100%))", direction: "rtl", }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="card-content"
        id="card-header"
      >
        {/* 5. Structure Principale de l'En-tête */}
        <Box
          sx={{
            display: "flex", width: "100%", justifyContent: "space-between",
            alignItems: "center", direction: "rtl",
          }}
        >
          {/* COLONNE 1 : Contrôles (Delete, Edit/Update/Cancel) */}
          <Box sx={{ display: "flex", gap: 1, minWidth: isEditing ? '220px' : '80px' }}>
            <IconButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); onDelete(id) }}>
              <DeleteIcon />
            </IconButton>
            {isEditing ? (
              <>
                <Button variant="outlined" color="error" size="small" onClick={handleCancel} startIcon={<CancelIcon />} sx={{ height: 36, whiteSpace: 'nowrap' }}>בטל</Button>
                <Button variant="contained" color="success" size="small" onClick={handleUpdate} startIcon={<UpdateIcon />} sx={{ height: 36, whiteSpace: 'nowrap' }}>עדכן</Button>
              </>
            ) : (
              <IconButton onClick={(e: React.MouseEvent<HTMLButtonElement>) => { e.stopPropagation(); setIsEditing(true); }}>
                <EditIcon />
              </IconButton>
            )}
          </Box>

          {/* COLONNES 2, 3, 4 : Données Structurées de l'En-tête */}
          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-between", alignItems: "center", gap: 2 }}>

            {/* COLONNE 2 : Unité et Date (Valeur seule) */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, minWidth: '100px' }}>
              {isEditing ? (
                <>
                  {renderEditableField(unity, editedUnity, "יחידה", setEditedUnity)}
                  {renderEditableField(date, editedDate, "תאריך", setEditedDate)}
                </>
              ) : (
                <>
                  {renderDisplayItem(undefined, unity, "subtitle1", "bold", 'simple')}
                  {renderDisplayItem(undefined, date, "caption", "normal", 'simple')}
                </>
              )}
            </Box>

            {/* COLONNE 3 : Mikum (Label au-dessus) */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, minWidth: '100px', textAlign: 'center' }}>
              {isEditing ? (
                renderEditableField(place, editedPlace, "מיקום", setEditedPlace)
              ) : (
                renderDisplayItem("מיקום", place, "caption", "bold", 'title-over')
              )}
            </Box>

            {/* COLONNE 4 : Nezek (Label au-dessus) */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, minWidth: '100px', textAlign: 'center' }}>
              {isEditing ? (
                renderEditableField(damage, editedDamage, "נזק", setEditedDamage)
              ) : (
                renderDisplayItem("נזק", damage, "caption", "bold", 'title-over')
              )}
            </Box>

            {/* COLONNE 5 : Gravité (Label à côté) */}
            <Box sx={{ display: "flex", flexDirection: "column", minWidth: '150px', textAlign: 'right' }}>
              {isEditing ? (
                <>
                  {renderEditableField(severityIncident, editedSeverityIncident, "חומרה אירוע", setEditedSeverityIncident)}
                  {renderEditableField(severityInjurie, editedSeverityInjurie, "חומרה פציעה", setEditedSeverityInjurie)}
                </>
              ) : (
                <>
                  {renderDisplayItem("חומרה אירוע", severityIncident, "body2", "bold", 'label-side')}
                  {renderDisplayItem("חומרה פציעה", severityInjurie, "caption", "normal", 'label-side')}
                </>
              )}
            </Box>
          </Box>
        </Box>
      </AccordionSummary>

      {/* 6. Détails (AccordionDetails) */}
      <AccordionDetails sx={{ direction: "rtl" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>

          {/* Description (Correction du doublon Tiiour) */}
          {isEditing
            ? renderEditableField(description, editedDescription, "תיאור", setEditedDescription, true)
            : renderDisplayItem("תיאור", description, "body2", "normal", 'label-side')
          }
          <Divider />

          {/* Autres Détails (Label à côté) */}
          {isEditing ? (
            <>
              {renderEditableField(unitActivity, editedUnitActivity, "פעילות יחידה", setEditedUnitActivity)}
              {renderEditableField(kindOfIncident, editedKindOfIncident, "סוג אירוע", setEditedKindOfIncident)}
              {renderEditableField(activity, editedActivity, "פעילות כללית", setEditedActivity)}
              {renderEditableField(weather, editedWeather, "מזג אוויר", setEditedWeather)}
            </>
          ) : (
            <>
              {renderDisplayItem("פעילות יחידה", unitActivity, "body2", "normal", 'label-side')}
              {renderDisplayItem("סוג אירוע", kindOfIncident, "body2", "normal", 'label-side')}
              {renderDisplayItem("פעילות כללית", activity, "body2", "normal", 'label-side')}
              {renderDisplayItem("מזג אוויר", weather, "body2", "normal", 'label-side')}
            </>
          )}

        </Box>
      </AccordionDetails>

      {/* 7. Snackbar pour le retour utilisateur */}
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
    </Accordion>
  );
}