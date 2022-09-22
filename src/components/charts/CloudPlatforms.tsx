import React from "react";

// material
import { CardHeader, Box, Button, Stack } from "@mui/material";
//
import BarChart from "./ChartTool/BarChart";
import TrendLineChart from "./ChartTool/TrendLineChart";

// ----------------------------------------------------------------------

export default function CloudPlatforms() {
  const currentTechData = [
    {
      name: "CloudPlatForms",
      data: [54.2, 31.0, 20.7, 24.0, 17.6, 2.5, 1.8],
    },
  ];

  const currentTechOptions = [
    "AWS",
    "Google Cloud Platform",
    "Microsoft Azure",
    "Heroku",
    "DigitalOcean",
    "IBM Cloud or Watson",
    "Oracle Cloud Infrastructure",
  ];

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CardHeader
          title={"2022 Cloud platforms"}
          subheader="AWS maintains its lead as the most widely used cloud platform, but Google Cloud and Microsoft Azure made substantial gains from last year. It is worth noting that this is the first year that we broke out cloud platforms from our general platforms question."
        />
      </Stack>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        <BarChart data={currentTechData} option={currentTechOptions} />
      </Box>
    </Box>
  );
}
