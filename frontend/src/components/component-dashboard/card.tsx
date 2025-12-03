import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Typography, Divider } from "@mui/material";
import type {CardProps} from "@/types/cardprops-type";


export default function Card({
  activity,
  damage,
  date,
  description,
  kindOfIncident,
  place,
  severityIncident,
  severityInjurie,
  unitActivity,
  unity,
  weather,
}: CardProps ) {
  return (
    <Accordion sx={{ width: "calc(45vw - (100vw - 100%))", direction: "rtl" ,}}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="card-content"
        id="card-header"
      >
        {/* שורה ראשית */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            direction: "rtl",
          }}
        >
          {/* יחידה */}
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="subtitle1" fontWeight="bold">
              {unity}
            </Typography>
            <Typography variant="caption">{date}</Typography>
          </Box>

          {/* מיקום */}
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "center" }}>
            <Typography variant="body2">{place}</Typography>
            <Typography variant="body2">{damage}</Typography>
          </Box>

          {/* דרגת חומרה */}
          <Box sx={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
            <Typography variant="body2">{severityIncident}</Typography>
            <Typography variant="caption">{severityInjurie}</Typography>
          </Box>
        </Box>
      </AccordionSummary>

      {/* פרטים נוספים */}
      <AccordionDetails sx={{ direction: "rtl" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="body2">{description}</Typography>

          <Divider />

          <Typography variant="body2">פעילות יחידה : {unitActivity}</Typography>
          <Typography variant="body2">סוג אירוע : {kindOfIncident}</Typography>
          <Typography variant="body2">פעילות כללית : {activity}</Typography>
          <Typography variant="body2">מזג אוויר : {weather}</Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
