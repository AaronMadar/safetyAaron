import type { JSX } from "react";

export default function Activity(): JSX.Element {

    return (
        <section>
        <label htmlFor="activity">Your activity</label>
        <select id="activity">
            <option value="default">בחר</option>
            <option value="">פעילות מבצעית/לחימה</option>
            <option value="">אימון</option>
            <option value="">הכשרה</option>
            <option value="">שגרה</option>
            <option value="">פנאי</option>
            <option value="">חופשה</option>
        </select>
        </section>
    )
}   