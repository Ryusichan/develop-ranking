import React from "react";

import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, Button, Stack } from "@mui/material";
//
import BaseOptionChart from "../BaseOptionChart";

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: "technologies",
    data: [64, 56, 48, 47, 35, 33, 30, 27, 27, 24],
  },
];

export default function MostPopCurrentTech() {
  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return val + "%";
      },
    },
    xaxis: {
      categories: [
        "JavaScript",
        "HTML/CSS",
        "Python",
        "SQL",
        "Java",
        "Node.js",
        "TypeScript",
        "C#",
        "Bash/Shell",
        "C++",
      ],
    },
    colors: [
      "#F44336",
      "#E91E63",
      "#9C27B0",
      "#673AB7",
      "#3F51B5",
      "#2196F3",
      "#00BCD4",
      "#4CAF50",
      "#FFEB3B",
      "#FF9800",
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y: any) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} %`;
          }
          return y;
        },
      },
    },
  });

  return (
    <ReactApexChart
      type="bar"
      series={CHART_DATA}
      /* @ts-ignore */
      options={chartOptions}
      height={380}
    />
  );
}
