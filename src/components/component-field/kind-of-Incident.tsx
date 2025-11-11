import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function KindOfIncident() {
  const [kind, setKind] = useState('ברירת מחדל');

  return (
    <section dir="rtl">
      <FormControl fullWidth>
        <InputLabel
          id="kind-label"

        >
          סוג האירוע
        </InputLabel>
        <Select
          labelId="kind-label"
          id="kind"
          value={kind}
          label='סוג האירוע'
          defaultValue={kind}
          onChange={(e) => setKind(e.target.value)}
        >
          <MenuItem value="ברירת מחדל" disabled>בחר</MenuItem>
          <MenuItem value="נשק ומקלעים">נשק ומקלעים</MenuItem>
          <MenuItem value="דרכים">דרכים</MenuItem>
          <MenuItem value="תחמושת">תחמושת</MenuItem>
          <MenuItem value='ירי דו"צ'>ירי דו"צ</MenuItem>
          <MenuItem value="מזג אוויר">מזג אוויר</MenuItem>
          <MenuItem value='רק"מ וצמ"ה קרביים'>רק"מ וצמ"ה קרביים</MenuItem>
          <MenuItem value='שת"פ אוויר'>שת"פ אוויר</MenuItem>
          <MenuItem value="עבודה">עבודה</MenuItem>
          <MenuItem value="אוויר">אוויר</MenuItem>
          <MenuItem value="בטיחות ימי">בטיחות ימי</MenuItem>
          <MenuItem value="ספורט ואקסטרים">ספורט ואקסטרים</MenuItem>
          <MenuItem value="נפילות / חבלות">נפילות / חבלות</MenuItem>
          <MenuItem value="חריגות ירי או תנועה של כוחות בשטחי אימונים">
            חריגות ירי או תנועה של כוחות בשטחי אימונים
          </MenuItem>
          <MenuItem value='חומ"ס'>חומ"ס</MenuItem>
          <MenuItem value='אמל"ח (לא נשק/מקלעים)'>
            אמל"ח (לא נשק/מקלעים)
          </MenuItem>
          <MenuItem value="אש">אש</MenuItem>
          <MenuItem value='טג"ח קרבי'>טג"ח קרבי</MenuItem>
          <MenuItem value='שת"פ ים'>שת"פ ים</MenuItem>
          <MenuItem value="ייעודי עורף / חילוץ והצלה">
            ייעודי עורף / חילוץ והצלה
          </MenuItem>
          <MenuItem value="אמצעי רום קרוב לקרקע">אמצעי רום קרוב לקרקע</MenuItem>
          <MenuItem value="כושר גופני / קרבי">כושר גופני / קרבי</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}
