import React, { useEffect } from "react";

// material
import { CardHeader, Box, Button, Stack } from "@mui/material";
//
import BarChart from "./ChartTool/BarChart";
import TrendLineChart from "./ChartTool/TrendLineChart";
import { DataType } from "components/ResultContainer";

// ----------------------------------------------------------------------

export default function RankingBox({
  currentData,
  currentOptions,
  title,
  subHeader,
  trendData,
  trendOptions,
}: DataType) {
  const [trend, settrend] = React.useState<Boolean>(true);

  // if (trendData === undefined) {
  //   settrend(false);
  // }

  console.log("trendData", trendData);

  const handletrendClick = () => {
    settrend(!trend);
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CardHeader
          title={`${trend ? "2021" : ""} ${title}`}
          subheader={subHeader}
        />
        <Button
          variant={"outlined"}
          onClick={() => {
            handletrendClick();
          }}
        >
          {trend ? "Trend" : "2021 technologies"}
        </Button>
      </Stack>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        {trend ? (
          <BarChart data={currentData} option={currentOptions} />
        ) : (
          <TrendLineChart data={trendData} option={trendOptions} />
        )}
      </Box>
    </Box>
  );
}
