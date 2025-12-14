// src/components/form/GenericSelect.jsx (ou .tsx mais sans les types)

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { useContext } from "react";
import { DataForm } from "@/context/DataformContext";

export default function GenericSelect({ label, field, options}) {
  const { data, handleValue } = useContext(DataForm);

  return (
    <FormControl fullWidth sx={{ mb: 2 }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={data[field] || ""}                    // affiche la valeur actuelle
        label={label}
        onChange={(e) => handleValue(field, e.target.value)}  // met à jour le contexte
        required
      >
        <MenuItem value="" disabled>
          בחר
        </MenuItem>

        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}