import React, { useEffect, useState } from "react";

// material
import {
  CardHeader,
  Box,
  Button,
  Stack,
  Typography,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";
//
import BarChart from "./ChartTool/BarChart";
import TrendLineChart from "./ChartTool/TrendLineChart";
import { DataType } from "components/ResultContainer";

// ----------------------------------------------------------------------

export default function RankingBox({
  currentData,
  title,
  subHeader,
  trendData,
  trendOptions,
  responses,
}: DataType) {
  const [trend, settrend] = React.useState<Boolean>(true);

  const [selectedDay, setSelectedDay] = useState<string>("2024");
  const [currentTechOptions, setCurrentTechOptions] = useState<any>([]);
  const [currentTechData, setCurrentTechData] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(true);

  const handleDayChange = (event: any) => {
    const value = event.target.value;
    setSelectedDay(value);

    // 선택된 날짜에 해당하는 데이터 필터링
    const filteredData = currentData.find((item) => item.day === value);

    if (filteredData) {
      const techData = [
        {
          name: "technologies",
          data: filteredData.data.map((d: any) => d.per), // percentages만 추출
        },
      ];

      const techName = filteredData.data.map((d: any) => d.name);
      setCurrentTechData([techData]); // 배열로 설정
      setCurrentTechOptions(techName);
    } else {
      setCurrentTechData(null);
    }
  };

  console.log("currentTechOptions", currentTechOptions);

  useEffect(() => {
    setLoading(true);
    const fetchData = async (day: string) => {
      setCurrentTechData([]); // 기존 데이터 초기화
      setCurrentTechOptions([]); // 기존 데이터 초기화

      await new Promise((resolve) => setTimeout(resolve, 1000)); // 비동기 작업 시뮬레이션

      const filteredData = currentData.find((item) => item.day === selectedDay);

      if (filteredData) {
        const techData = {
          name: "technologies",
          data: filteredData.data.map((d: any) => d.per),
        };

        const techName = filteredData.data.map((d: any) => d.name);
        setCurrentTechData([techData]); // 배열로 설정
        setCurrentTechOptions(techName);
      }

      setLoading(false); // 로딩 종료
    };

    fetchData(selectedDay);
  }, [selectedDay, currentData]);

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
        sx={{
          marginTop: "1rem",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          {trend && (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedDay}
              label="Age"
              onChange={handleDayChange}
            >
              <MenuItem value={"2024"}>2024</MenuItem>
              <MenuItem value={"2023"}>2023</MenuItem>
              <MenuItem value={"2022"}>2022</MenuItem>
            </Select>
          )}
          <CardHeader
            title={title}
            subheader={subHeader}
            sx={{
              padding: "0 24px 0",
            }}
          />
        </Stack>
        <Button
          variant={"outlined"}
          onClick={() => {
            handletrendClick();
          }}
        >
          {trend ? "Trend" : "2024 technologies"}
        </Button>
      </Stack>
      {loading ? (
        <Stack
          sx={{
            width: "100%",
            minHeight: 500,
            alignItems: "center",
            justifyContent: "center",
          }}
          spacing={1}
        >
          <CircularProgress />
          <p>Loading...</p>
        </Stack>
      ) : (
        <Box sx={{ p: 3, pb: 1 }} dir="ltr">
          {trend ? (
            <BarChart data={currentTechData} option={currentTechOptions} />
          ) : (
            <TrendLineChart data={trendData} option={trendOptions} />
          )}
        </Box>
      )}

      <Stack>
        <Typography variant="body2" sx={{ textAlign: "center", mb: 4 }}>
          * The data is based on the survey of {response} developers from over
          170 countries, conducted by Stack Overflow in January 2022.
        </Typography>
      </Stack>
    </Box>
  );
}
