import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RowRadioButtonsGroup() {
  return (
    <FormControl>
      <FormLabel id="severity-incident">What is the Severity of the Incident ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="severity-incident"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Minor" control={<Radio />} label="Minor" />
        <FormControlLabel value="Moderate" control={<Radio />} label="Moderate" />
        <FormControlLabel value="Severe" control={<Radio />} label="Severe" />
        
      </RadioGroup>
    </FormControl>
  );
}

















// export default function SeverityIncident() {

//     return (
//         <section>
//             <label htmlFor="severity">Severity of the Incident</label>
//             <fieldset id="severity">
//                 <label htmlFor="minor">Minor</label>
//                 <input type="radio" name="severity" id="minor" />
//                 <label htmlFor="Moderate">Moderate</label>
//                 <input type="radio" name="severity" id="Moderate" />
//                 <label htmlFor="Severe">Severe</label>
//                 <input type="radio" name="severity" id="Severe" />
//             </fieldset>
//         </section>
//     )
// }