import { useState, type ChangeEvent } from "react";
import SeverityInjurie from "./SeverityInjurie";

export default function Damage() {

  const [injuries, setInjuries] = useState<boolean>(false);

  function handleSelection(e: ChangeEvent<HTMLSelectElement>) {
    const val = e.target.value;
    if (val == "01" || val == "11"){
        setInjuries(true)
    }
    else {
        setInjuries(false)
    }
  }


  return (
  <section dir="ltr" data-injuries={String(injuries)}>
      <label htmlFor="Damage">Damage Result</label>
  <select id="Damage" onChange={handleSelection}>
        <option value="">בחר</option>
        <option value="00">אין נפגעים, אין נזק</option>
        <option value="10">אין נפגעים, יש נזק</option>
        <option value="01">יש נפגעים, אין נזק</option>
        <option value="11">יש נפגעים, יש נזק</option>
      </select>
        {injuries && <SeverityInjurie />}
    </section>
  );
}
