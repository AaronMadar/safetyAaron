import { Box, Button } from "@mui/material";
import Header from "@/components/layout/header";
import UnityField from "@/components/form/unity";
import Description from "@/components/form/description";
import UnitActivity from "@/components/form/unitactivity";
import Activity from "@/components/form/activity";
import KindOfIncident from "@/components/form/kind-of-Incident";
import Place from "@/components/form/place";
import Damage from "@/components/form/damage";
import Weather from "@/components/form/weather";
import SeverityIncident from "@/components/form/severity-incident";
import SendIcon from '@mui/icons-material/Send';
import DateField from "@/components/form/date";
import { mainBoxCss, innerLeftBoxCss, innerRightBoxCss, buttonSubmitCss } from "@/style/style";
import { useContext } from "react";
import { DataForm } from "@/context/DataformContext";
import DbContext from "@/context/DbContext";





export default function PageForm() {

  const { add } = useContext(DbContext);
  const { data, resetForm } = useContext(DataForm);


  const handleSubmit = () => {
    if (!data.unity || !data.date || !data.description || !data.kindOfIncident || !data.place || !data.severityIncident || !data.damage || !data.weather || !data.unitActivity || !data.activity) {

      alert("אנא מלא את כל השדות בטופס לפני השליחה.");
      return;
    }
    add(data);
    resetForm();

    alert("האירוע נשלח בהצלחה!")



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























