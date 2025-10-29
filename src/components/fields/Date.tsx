import type { JSX } from "react"

export default function DateField(): JSX.Element {

    const today = new Date().toISOString().split("T")[0]

return (
        <>
        <label htmlFor="date">When it's happened ? </label>
        <input type="date" min={today} />
        </>

)

}