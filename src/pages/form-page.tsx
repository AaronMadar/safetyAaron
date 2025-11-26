import { Box, Button } from "@mui/material";
import Header from "@/components/component-layout/header";
import UnityField from "@/components/component-form/unity";
import Description from "@/components/component-form/description";
import UnitActivity from "@/components/component-form/unitactivity";
import Activity from "@/components/component-form/activity";
import KindOfIncident from "@/components/component-form/kind-of-Incident";
import Place from "@/components/component-form/place";
import Damage from "@/components/component-form/damage";
import Weather from "@/components/component-form/weather";
import SeverityIncident from "@/components/component-form/severity-incident";
import SendIcon from '@mui/icons-material/Send';
import DateField from "@/components/component-form/date";
import { mainBoxCss, innerLeftBoxCss, innerRightBoxCss, buttonSubmitCss } from "@/style/style";
import { useContext } from "react";
import { DataForm } from "@/context/dataform-context";
import DbContext from "@/context/db-context";





export default function PageForm() {

  const { add } = useContext(DbContext);
  const { data, handleValue } = useContext(DataForm);

  const handleSubmit = () => {
    if (!data.unity || !data.date || !data.description || !data.kindOfIncident || !data.place || !data.severityIncident || !data.damage || !data.weather || !data.unitActivity || !data.activity) {
      alert("אנא מלא את כל השדות בטופס לפני השליחה.");
      return;
    }
    add(data);

    // Réinitialiser le formulaire
    handleValue("activity", "");
    handleValue("damage", "");
    handleValue("date", "");
    handleValue("description", "");
    handleValue("kindOfIncident", "");
    handleValue("place", "");
    handleValue("severityIncident", "");
    handleValue("severityInjurie", "");
    handleValue("unitActivity", "");
    handleValue("unity", "");
    handleValue("weather", "");
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header title={'טופס בטיחות'} showSearch={false} />


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
          <Button variant="contained" endIcon={<SendIcon />} sx={buttonSubmitCss} type="submit"
            onClick={handleSubmit}>
            Send
          </Button>
        </Box>

      </Box>



    </Box>
  )

}























