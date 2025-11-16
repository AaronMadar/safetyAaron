import React, { useContext, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { DataForm } from "@/context/dataform-context";

export default function Weather(): React.ReactElement {

  
  const { data, handleValue } = useContext(DataForm)
  return (
    <section dir="rtl">
      <FormControl fullWidth>
        <InputLabel
          id="weather-label"
          style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
        >
          מזג האוויר
        </InputLabel>
        <Select
          labelId="weather-label"
          id="weather"
          name="מזג האוויר"
          label='מזג האוויר'
          value={data.weather || "" }
          onChange={(e)=> handleValue('weather', e.target.value)}
        >
          <MenuItem value="" disabled>בחר</MenuItem>
          <MenuItem value="שרב / עומס חום">שרב / עומס חום</MenuItem>
          <MenuItem value="שלג">שלג</MenuItem>
          <MenuItem value="סופת חול">סופת חול</MenuItem>
          <MenuItem value="גשם">גשם</MenuItem>
          <MenuItem value="ערפל">ערפל</MenuItem>
          <MenuItem value="התקרחות">התקרחות</MenuItem>
          <MenuItem value="ברד">ברד</MenuItem>
          <MenuItem value="מעונן">מעונן</MenuItem>
          <MenuItem value="נאה">נאה</MenuItem>
          <MenuItem value="רוח">רוח</MenuItem>
          <MenuItem value="ים סוער">ים סוער</MenuItem>
          <MenuItem value="מים שקטים">מים שקטים</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}
