import * as React from "react";

import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import { WbSunny, Brightness3 } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
// import { RootState } from "store/store";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleModeSelect() {
  // const colorThemeMode = useSelector((state: any) => state.toggles.isDarkMode);

  // console.log("colorThemeMode", colorThemeMode);

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 1,
        p: 3,
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1, position: "relative", border: "1px solid gray" }}
        onClick={colorMode.toggleColorMode}
        // color="inherit"
      >
        {/* {theme.palette.mode === "dark" ? <WbSunny /> : <Brightness3 />} */}
        <span
          style={{
            position: "absolute",
            left: `${theme.palette.mode === "dark" ? "0px" : "45px"}`,
            backgroundColor: "#000",
          }}
        />
        <WbSunny />
        <Brightness3 />
      </IconButton>
      <Button>Drak?????</Button>
    </Box>
  );
}
