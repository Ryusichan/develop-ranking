import React from "react";
// material

import { CssBaseline, ThemeOptions, useMediaQuery } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Shadows } from "@mui/material/styles/shadows";
// import PropTypes from "prop-types";
import { useMemo } from "react";
import breakpoints, { Breakpoints } from "./breakpoints";
import componentsOverride from "./overrides";
import palette, { ExtendedPalette } from "./palette";
import shadows, { CustomShadows, customShadows } from "./shadows";
//
import shape, { Shape } from "./shape";
import typography from "./typography";
import { ColorModeContext } from "components/toolbox/ToggleModeSelect";

// ----------------------------------------------------------------------

export interface ExtendedTheme extends ThemeOptions {
  palette: ExtendedPalette;
  shape: Shape;
  typography: TypographyOptions;
  shadows: Shadows;
  customShadows: CustomShadows;
  breakpoints: Breakpoints;
}
interface Props {
  children: React.ReactNode;
}

export default function ThemeConfig({ children }: Props) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  console.log("mode change???", mode);

  const themeLog = useTheme();

  console.log("themeLog", themeLog.palette.mode);

  // const prefersDarkMode: boolean = useMediaQuery(
  //   "(prefers-color-scheme: dark)"
  // );

  const themeOptions = useMemo<ExtendedTheme>(
    () => ({
      palette: {
        ...palette,
        mode,
      },
      shape,
      typography,
      shadows,
      customShadows,
      breakpoints,
    }),
    [mode]
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  );
}
