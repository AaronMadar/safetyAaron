import { DataForm } from '@/context/dataform-context';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';

export default function BasicTextFields() {

  const { handleValue } = useContext(DataForm)

  return (

    <TextField id="outlined-basic" label="כתוב את התיאור" variant="outlined" multiline rows={3} onChange={(e)=> handleValue('description', e.target.value)} />


  );
} 






