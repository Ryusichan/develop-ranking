// ----------------------------------------------------------------------

import { ExtendedTheme } from "..";

export default function Fab(theme: ExtendedTheme) {
  return {
    MuiFab: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
  };
}
