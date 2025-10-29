import type { JSX } from "react";

export default function Unitactivity(): JSX.Element {

    return (
        <>
        <label htmlFor="unitactivity">Unit Activity</label>
        <select id="unitactivity">
            <option value="default">בחר</option>
            <option value="taam">תע"ם</option>
            <option value="imounim">אימונים</option>
            <option value="ahchara">הכשרה</option>
            <option value="reguia">רגיעה / מנהלה</option>
            <option value="milhama">מלחמה/מבצע צבאי נרחב</option>
        </select>
        </>
    )   
}