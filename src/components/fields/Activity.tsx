import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function Activity()  {
  const [activity, setActivity] = useState('default');

  return (
    <section>
      <FormControl fullWidth>
        <InputLabel id="activity-label">Your activity</InputLabel>
        <Select
          labelId="activity-label"
          id="activity"
          value={activity}
          label="Your activity"
          onChange={(e) => setActivity(e.target.value)}
        >
          <MenuItem value="default">בחר</MenuItem>
          <MenuItem value="operational">פעילות מבצעית/לחימה</MenuItem>
          <MenuItem value="training">אימון</MenuItem>
          <MenuItem value="education">הכשרה</MenuItem>
          <MenuItem value="routine">שגרה</MenuItem>
          <MenuItem value="leisure">פנאי</MenuItem>
          <MenuItem value="vacation">חופשה</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}