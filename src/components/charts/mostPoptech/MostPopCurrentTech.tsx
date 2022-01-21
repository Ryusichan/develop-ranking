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
    name: "2021 ",
    type: "column",
    data: [64, 56, 48, 47, 35, 33, 30, 27, 27, 24],
  },
  // {
  //   name: "HTML/CSS",
  //   type: "column",
  //   data: 56,
  // },
  // {
  //   name: "Python",
  //   type: "column",
  //   data: 48,
  // },
  // {
  //   name: "SQL",
  //   type: "column",
  //   data: 47,
  // },
  // {
  //   name: "Java",
  //   type: "column",
  //   data: 35,
  // },
  // {
  //   name: "Node.js",
  //   type: "column",
  //   data: 33,
  // },
  // {
  //   name: "TypeScript",
  //   type: "column",
  //   data: 30,
  // },
  // {
  //   name: "C#",
  //   type: "column",
  //   data: 27,
  // },
  // {
  //   name: "Bash/Shell",
  //   type: "column",
  //   data: 27,
  // },
  // {
  //   name: "C++",
  //   type: "column",
  //   data: 24,
  // },
];

export default function MostPopCurrentTech() {
  const chartOptions = merge(BaseOptionChart(), {
    // chart: {
    //   type: "bar",
    //   height: "auto",
    //   stacked: true,
    // },
    // plotOptions: {
    //   bar: {
    //     horizontal: true,
    //     endingShape: "rounded",
    //   },
    // },
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
      // type: "datetime",
      // labels: { format: "yyyy" },
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
      type="line"
      series={CHART_DATA}
      /* @ts-ignore */
      options={chartOptions}
      height={380}
    />
  );
}
