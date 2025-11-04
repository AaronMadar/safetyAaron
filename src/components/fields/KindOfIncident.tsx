import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function KindOfIncident(): JSX.Element {
  const [kind, setKind] = useState('');

  return (
    <section>
      <FormControl fullWidth>
        <InputLabel id="kind-label">Kind of Incident</InputLabel>
        <Select
          labelId="kind-label"
          id="kind"
          value={kind}
          label="Kind of Incident"
          defaultValue="default"
          onChange={(e) => setKind(e.target.value)}
        >
          <MenuItem value="default">בחר</MenuItem>
          <MenuItem value="neshek">נשק ומקלעים</MenuItem>
          <MenuItem value="drakhim">דרכים</MenuItem>
          <MenuItem value="tahmoshet">תחמושת</MenuItem>
          <MenuItem value="yeri-dvats">ירי דו"צ</MenuItem>
          <MenuItem value="mezeg-avir">מזג-אוויר</MenuItem>
          <MenuItem value="rakam-tsameh">רק"מ וצמ"ה קרביים</MenuItem>
          <MenuItem value="shituf-avir">שת"פ אוויר</MenuItem>
          <MenuItem value="avoda">עבודה</MenuItem>
          <MenuItem value="avir">אוויר</MenuItem>
          <MenuItem value="betihut-yami">בטיחות ימי</MenuItem>
          <MenuItem value="sport-extrem">ספורט ואקסטרים</MenuItem>
          <MenuItem value="nefilot">נפילות/חבלות</MenuItem>
          <MenuItem value="harigot-yeri">חריגות ירי או תנועה של כוחות בשטחי אימונים</MenuItem>
          <MenuItem value="homs">חומ"ס</MenuItem>
          <MenuItem value="amalah">אמל"ח (לא נשק/מקלעים)</MenuItem>
          <MenuItem value="esh">אש</MenuItem>
          <MenuItem value="tagah-kravi">טג"ח קרבי</MenuItem>
          <MenuItem value="shituf-yam">שת"פ ים</MenuItem>
          <MenuItem value="yeoud-hilutz">ייעודי עורף/חילוץ והצלה</MenuItem>
          <MenuItem value="rom-karov">אמצעי רום קרוב לקרקע</MenuItem>
          <MenuItem value="kosher-gufani">כושר גופני/קרבי</MenuItem>
        </Select>
      </FormControl>
    </section>
  );
}