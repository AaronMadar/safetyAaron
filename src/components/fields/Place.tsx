import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Place(){
  const [selectedPlaces, setSelectedPlaces] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      setSelectedPlaces([...selectedPlaces, name]); // Ajoute le lieu
    } else {
      setSelectedPlaces(selectedPlaces.filter((place) => place !== name)); // Retire le lieu
    }
  };

  return (
    <section>
      <FormControl component="fieldset">
        <FormLabel component="legend">In which place it happened ?</FormLabel>
        <FormGroup sx={{display:'flex', flexDirection:{xs:"column", sm:"row"} }}>
          <FormControlLabel
            control={<Checkbox checked={selectedPlaces.includes('base')} onChange={handleChange} name="base" />}
            label="Base"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedPlaces.includes('public')} onChange={handleChange} name="public" />}
            label="Public place"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedPlaces.includes('firearea')} onChange={handleChange} name="firearea" />}
            label="Fire area"
          />
          <FormControlLabel
            control={<Checkbox checked={selectedPlaces.includes('platform')} onChange={handleChange} name="platform" />}
            label="Logistic Platform"
          />
        </FormGroup>
      </FormControl>
    </section>
  );
}