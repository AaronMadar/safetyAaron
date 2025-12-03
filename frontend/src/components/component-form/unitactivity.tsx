import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useContext } from 'react';
import { DataForm } from '@/context/dataform-context';

export default function UnitActivity() {

  const { data, handleValue } = useContext(DataForm)

  return (
    <FormControl fullWidth dir="rtl" sx={{ minWidth: 160, flexShrink: 0 }}>
      <InputLabel
        id="unitactivity-label"
      // style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
      >פעילות היחידה
      </InputLabel>

      <Select
        labelId="unitactivity-label"
        id="unitactivity"
        label="פעילות היחידה"
        value={data.unitActivity || ""}
        onChange={(e)=> handleValue(`unitActivity`,e.target.value)}
      >
        <MenuItem value="ברירת מחדל" disabled>בחר</MenuItem>
        <MenuItem value="תע״ם">תע״ם</MenuItem>
        <MenuItem value="אימונים">אימונים</MenuItem>
        <MenuItem value="הכשרה">הכשרה</MenuItem>
        <MenuItem value="רגיעה / מנהלה">רגיעה / מנהלה</MenuItem>
        <MenuItem value="מלחמה / מבצע צבאי נרחב">מלחמה / מבצע צבאי נרחב</MenuItem>
      </Select>
    </FormControl>
  );
}
