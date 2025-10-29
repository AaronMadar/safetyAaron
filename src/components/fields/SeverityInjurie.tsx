import React from "react";

export default function SeverityInjurie(): React.ReactElement {
    return (
        <section dir="ltr">
            <label htmlFor="severityinjury">The severity of injuries</label>
            <select id="severityinjury" name="severityinjury">
                <option value="">בחר</option>
                <option value="no_injury">ללא פגיעה</option>
                <option value="minor_no_hospital">פגוע קל (ללא אשפוז)</option>
                <option value="minor_hospitalized">פגוע קל (שאושפז)</option>
                <option value="moderate">פגוע בינוני</option>
                <option value="severe_critical">פגוע קשה/אנוש</option>
                <option value="fatal">חלל</option>
            </select>
        </section>
    );
}
