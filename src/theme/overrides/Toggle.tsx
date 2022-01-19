// ----------------------------------------------------------------------

import { ExtendedTheme } from "..";

export default function Toggle(theme: ExtendedTheme) {
  return {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          color: "#000",
        },
      },
    },
  };
}
