import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    
    
      <TextField id="outlined-basic" label="Write the description" variant="outlined" multiline rows={4}/>
   
    
  );
}






// import type { JSX } from "react";

// export default function Description(): JSX.Element {    

//     return (
//         <>
//         <label htmlFor="">Write the description</label>
//         <input type="text" maxLength={800} />
//         </>
//     )
    
// }       