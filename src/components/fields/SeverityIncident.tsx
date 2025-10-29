import type { JSX } from "react";

export default function SeverityIncident(): JSX.Element {

    return (
        <section>
            <label htmlFor="severity">Severity of the Incident</label>
            <fieldset id="severity">
                <label htmlFor="minor">Minor</label>
                <input type="radio" name="severity" id="minor" />
                <label htmlFor="Moderate">Moderate</label>
                <input type="radio" name="severity" id="Moderate" />
                <label htmlFor="Severe">Severe</label>
                <input type="radio" name="severity" id="Severe" />
            </fieldset>
        </section>
    )
}