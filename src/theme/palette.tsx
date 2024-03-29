import React from "react";
import { alpha, PaletteOptions } from "@mui/material/styles";

// ----------------------------------------------------------------------

interface Grey {
  0: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  500_8: string;
  500_12: string;
  500_16: string;
  500_24: string;
  500_32: string;
  500_48: string;
  500_56: string;
  500_80: string;
}

interface Color {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

function createGradient(color1: string, color2: string) {
  return `linear-gradient(to bottom, ${color1}, ${color2})`;
}

// SETUP COLORS
const GREY: Grey = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
  500_8: alpha("#919EAB", 0.08),
  500_12: alpha("#919EAB", 0.12),
  500_16: alpha("#919EAB", 0.16),
  500_24: alpha("#919EAB", 0.24),
  500_32: alpha("#919EAB", 0.32),
  500_48: alpha("#919EAB", 0.48),
  500_56: alpha("#919EAB", 0.56),
  500_80: alpha("#919EAB", 0.8),
};

const PRIMARY: Color = {
  lighter: "#e3f2fd",
  light: "#90caf9",
  main: "#2196f3",
  dark: "#1e88e5",
  darker: "#1565c0",
  contrastText: "#fff",
};

const D_PRIMARY: Color = {
  light: "#b3e5fc",
  lighter: "#e1f5fe",
  main: "#42a5f5",
  dark: "#1976d2",
  darker: "#1565c0",
  contrastText: "#fff",
};

const SECONDARY: Color = {
  lighter: "#D6E4FF",
  light: "#84A9FF",
  main: "#3366FF",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};
const INFO: Color = {
  lighter: GREY[300],
  light: GREY[500],
  main: GREY[700],
  dark: GREY[800],
  darker: GREY[900],
  contrastText: "#fff",
};
const SUCCESS: Color = {
  lighter: "#e3f2fd",
  light: "#90caf9",
  main: "#2196f3",
  dark: "#1e88e5",
  darker: "#1565c0",
  contrastText: "#fff",
};
const WARNING: Color = {
  lighter: "#f6b681",
  light: "#f2984e  ",
  main: "#ed6c02",
  dark: "#be5602",
  darker: "#8e4101",
  contrastText: GREY[800],
};
const ERROR: Color = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#d32f2f",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const GRADIENTS = {
  primary: createGradient(PRIMARY.light, PRIMARY.main),
  info: createGradient(INFO.light, INFO.main),
  success: createGradient(SUCCESS.light, SUCCESS.main),
  warning: createGradient(WARNING.light, WARNING.main),
  error: createGradient(ERROR.light, ERROR.main),
};

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

export interface ExtendedPalette extends PaletteOptions {
  common: {
    black: string;
    white: string;
  };
  primary: Color;
  secondary: Color;
  info: Color;
  success: Color;
  warning: Color;
  error?: Color;
  grey: Grey;
  gradients: {
    primary: string;
    info: string;
    success: string;
    warning: string;
    error: string;
  };
  chart: any;
  divider: any;
  text: any;
  background: { paper: string; default: string; neutral: string };
  action: any;
}

function useDarkMode() {
  // const theme = useRecoilValue(colorModeState)
  // const theme = useTheme()
  const [theme, setTheme] = React.useState("dark");

  if (theme === "dark") {
    return true;
  }
  return [theme, setTheme];
}

export const palette: ExtendedPalette = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: {
    // primary: getDarkMode ? GREY[0] : GREY[800],
    primary: GREY[700],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    // paper: DarkMode() ? '#121212' : '#fff',
    // default: DarkMode() ? '#121212' : '#fff',
    paper: "#fff",
    default: "#fff",
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export const darkPalette: ExtendedPalette = {
  common: { black: "#000", white: "#fff" },
  primary: { ...D_PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  // error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: {
    primary: GREY[0],
    secondary: GREY[400],
    disabled: GREY[500],
  },
  background: {
    paper: "#121212",
    default: "#121212",
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export default palette;
