import React, { useEffect } from "react";

// material
import { CardHeader, Box, Button, Stack, Typography } from "@mui/material";
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
  responses,
}: DataType) {
  const [trend, settrend] = React.useState<Boolean>(true);

  // if (trendData === undefined) {
  //   settrend(false);
  // }

  console.log("trendData", trendData);

  const handletrendClick = () => {
    settrend(!trend);
  };
  const response = responses.toLocaleString();

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CardHeader
          title={`${trend ? "2022" : ""} ${title}`}
          subheader={subHeader}
        />
        <Button
          variant={"outlined"}
          onClick={() => {
            handletrendClick();
          }}
        >
          {trend ? "Trend" : "2022 technologies"}
        </Button>
      </Stack>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        {trend ? (
          <BarChart data={currentData} option={currentOptions} />
        ) : (
          <TrendLineChart data={trendData} option={trendOptions} />
        )}
      </Box>
      <Stack>
        <Typography variant="body2" sx={{ textAlign: "center", mb: 4 }} >
          * The data is based on the survey of {response} developers from over 170
          countries, conducted by Stack Overflow in January 2022.
        </Typography>
      </Stack>
    </Box>
  );
}
