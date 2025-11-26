import { useContext, useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import SeverityInjurie from "./severity-injurie";
import { DataForm } from "@/context/dataform-context";

export default function Damage() {
  const [injuries, setInjuries] = useState<boolean>(false);
  const { data, handleValue } = useContext(DataForm)

  function handleInjuries(e: SelectChangeEvent) {
    const val:string = e.target.value;
    if (val === "יש נפגעים, אין נזק" || val === "יש נפגעים, יש נזק") {
      setInjuries(true);
    } else {
      setInjuries(false);
    }
  }

  return (
    <section dir="ltr" data-injuries={String(injuries)}>
      <FormControl fullWidth dir='rtl'>
        <InputLabel id="damage-label">תוצאה של נזק</InputLabel>
        <Select
          labelId="damage-label"
          id="Damage"
          label="תוצאה של נזק"
          value={data.damage}
          onChange={(e) => {
            handleInjuries(e);
            handleValue("damage", e.target.value)
          }}
          required
        >
          <MenuItem value="" >בחר</MenuItem>
          <MenuItem value="אין נפגעים, אין נזק">אין נפגעים, אין נזק</MenuItem>
          <MenuItem value="אין נפגעים, יש נזק">אין נפגעים, יש נזק</MenuItem>
          <MenuItem value="יש נפגעים, אין נזק">יש נפגעים, אין נזק</MenuItem>
          <MenuItem value="יש נפגעים, יש נזק">יש נפגעים, יש נזק</MenuItem>
        </Select>
      </FormControl>
      {injuries && <SeverityInjurie />}
    </section>
  );
}
