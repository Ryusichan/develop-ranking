// ----------------------------------------------------------------------

import { ExtendedTheme } from "..";

export default function Autocomplete(theme: ExtendedTheme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  };
}
