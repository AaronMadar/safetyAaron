import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

export default function   DateField() {
  return (

    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}   >
        <DatePicker label={<span dir='rtl'>תאריך האירוע</span>} minDate={dayjs()}  sx={{textAlign:'right' , direction:'ltr'}  } />
      </DemoContainer>
    </LocalizationProvider>


  );
}
