import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useContext } from 'react';
import { DataForm } from '@/context/dataform-context';

export default function RowRadioButtonsGroup() {

  const {handleValue, data} = useContext(DataForm)
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
        value={data.severityIncident || ""}
        onChange={(_e: React.ChangeEvent<HTMLInputElement>, value: string) =>
          handleValue('severityIncident', value)
        }
      >
        <FormControlLabel value="קל" control={<Radio />} label="קל" />
        <FormControlLabel value="בינוני" control={<Radio />} label="בינוני" />
        <FormControlLabel value="חמור" control={<Radio />} label="חמור" />
      </RadioGroup>
    </FormControl>
  );
}
