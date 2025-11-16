import { DataForm } from '@/context/dataform-context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';


export default function UnityField() {

  const {handleValue} = useContext(DataForm)
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { width: '28ch' } }}
      noValidate
      autoComplete="off"
      
    >
      <TextField id="outlined-basic" label={<span dir='rtl' >שם יחידתך</span>} variant="outlined" onChange={(e)=>handleValue("unity",e.target.value)}/>
    </Box>
  );
} 

