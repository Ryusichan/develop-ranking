import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const chartRanking = [
  { title: "Most popular technologies", group: "most popolar" },
  { title: "Most popular Databases", group: "most popolar" },
  { title: "Cloud platforms", group: "most popolar" },
  { title: "Web frameworks", group: "most popolar" },
  { title: "Other frameworks and libraries", group: "most popolar" },
  { title: "Other tools", group: "most popolar" },
  { title: "Integrated development environment", group: "most popolar" },
  { title: "Operating system", group: "most popolar" },
];

const AutoComplite = () => {
  return (
    <Autocomplete
      freeSolo
      id="free-solo-2-demo"
      disableClearable
      color="primary"
      options={chartRanking.map((option) => option.title)}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search input"
          InputProps={{
            ...params.InputProps,
            type: "search",
          }}
        />
      )}
    />
  );
};

export default AutoComplite;
