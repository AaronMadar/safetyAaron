import { DataForm } from '@/context/DataformContext';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';

export default function BasicTextFields() {

  const { handleValue, data } = useContext(DataForm)

  return (

    <TextField id="outlined-basic" label="כתוב את התיאור" variant="outlined" multiline rows={3} value={data.description} onChange={(e) => handleValue('description', e.target.value)} />


  );
}






