import React, { useContext } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DataForm } from "@/context/dataform-context";

export default function SeverityInjurie(): React.ReactElement {

  const { data, handleValue } = useContext(DataForm)

  return (
    <section dir="rtl">
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
          <MenuItem value="בחר">בחר</MenuItem>
          <MenuItem value="ללא פגיעה">ללא פגיעה</MenuItem>
          <MenuItem value="פגוע קל (ללא אשפוז)">פגוע קל (ללא אשפוז)</MenuItem>
          <MenuItem value="פגוע קל (שאושפז)">פגוע קל (שאושפז)</MenuItem>
          <MenuItem value="פגוע בינוני">פגוע בינוני</MenuItem>
          <MenuItem value="פגוע קשה/אנוש">פגוע קשה/אנוש</MenuItem>
          <MenuItem value="חלל">חלל</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}