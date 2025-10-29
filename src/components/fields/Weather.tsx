import React from "react";

export default function Weather(): React.ReactElement {
    return (
        <section>
            <label htmlFor="weather">Weather</label>
            <select id="weather" name="weather">
                <option value="">בחר</option>
                <option value="heatwave">שרב/עומס חום</option>
                <option value="snow">שלג</option>
                <option value="sandstorm">סופת חול</option>
                <option value="rain">גשם</option>
                <option value="fog">ערפל</option>
                <option value="ice">התקרחות</option>
                <option value="hail">ברד</option>
                <option value="cloudy">מעונן</option>
                <option value="clear">נאה</option>
                <option value="windy">רוח</option>
                <option value="rough_sea">ים סוער</option>
                <option value="calm_sea">מים שקטים</option>
            </select>
        </section>
    );
}
