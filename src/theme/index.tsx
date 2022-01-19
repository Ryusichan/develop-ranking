// material

import { CssBaseline, ThemeOptions } from "@mui/material";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
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
  const themeOptions = useMemo<ExtendedTheme>(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows,
      breakpoints,
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
