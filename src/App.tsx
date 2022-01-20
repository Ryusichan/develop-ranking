import * as React from "react";
// routes
import Router from "./routers/Routes";
// components
// import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";

// import IconButton from "@mui/material/IconButton";
// import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
// import { WbSunny, Brightness3 } from "@mui/icons-material";
// import { ColorModeContext } from "components/toolbox/ToggleModeSelect";
import ThemeConfig from "theme";

export default function App() {
  // const theme = useTheme();

  // const [colorMode, setColorMode] = React.useState(
  //   theme.palette.mode === "dark" ? "light" : "dark"
  // );

  // React.useEffect(() => {
  //   setColorMode(theme.palette.mode);
  //   console.log("theme", theme.palette.mode);
  // }, [theme]);

  return (
    // <ColorModeContext.Provider value={colorMode}>
    <ThemeConfig>
      {/* <ThemeProvider theme={theme}> */}
      {/* <BaseOptionChartStyle /> */}
      {/* <MyApp /> */}
      <div
        style={
          {
            // backgroundColor: `${colorMode === "dark" ? "#121212" : "#fff"}`,
          }
        }
      >
        <Router />
      </div>
      {/* </ThemeProvider> */}
    </ThemeConfig>
    // </ColorModeContext.Provider>
  );
}
