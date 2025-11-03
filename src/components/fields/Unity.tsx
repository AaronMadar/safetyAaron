import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function UnityField() {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="What is your unity ?" variant="outlined" />
        </Box>
  );
}


// export default function UnityField(){


//     return (
//         <>
//         <label htmlFor="unity">What is your unity ?</label>
//         <input type="text" id="unity"/>
//         </>
//     )

// }   
