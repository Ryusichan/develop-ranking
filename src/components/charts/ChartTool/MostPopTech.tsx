import React from "react";

import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
//
import BaseOptionChart from "../BaseOptionChart";

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: "JavaScript",
    type: "line",
    data: [56, 58, 54, 55, 62, 69, 67, 67, 64],
  },
  {
    name: "HTML/CSS",
    type: "line",
    data: [null, null, null, null, null, 68, 63, 63, 56],
  },
  {
    name: "Python",
    type: "line",
    data: [21, 23, 23, 24, 32, 38, 41, 44, 48],
  },
  {
    name: "SQL",
    type: "line",
    data: [59, 57, 48, 49, 51, 57, 54, 54, 47],
  },
  {
    name: "Java",
    type: "line",
    data: [42, 37, 37, 36, 39, 45, 41, 40, 35],
  },
  {
    name: "Node.js",
    type: "line",
    data: [7, 9, 13, 17, 0, 0, 0, 0, 33],
  },
  {
    name: "TypeScript",
    type: "line",
    data: [null, null, null, null, 9, 17, 21, 25, 30],
  },
  {
    name: "C#",
    type: "line",
    data: [44, 37, 31, 30, 34, 34, 31, 31, 27],
  },
  {
    name: "Bash/Shell",
    type: "line",
    data: [null, null, null, null, null, 39, 36, 33, 27],
  },
  {
    name: "C++",
    type: "line",
    data: [27, 21, 20, 19, 22, 25, 23, 23, 24],
  },
];

export default function MostPopTech() {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2, curve: "straight" },

    // plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    // fill: { type: ["solid", "gradient", "solid"] },
    labels: [
      "2013",
      "2014",
      "2015",
      "2016",
      "2017",
      "2018",
      "2019",
      "2020",
      "2022",
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
    chart: {
      animations: {
        // easing: "easeinout",
        speed: 500,
        animateGradually: {
          enabled: false,
          // delay: 80,
        },
        dynamicAnimation: {
          // enabled: false,
          // enabled: true,
          // speed: 50,
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
