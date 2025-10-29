import type { JSX } from "react";

export default function Description(): JSX.Element {    

    return (
        <>
        <label htmlFor="">Write the description</label>
        <input type="text" maxLength={800} />
        </>
    )
    
}       