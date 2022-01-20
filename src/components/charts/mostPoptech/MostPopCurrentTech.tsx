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
    name: "JavaScript",
    type: "column",
    data: [56, 58, 54, 55, 62, 69, 67, 67, 64],
  },
  {
    name: "HTML/CSS",
    type: "column",
    data: [0, 0, 0, 0, 0, 68, 63, 63, 56],
  },
  {
    name: "Python",
    type: "column",
    data: [21, 23, 23, 24, 32, 38, 41, 44, 48],
  },
  {
    name: "SQL",
    type: "column",
    data: [59, 57, 48, 49, 51, 57, 54, 54, 47],
  },
  {
    name: "Java",
    type: "column",
    data: [42, 37, 37, 36, 39, 45, 41, 40, 35],
  },
  {
    name: "Node.js",
    type: "column",
    data: [7, 9, 13, 17, 0, 0, 0, 0, 33],
  },
  {
    name: "TypeScript",
    type: "column",
    data: [4, 4, 4, 4, 9, 17, 21, 25, 30],
  },
  {
    name: "C#",
    type: "column",
    data: [44, 37, 31, 30, 34, 34, 31, 31, 27],
  },
  {
    name: "Bash/Shell",
    type: "column",
    data: [0, 0, 0, 0, 0, 39, 36, 33, 27],
  },
  {
    name: "C++",
    type: "column",
    data: [27, 21, 20, 19, 22, 25, 23, 23, 24],
  },
];

export default function MostPopCurrentTech() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 1 },

    // plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    // fill: { type: ["solid", "gradient", "solid"] },
    labels: [
      0, 20, 40, 60, 80, 100,
      // "2019",
      // "2020",
      // "2021",
    ],
    xaxis: {
      type: "datetime",
      labels: { format: "yyyy" },
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
      type="line"
      series={CHART_DATA}
      /* @ts-ignore */
      options={chartOptions}
      height={380}
    />
  );
}
