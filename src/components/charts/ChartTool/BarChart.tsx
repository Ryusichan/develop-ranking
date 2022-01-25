import React from "react";

import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
import { Card, CardHeader, Box, Button, Stack } from "@mui/material";
//
import BaseOptionChart from "../BaseOptionChart";

// ----------------------------------------------------------------------

interface Props {
  data: Array<any>;
  option: Array<string>;
}

const CHART_DATA = [
  {
    name: "technologies",
    data: [64, 56, 48, 47, 35, 33, 30, 27, 27, 24],
  },
];

export default function BarChart({ data, option }: Props) {
  const heightValue = option.length * 40;

  const chartOptions = merge(BaseOptionChart(), {
    chart: {
      type: "bar",
      // height: 250,
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
      categories: option,
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
      series={data}
      /* @ts-ignore */
      options={chartOptions}
      height={heightValue}
    />
  );
}
