import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function UnitActivity() {
  return (
    <FormControl fullWidth>
      <InputLabel id="unitactivity-label">Unit Activity</InputLabel>
      <Select
        labelId="unitactivity-label"
        id="unitactivity"
        label="unit activity"
        defaultValue="default"
      >
        <MenuItem value="default">בחר</MenuItem>
        <MenuItem value="taam">תע"ם</MenuItem>
        <MenuItem value="imounim">אימונים</MenuItem>
        <MenuItem value="ahchara">הכשרה</MenuItem>
        <MenuItem value="reguia">רגיעה / מנהלה</MenuItem>
        <MenuItem value="milhama">מלחמה/מבצע צבאי נרחב</MenuItem>
      </Select>
    </FormControl>
  );
}












