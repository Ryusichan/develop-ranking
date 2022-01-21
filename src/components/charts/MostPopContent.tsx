import React from "react";

import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, Button, Stack } from "@mui/material";
//
import MostPopTech from "./mostPoptech/MostPopTech";
import MostPopCurrentTech from "./mostPoptech/MostPopCurrentTech";

// ----------------------------------------------------------------------

export default function MostPopContent() {
  const [current, setCurrent] = React.useState<Boolean>(false);

  const handleCurrentClick = () => {
    setCurrent(!current);
  };

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CardHeader
          title={`${current ? "2021" : ""} Most popular technologies`}
          subheader="Python passed SQL to become our third most popular technology, and Node.JS moves to the sixth most popular technology."
        />
        <Button
          variant={"outlined"}
          onClick={() => {
            handleCurrentClick();
          }}
        >
          {current ? "Trend" : "2021 technologies"}
        </Button>
      </Stack>
      <Box sx={{ p: 3, pb: 1 }} dir="ltr">
        {current ? <MostPopCurrentTech /> : <MostPopTech />}
      </Box>
    </Box>
  );
}
