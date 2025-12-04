import { DataForm } from '@/context/DataformContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useContext } from 'react';


export default function UnityField() {

  const {handleValue, data} = useContext(DataForm)
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { width: '28ch' }  }}
      noValidate
      autoComplete="off"
      className='unity'
      
    >
      <TextField id="outlined-basic" label={<span dir='rtl' >שם יחידתך</span>} variant="outlined" value={data.unity} onChange={(e)=>handleValue("unity",e.target.value) } 
      />
    </Box>
  );
} 

