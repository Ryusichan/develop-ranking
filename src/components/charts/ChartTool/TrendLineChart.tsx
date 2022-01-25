import React from "react";

import { merge } from "lodash";
import ReactApexChart from "react-apexcharts";
// material
//
import BaseOptionChart from "../BaseOptionChart";

// ----------------------------------------------------------------------

interface Props {
  data: Array<any>;
  option: Array<string>;
}

export default function TrendLineChart({ data, option }: Props) {
  const chartOptions = merge(BaseOptionChart(), {
    stroke: { width: 2, curve: "straight" },

    // plotOptions: { bar: { columnWidth: "11%", borderRadius: 4 } },
    // fill: { type: ["solid", "gradient", "solid"] },
    labels: option,
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
      series={data}
      /* @ts-ignore */
      options={chartOptions}
      height={420}
    />
  );
}
