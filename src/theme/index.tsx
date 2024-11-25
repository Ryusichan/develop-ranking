import React from "react";

// material
import { CssBaseline, ThemeOptions, useMediaQuery } from "@mui/material";
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
import palette, { darkPalette, ExtendedPalette } from "./palette";
import shadows, { CustomShadows, customShadows } from "./shadows";
//
import shape, { Shape } from "./shape";
import typography from "./typography";
import { useRecoilState } from "recoil";
import { ColorModeState } from "state";

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

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ThemeConfig({ children }: Props) {
  const [mode, setMode] = useRecoilState(ColorModeState);

  const isDarkMode: boolean = mode === "dark";

  const themeOptions = useMemo<ExtendedTheme>(
    () => ({
      palette: {
        ...(isDarkMode ? darkPalette : palette),
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

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // const theme = React.useMemo(
  //   () =>
  //     createTheme({
  //       palette: {
  //         mode,
  //       },
  //     }),
  //   [mode]
  // );

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
