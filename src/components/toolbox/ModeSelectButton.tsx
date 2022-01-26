import * as React from "react";

import { useTheme } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import { Brightness3, WbSunny } from "@mui/icons-material";
import { useRecoilState } from "recoil";
import { ColorModeState } from "state";
import { ColorModeContext } from "theme";

function ModeSelectButton() {
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

export default ModeSelectButton;
