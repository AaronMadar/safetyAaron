  import { useContext } from 'react';
  import FormControl from '@mui/material/FormControl';
  import FormLabel from '@mui/material/FormLabel';
  import FormGroup from '@mui/material/FormGroup';
  import FormControlLabel from '@mui/material/FormControlLabel';
  import Checkbox from '@mui/material/Checkbox';
  import { DataForm } from '@/context/dataform-context';

  export default function Place() {
    const { data, handleValue } = useContext(DataForm);
    const selectedPlaces = Array.isArray(data.place) ? data.place : [];

    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    let updatedPlaces: string[];

    if (checked) {
      updatedPlaces = [...selectedPlaces, name];
    } else {
      updatedPlaces = selectedPlaces.filter((place) => place !== name);
    }

    handleValue("place", updatedPlaces);
    
    
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
                  value="בסיס"
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
                  value="מקום ציבורי"
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
                  value="שטח אש"
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
                  value="פלטפורמה לוגיסטית"
                />
              }
              label="פלטפורמה לוגיסטית"
            />
          </FormGroup>
        </FormControl>
      </section>
    );
  }
