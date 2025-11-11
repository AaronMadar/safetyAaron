import { Box, Button } from "@mui/material";
import Header from "@/components/component-layout/header";
import UnityField from "@/components/component-field/unity";
import { Description } from "@mui/icons-material";
import UnitActivity from "@/components/component-field/unitactivity";
import Activity from "@/components/component-field/activity";
import KindOfIncident from "@/components/component-field/kind-of-Incident";
import Place from "@/components/component-field/place";
import Damage from "@/components/component-field/damage";
import Weather from "@/components/component-field/weather";
import SeverityIncident from "@/components/component-field/severity-incident";
import SendIcon from '@mui/icons-material/Send';
import DateField from "@/components/component-field/date";
import { mainBoxCss, innerLeftBoxCss, innerRightBoxCss , buttonSubmitCss } from "@/style/style";
import { useState } from "react";



export default function PageForm(){

  const [formData, setFormData] = useState([])
  

return (
    <>
    <Header />
            <Box sx={mainBoxCss}>
    
              <Box sx={innerLeftBoxCss}>
                <UnityField />
                <DateField />
                <Description />
                <UnitActivity />
                <Activity />
              </Box>
    
              <Box sx={innerRightBoxCss}>
                <KindOfIncident />
                <Place />
                <SeverityIncident></SeverityIncident>
                <Damage />
                <Weather />
                <Button variant="contained"  endIcon={<SendIcon />} sx={buttonSubmitCss}>
                  Send
                </Button>
              </Box>
    
            </Box>
          
    </>
)

}   