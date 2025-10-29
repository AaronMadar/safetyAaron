import type { JSX } from "react";

export default function KindOfIncident(): JSX.Element {

    return (
        <section>
        <label htmlFor="kind">Kind of Incident</label>
       <select id="kind">
            <option value="">בחר</option>
            <option value="neshek">נשק ומקלעים</option>
            <option value="drakhim">דרכים</option>
            <option value="tahmoshet">תחמושת</option>
            <option value="yeri-dvats">ירי דו"צ</option>
            <option value="mezeg-avir">מזג-אוויר</option>
            <option value="rakam-tsameh">רק"מ וצמ"ה קרביים</option>
            <option value="shituf-avir">שת"פ אוויר</option>
            <option value="avoda">עבודה</option>
            <option value="avir">אוויר</option>
            <option value="betihut-yami">בטיחות ימי</option>
            <option value="sport-extrem">ספורט ואקסטרים</option>
            <option value="nefilot">נפילות/חבלות</option>
            <option value="harigot-yeri">חריגות ירי או תנועה של כוחות בשטחי אימונים</option>
            <option value="homs">חומ"ס</option>
            <option value="amalah">אמל"ח (לא נשק/מקלעים)</option>
            <option value="esh">אש</option>
            <option value="tagah-kravi">טג"ח קרבי</option>
            <option value="shituf-yam">שת"פ ים</option>
            <option value="yeoud-hilutz">ייעודי עורף/חילוץ והצלה</option>
            <option value="rom-karov">אמצעי רום קרוב לקרקע</option>
            <option value="kosher-gufani">כושר גופני/קרבי</option>
        </select>

        </section>
    )
}