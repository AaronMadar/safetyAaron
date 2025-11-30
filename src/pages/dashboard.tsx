import Card from "@/components/component-dashboard/card";
import Header from "@/components/component-layout/header";
import DbContext from "@/context/db-context";
import { boxCardCss } from "@/style/style";
import { Box } from "@mui/material";
import { useContext } from "react";
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

  return (
    <>
      <Header title={'רשימת האירועים'} showSearch={true} />
      <Box sx={boxCardCss}>
        {dbLocal.map((x: SafetyIncidentWithId) => (
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
    </>
  );
}
