import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Place() {
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedPlaces([...selectedPlaces, name]);
    } else {
      setSelectedPlaces(selectedPlaces.filter((place) => place !== name));
    }
  };

  return (
    <section dir="rtl">
      <FormControl component="fieldset">
        <FormLabel
          component="legend"
          style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
        >
          באיזה מקום זה קרה?
        </FormLabel>
        <FormGroup sx={{ display: 'flex', flexDirection: { xs: "column", sm: "row" } }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPlaces.includes('בסיס')}
                onChange={handleChange}
                name="בסיס"
              />
            }
            label="בסיס"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPlaces.includes('מקום ציבורי')}
                onChange={handleChange}
                name="מקום ציבורי"
              />
            }
            label="מקום ציבורי"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPlaces.includes('שטח אש')}
                onChange={handleChange}
                name="שטח אש"
              />
            }
            label="שטח אש"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedPlaces.includes('פלטפורמה לוגיסטית')}
                onChange={handleChange}
                name="פלטפורמה לוגיסטית"
              />
            }
            label="פלטפורמה לוגיסטית"
          />
        </FormGroup>
      </FormControl>
    </section>
  );
}
