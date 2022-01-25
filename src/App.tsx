import * as React from "react";
// routes
import Router from "./routers/Routes";
// components
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
import GlobalStyles from "./theme/globalStyles";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { WbSunny, Brightness3 } from "@mui/icons-material";

import { RecoilRoot } from "recoil";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "right",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
        paddingRight: "400px",
        // position: "absolute",
        // right: 0,
        // top: 0,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1, position: "relative", border: "1px solid gray" }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness3 />
        ) : (
          <WbSunny style={{ color: "#ff9800" }} />
        )}
      </IconButton>
    </Box>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState<"light" | "dark">("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <RecoilRoot>
          <GlobalStyles />
          <BaseOptionChartStyle />
          <MyApp />
          <Box
            sx={{
              bgcolor: "background.default",
              color: "text.primary",
            }}
          >
            <Router />
          </Box>
        </RecoilRoot>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
