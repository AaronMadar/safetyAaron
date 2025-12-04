import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { DataForm } from '@/context/DataformContext';

export default function DateField() {

  const { handleValue, data } = useContext(DataForm)
  return (

    <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer components={['DatePicker']}   >
        <DatePicker
          label={<span dir='rtl'>תאריך האירוע</span>}
          minDate={dayjs()}
          value={data.date ? dayjs(data.date) : null}
          sx={{ textAlign: 'right', direction: 'ltr' }}
          onChange={(value) => { handleValue('date', value ? value.toISOString() : ""); }} />
      </DemoContainer>
    </LocalizationProvider>


  );
}
