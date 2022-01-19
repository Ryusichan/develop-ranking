import React from "react";

// routes
import Router from "./routers/Routes";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
// components
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router />
    </ThemeConfig>
  );
}

export default App;
