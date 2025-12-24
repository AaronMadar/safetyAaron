import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, Divider, TextField, Button } from "@mui/material";
import type { CardProps } from "@/types/cardprops-type";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useState, useCallback } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import type { snackType } from "@/types/snack-type";
import dayjs from "dayjs";
import "dayjs/locale/he";

// =============================================================================
// CONSTANTS
// =============================================================================
const API_BASE_URL = 'http://localhost:3000';
const MESSAGES = {
  UPDATE_SUCCESS: "האירוע עודכן בהצלחה! ✨",
  UPDATE_ERROR: "שגיאה בעדכון (500)",
  NETWORK_ERROR: "שגיאת תקשורת עם השרת",
} as const;

// =============================================================================
// COMPONENT
// =============================================================================
export default function Card({
  activity, id, damage, date, description, kindOfIncident, place,
  severityIncident, severityInjurie, unitActivity, unity, weather, onDelete,
  onUpdate
}: CardProps) {
  // =============================================================================
  // STATE MANAGEMENT
  // =============================================================================
  const [isEditing, setIsEditing] = useState(false);
  const [snack, setSnack] = useState<snackType>({
    open: false, message: "", severity: "success",
  });

  // Consolidated state for edited fields - much cleaner and easier to manage
  const [editedData, setEditedData] = useState({
    unity,
    date,
    place: Array.isArray(place) ? place.join(", ") : place,
    damage,
    severityIncident,
    severityInjurie,
    description,
    unitActivity,
    kindOfIncident,
    activity,
    weather,
  });

  // =============================================================================
  // EVENT HANDLERS
  // =============================================================================
  const handleCloseSnack = useCallback(() => {
    setSnack((prev) => ({ ...prev, open: false }));
  }, []);

  // Reset edited fields to original values
  const resetEdits = () => {
    setEditedData({
      unity,
      date,
      place: Array.isArray(place) ? place.join(", ") : place,
      damage,
      severityIncident,
      severityInjurie,
      description,
      unitActivity,
      kindOfIncident,
      activity,
      weather,
    });
  };

  const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    // Prevent accordion from expanding/collapsing when clicking cancel
    e.stopPropagation();
    resetEdits();
    setIsEditing(false);
  }, []);


  // Send modified data to server
  const handleUpdate = useCallback(async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const updatedData = {
      ...editedData,
      // Convert place string back to array if it's a string
      place: typeof editedData.place === 'string'
        ? editedData.place.split(",").map(s => s.trim())
        : editedData.place,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/safety-event/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedData),
      });

      if (response.ok) {
        setSnack({ open: true, message: MESSAGES.UPDATE_SUCCESS, severity: "success" });
        setIsEditing(false);
        // Notify parent component to update local state
        if (onUpdate) onUpdate(updatedData);
      } else {
        const errorMessage = response.status === 500 ? MESSAGES.UPDATE_ERROR : `שגיאה ${response.status}`;
        setSnack({ open: true, message: errorMessage, severity: "error" });
      }
    } catch (error) {
      console.error('Update error:', error);
      setSnack({ open: true, message: MESSAGES.NETWORK_ERROR, severity: "error" });
    }
  }, [editedData, id, onUpdate]);

  // =============================================================================
  // HELPER FUNCTIONS
  // =============================================================================

  // Render editable form fields
  const renderEditableField = (label: string, field: keyof typeof editedData, multiline = false) => (
    <TextField
      label={label}
      value={editedData[field] || ''}
      onChange={(e) => setEditedData(prev => ({ ...prev, [field]: e.target.value }))}
      variant="outlined"
      size="small"
      fullWidth
      multiline={multiline}
      inputProps={{
        'aria-label': label,
        dir: 'rtl'
      }}
      sx={{ direction: 'rtl', my: 0.5 }}
    />
  );

  // Render display items with various formatting options
  const renderDisplayItem = (
    label: string | undefined,
    value: string | string[] | undefined,
    variant: "body1" | "body2" | "caption" | "subtitle1" = "body2",
    fontWeight: "normal" | "bold" = "normal",
    format: 'simple' | 'title-over' | 'label-side' = 'label-side'
  ) => {
    let displayValue: string;

    // Handle different value types and formatting
    if (label === undefined && value === date) {
      // Format date display
      displayValue = dayjs(value).locale("he").format("dddd DD/MM/YYYY");
    } else if (label === "מיקום") {
      // Format place display (join array if needed)
      displayValue = Array.isArray(value) ? value.join(", ") : (value || '—');
    } else {
      // Default formatting - ensure string output
      displayValue = Array.isArray(value) ? value.join(", ") : (value || '—');
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

  // =============================================================================
  // RENDER
  // =============================================================================
  return (
    <Accordion
      sx={{ width: "calc(45vw - (100vw - 100%))", direction: "rtl" }}
      aria-expanded={undefined} // Let Material-UI handle this automatically
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>

          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              onClick={(e) => { e.stopPropagation(); onDelete(id); }}
              aria-label="Delete incident"
            >
              <DeleteIcon />
            </IconButton>
            {isEditing ? (
              <>
                <Button
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={handleCancel}
                  aria-label="Cancel editing"
                >
                  בטל
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  size="small"
                  onClick={handleUpdate}
                  aria-label="Update incident"
                >
                  עדכן
                </Button>
              </>
            ) : (
              <IconButton
                onClick={(e) => { e.stopPropagation(); setIsEditing(true); }}
                aria-label="Edit incident"
              >
                <EditIcon />
              </IconButton>
            )}
          </Box>

          <Box sx={{ display: "flex", flexGrow: 1, justifyContent: "space-around", alignItems: "center" }}>
            <Box>
              {isEditing ? (
                <>
                  {renderEditableField("יחידה", "unity")}
                  {renderEditableField("תאריך", "date")}
                </>
              ) : (
                <>
                  {renderDisplayItem(undefined, unity, "subtitle1", "bold", 'simple')}
                  {renderDisplayItem(undefined, date, "caption", "normal", 'simple')}
                </>
              )}
            </Box>

            <Box>
              {isEditing ? renderEditableField("מיקום", "place") : renderDisplayItem("מיקום", place, "body2", "bold", 'title-over')}
            </Box>

            <Box>
              {isEditing ? renderEditableField("חומרה", "severityIncident") : renderDisplayItem("חומרה", severityIncident, "body2", "bold", 'title-over')}
            </Box>
          </Box>
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {isEditing ? renderEditableField("תיאור", "description", true) : renderDisplayItem("תיאור", description)}
          <Divider />
          {isEditing ? (
            <>
              {renderEditableField("פעילות יחידה", "unitActivity")}
              {renderEditableField("סוג אירוע", "kindOfIncident")}
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