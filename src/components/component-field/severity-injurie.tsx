import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DataForm } from "@/context/dataform-context";

export default function SeverityInjurie(): React.ReactElement {

  const { data, handleValue } = useContext(DataForm)

  return (
    <section dir="ltr">
      <FormControl fullWidth sx={{ marginTop: 2 }}>
        <InputLabel id="severity-injury-label">חומרת הפציעות</InputLabel>
        <Select
          labelId="severity-injury-label"
          id="severityinjury"
          name="severityinjury"
          label="חומרת הפציעות"
          value={data.severityInjurie}
          onChange={(e)=>{
            handleValue(`severityInjurie`, e.target.value)
          }}

        >
          <MenuItem value="">בחר</MenuItem>
          <MenuItem value="no_injury">ללא פגיעה</MenuItem>
          <MenuItem value="minor_no_hospital">פגוע קל (ללא אשפוז)</MenuItem>
          <MenuItem value="minor_hospitalized">פגוע קל (שאושפז)</MenuItem>
          <MenuItem value="moderate">פגוע בינוני</MenuItem>
          <MenuItem value="severe_critical">פגוע קשה/אנוש</MenuItem>
          <MenuItem value="fatal">חלל</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}