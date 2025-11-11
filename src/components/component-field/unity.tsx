import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function UnityField() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={<span dir='rtl' >שם יחידתך</span>} variant="outlined" />
    </Box>
  );
} 

