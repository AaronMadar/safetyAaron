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
import { useContext, useState } from "react";
import { DataForm } from "@/context/DataformContext";
import DbContext from "@/context/DbContext";
import type { snackType } from "@/types/snack-type";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';





export default function PageForm() {

  const { add } = useContext(DbContext);
  const { data, resetForm } = useContext(DataForm);
  const [snack, setSnack] = useState<snackType>({
    open: false,
    message: "",
    severity: "success",
  });


  const handleSubmit = () => {
    if (!data.unity || !data.date || !data.description || !data.kindOfIncident || data.place.length === 0  || !data.severityIncident || !data.damage || !data.weather || !data.unitActivity || !data.activity) {

      setSnack({
        open: true,
        message: "אנא מלא את כל השדות החובה לפני השליחה.",
        severity: "error"
      });
      return;
    }

    add(data);
    resetForm();
    setSnack({
      open: true,
      message: "האירוע נשלח בהצלחה!",
      severity: "success"
    });





  };

  const handleClose = () => {
    setSnack({ ...snack, open: false });
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
          <Snackbar
            open={snack.open}
            autoHideDuration={4000}        // disparaît après 4 secondes
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert onClose={handleClose} severity={snack.severity}>
              {snack.message}
            </Alert>
          </Snackbar>

        </Box>



      </Box>



    </Box>
  )

}























