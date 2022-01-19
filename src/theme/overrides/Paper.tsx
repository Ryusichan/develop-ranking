// ----------------------------------------------------------------------

import { ExtendedTheme } from "..";

export default function Paper(theme: ExtendedTheme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  };
}
