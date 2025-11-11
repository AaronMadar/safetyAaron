import { Box, Button } from "@mui/material";
import Header from "@/components/component-layout/header";
import UnityField from "@/components/component-field/unity";
import { Description } from "@mui/icons-material";
import UnitActivity from "@/components/component-field/unitactivity";
import Activity from "@/components/component-field/activity";
import KindOfIncident from "../components/component-field/kind-of-Incident";
import Place from "@/components/component-field/place";
import Damage from "@/components/component-field/damage";
import Weather from "@/components/component-field/weather";
import SeverityIncident from "../components/component-field/severity-incident";
import SendIcon from '@mui/icons-material/Send';
import DateField from "@/components/component-field/date";



export default function PageForm(){

  

return (
    <>
    <Header />
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "column", md: "row", dl: 'row' }, gap: 2, minHeight: '100vh', paddingTop: 4, backgroundColor: 'background.default', }}>
    
              <Box sx={{ flex: 1, margin: 2, display: "flex", flexDirection: "column", gap: 2, direction:"rtl"}}>
                <UnityField />
                <DateField />
                <Description />
                <UnitActivity />
                <Activity />
              </Box>
    
              <Box sx={{ flex: 1, margin: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                <KindOfIncident />
                <Place />
                <SeverityIncident></SeverityIncident>
                <Damage />
                <Weather />
                <Button variant="contained"  endIcon={<SendIcon />} sx={{ width: 'fit-content', alignSelf: { xs: 'center', sm: 'flex-end' }, marginTop: 2 }}>
                  Send
                </Button>
              </Box>
    
            </Box>
          
    </>
)

}   