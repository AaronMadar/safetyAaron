import { useContext } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { DataForm } from '@/context/DataformContext';

export default function Activity() {


  const { data, handleValue } = useContext(DataForm)

  return (
    <section>
      <FormControl fullWidth dir="rtl">
        <InputLabel id="activity-label">הפעילות שלך</InputLabel>
        <Select
          labelId="activity-label"
          id="activity"
          value={data.activity || ""}
          label="הפעילות שלך"
          onChange={(e) => handleValue("activity", e.target.value)}

          
          required
        >

          <MenuItem value="" disabled>
            בחר
          </MenuItem>
          <MenuItem value="פעילות מבצעית/לחימה">פעילות מבצעית/לחימה</MenuItem>
          <MenuItem value="אימון">אימון</MenuItem>
          <MenuItem value="הכשרה">הכשרה</MenuItem>
          <MenuItem value="שגרה">שגרה</MenuItem>
          <MenuItem value="פנאי">פנאי</MenuItem>
          <MenuItem value="חופשה">חופשה</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}
