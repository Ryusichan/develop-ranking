import React from "react";

// material
import { CardHeader, Box, Button, Stack } from "@mui/material";
//
import BarChart from "./ChartTool/BarChart";
import TrendLineChart from "./ChartTool/TrendLineChart";

// ----------------------------------------------------------------------

export default function MostPopDatabases() {
  const [current, setCurrent] = React.useState<Boolean>(true);

  const handleCurrentClick = () => {
    setCurrent(!current);
  };

  const currentDatabaseData = [
    {
      name: "Database",
      data: [
        50.1, 40.4, 32.1, 27.7, 26.8, 20.6, 17.1, 16.1, 13.2, 12.6, 7.3, 2.6,
        2.0, 1.5,
      ],
    },
  ];

  const currentDatabaseOptions = [
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "MongoDB",
    "Microsoft SQL Server",
    "Redis",
    "MariaDB",
    "Firebase",
    "Elasticsearch",
    "Oracle",
    "DynamoDB",
    "Cassandra",
    "IBM DB2",
    "Couchbase",
  ];

  const DatabaseData = [
    {
      name: "MySQL",
      type: "line",
      data: [49.6, 58.7, 54.0, 55.6, 50.1],
    },
    {
      name: "PostgreSQL",
      type: "line",
      data: [60.8, 32.9, 34.3, 36.1, 40.4],
    },
    {
      name: "SQLite",
      type: "line",
      data: [47.2, 19.7, 31.6, 31.2, 32.1],
    },
    {
      name: "MongoDB",
      type: "line",
      data: [55.0, 25.9, 25.5, 26.4, 27.7],
    },
    {
      name: "Microsoft SQL Server",
      type: "line",
      data: [54.2, 7.9, 32.8, 33.0, 26.8],
    },
    {
      name: "Redis",
      type: "line",
      data: [0, 18.0, 18.6, 18.3, 20.6],
    },
    {
      name: "MariaDB",
      type: "line",
      data: [0, 13.4, 16.5, 16.8, 17.1],
    },
    {
      name: "Firebase",
      type: "line",
      data: [0, 0, 12.8, 14.4, 16.1],
    },
    {
      name: "Elasticsearch",
      type: "line",
      data: [0, 14.1, 14.3, 13.8, 13.2],
    },
    {
      name: "Oracle",
      type: "line",
      data: [36.9, 11.1, 16.5, 16.5, 12.6],
    },
  ];

  const DatabaseOptions = ["2017", "2018", "2019", "2020", "2021"];

  return (
    <Box>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <CardHeader
          title={`${current ? "2021" : ""} Most popular Databases`}
          subheader="The most common databases are consistent between all respondents and professional developers. The only difference we observed is that professional developers are slightly more likely to use Microsoft SQL Server over MongoDB."
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
        {current ? (
          <BarChart
            data={currentDatabaseData}
            option={currentDatabaseOptions}
          />
        ) : (
          <TrendLineChart data={DatabaseData} option={DatabaseOptions} />
        )}
      </Box>
    </Box>
  );
}
