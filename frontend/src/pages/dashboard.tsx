import Card from "@/components/dashboard/card";
import Header from "@/components/layout/header";
import DbContext from "@/context/DbContext";
import { boxCardCss } from "@/style/style";
import { Box } from "@mui/material";
import { useContext , useState } from "react";
import type { SafetyIncidentWithId } from "@/types/safety-incident-type";

/**
 * COMMENT TYPER LE DASHBOARD :
 * 
 * 1. dbLocal est déjà typé via le contexte (SafetyIncidentWithId[])
 * 2. Dans map, TypeScript infère automatiquement le type de x
 * 3. Mais on peut le typer explicitement pour plus de clarté
 * 4. place est un array, mais Card attend un string, donc on convertit avec join()
 */
export default function DashBoard() {
  const { dbLocal } = useContext(DbContext);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const onSearch = (term: string) => {
    setSearchTerm(term);
  }

  const searchContent = () => {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return dbLocal;

  return dbLocal.filter(item => {
    // Convertit le champ place en string searchable, peu importe si c'est string ou array
    const placeText = Array.isArray(item.place) 
      ? item.place.join(' ').toLowerCase() 
      : (item.place || '');

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
      item.weather
    ].join(' ').toLowerCase();

    return searchIn.includes(term);
  });
};
   
  

  return (
    <Box sx={{ scrollbarGutter: "stable both-edges" }} >
      <Header title={'רשימת האירועים'} showSearch={true} onSearch={onSearch}/>
      <Box sx={boxCardCss}>
        {searchContent().map((x: SafetyIncidentWithId) => (
          <Card
            key={x.id}
            activity={x.activity} 
            damage={x.damage}
            date={x.date}
            description={x.description}
            kindOfIncident={x.kindOfIncident}
            place={Array.isArray(x.place) ? x.place.join(', ') : x.place}
            severityIncident={x.severityIncident}
            severityInjurie={x.severityInjurie}
            unitActivity={x.unitActivity}
            unity={x.unity}
            weather={x.weather}
          />
        ))}
      </Box>
    </Box>
  );
}
