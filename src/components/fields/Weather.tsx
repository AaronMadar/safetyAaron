import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function Weather(): React.ReactElement {
  return (
    <section>
      <FormControl fullWidth>
        <InputLabel id="weather-label">Weather</InputLabel>
        <Select
          labelId="weather-label"
          id="weather"
          name="weather"
          label="Weather"
          defaultValue=""
        >
          <MenuItem value="">בחר</MenuItem>
          <MenuItem value="heatwave">שרב/עומס חום</MenuItem>
          <MenuItem value="snow">שלג</MenuItem>
          <MenuItem value="sandstorm">סופת חול</MenuItem>
          <MenuItem value="rain">גשם</MenuItem>
          <MenuItem value="fog">ערפל</MenuItem>
          <MenuItem value="ice">התקרחות</MenuItem>
          <MenuItem value="hail">ברד</MenuItem>
          <MenuItem value="cloudy">מעונן</MenuItem>
          <MenuItem value="clear">נאה</MenuItem>
          <MenuItem value="windy">רוח</MenuItem>
          <MenuItem value="rough_sea">ים סוער</MenuItem>
          <MenuItem value="calm_sea">מים שקטים</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}