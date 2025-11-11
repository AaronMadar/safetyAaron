import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl dir="rtl">
      <FormLabel
        id="severity-incident"
        style={{ direction: "rtl", unicodeBidi: "bidi-override" }}
      >
        מהי חומרת האירוע?
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="severity-incident"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="קל" control={<Radio />} label="קל" />
        <FormControlLabel value="בינוני" control={<Radio />} label="בינוני" />
        <FormControlLabel value="חמור" control={<Radio />} label="חמור" />
      </RadioGroup>
    </FormControl>
  );
}
