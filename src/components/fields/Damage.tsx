import { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  // SelectChangeEvent,
} from "@mui/material";
import SeverityInjurie from "./SeverityInjurie";
import { Margin } from "@mui/icons-material";



export default function Damage() {
  const [injuries, setInjuries] = useState<boolean>(false);

  function handleSelection(e: SelectChangeEvent<string>) {
    const val = e.target.value;
    if (val === "01" || val === "11") {
      setInjuries(true);
    } else {
      setInjuries(false);
    }
  }

  return (
    <section dir="ltr" data-injuries={String(injuries)}>
      <FormControl fullWidth>
        <InputLabel id="damage-label">Damage Result</InputLabel>
        <Select
          labelId="damage-label"
          id="Damage"
          label="Damage Result"
          defaultValue=""
          onChange={handleSelection}
        >
          <MenuItem value="">בחר</MenuItem>
          <MenuItem value="00">אין נפגעים, אין נזק</MenuItem>
          <MenuItem value="10">אין נפגעים, יש נזק</MenuItem>
          <MenuItem value="01">יש נפגעים, אין נזק</MenuItem>
          <MenuItem value="11">יש נפגעים, יש נזק</MenuItem>
        </Select>
      </FormControl>
      {injuries && <SeverityInjurie  />}
    </section>
  );
}