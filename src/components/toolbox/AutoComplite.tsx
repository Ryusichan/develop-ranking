import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Form, FormikProvider, useFormik } from "formik";
import { CurrentResultState } from "state";
import { useRecoilState } from "recoil";
import { Button } from "@mui/material";

import { useLocation, useNavigate } from "react-router-dom";

const filter = createFilterOptions<FilmOptionType>();

export default function FreeSoloCreateOption() {
  const [value, setValue] = useRecoilState(CurrentResultState);

  const currentValue = value ? value.title : "";
  // console.log("value", value ? value.title : "");
  const navigate = useNavigate();

  React.useEffect(() => {
    if (value) {
      navigate(`/result/${value.title}`);
    }
  }, [value]);

  const location = useLocation();

  const bindLocation = React.useMemo(() => {
    const resultLocation = location.pathname.split("/").pop();

    // if (resultLocation) {
    //   setValue((value) =>
    //     value && value.title === resultLocation
    //       ? { ...value, title: resultLocation }
    //       : value
    //   );
    // }

    return resultLocation;
  }, [location]);

  console.log("location", bindLocation, typeof bindLocation);

  React.useEffect(() => {
    if (location.pathname === "/") {
      setValue(null);
    }
  }, [location]);

  return (
    <Autocomplete
      // @ts-ignore
      value={value}
      onChange={(event, newValue: any) => {
        if (typeof newValue === "string") {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      // @ts-ignore
      filterOptions={(options, params: any) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.title
        );
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={chartRanking}
      getOptionLabel={(option: any) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      freeSolo
      renderInput={(params) => (
        <TextField
          {...params}
          label="Please enter the ranking you are curious about.
            "
        />
      )}
    />
  );
}

interface FilmOptionType {
  inputValue?: string;
  title: string;
  group?: string;
}

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
