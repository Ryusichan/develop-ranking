// ----------------------------------------------------------------------

import { ExtendedTheme } from "..";

export default function TextField(theme: ExtendedTheme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        input: {
          // padding: "10px!important",
        },
      },
    },
  };
}
