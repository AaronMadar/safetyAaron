import type { JSX } from "react";

export default function Place(): JSX.Element {

    return (
        <section>
            <label htmlFor="place">In Wich place it's happend</label>
            <fieldset id="place">
            <label htmlFor="base">Base</label>
            <input type="checkbox"  id="base" />
            <label htmlFor="public">Public place</label>
            <input type="checkbox"  id="public" />
            <label htmlFor="firearea">Fire area</label>              
            <input type="checkbox"  id="firearea" />
            <label htmlFor="platform">Logistic Platform</label>             
            <input type="checkbox"  id="platform" />
            </fieldset>
        </section>
    )
}