import Card from "@/components/component-dashboard/card";
import Header from "@/components/component-layout/header";
import DbContext from "@/context/db-context";
import { boxCardCss } from "@/style/style";
import { Box } from "@mui/material";
import { useContext } from "react";



export default function DashBoard() {
  const { dbLocal } = useContext(DbContext);
 console.log('dbLocal in dashboard:', dbLocal);  
console.log('Full context value:', useContext(DbContext));  

 
  return (
<>
<Header title={'רשימת האירועים'} showSearch={true} />
<Box
      sx={boxCardCss}
        >

        {dbLocal.map((x:any) => (
        <Card
          key={x.id}
          activity={x.activity} 
          damage={x.damage}
          date={x.date}
          description={x.description}
          kindOfIncident={x.kindOfIncident}
          place={x.place}
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
