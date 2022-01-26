import * as React from "react";
// routes
import Router from "./routers/Routes";
// components
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
import GlobalStyles from "./theme/globalStyles";

import Box from "@mui/material/Box";

import { RecoilRoot } from "recoil";
import ThemeConfig from "theme";

export default function App() {
  return (
    <RecoilRoot>
      <ThemeConfig>
        <GlobalStyles />
        <BaseOptionChartStyle />
        <Box
          sx={{
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Router />
        </Box>
      </ThemeConfig>
    </RecoilRoot>
  );
}
