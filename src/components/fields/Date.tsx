import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function BasicDatePicker() {
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="When it's happened ?" minDate={dayjs()} />
      </DemoContainer>
    </LocalizationProvider>
  );
}

    











// import type { JSX } from "react"
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// export default function DateField(): JSX.Element {

//     const today = new Date().toISOString().split("T")[0]

//     return (
//         <>
//             <label htmlFor="date">When it's happened ? </label>
//             <DatePicker label="When it's happened ?" />
//             {/* <input type="date" min={today} /> */}
//         </>

//     )

// }