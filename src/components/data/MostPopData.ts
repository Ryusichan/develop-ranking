const currentTechData = [
  {
    day: "2022",
    name: "technologies",
    data: [
      { name: "JavaScript", per: 65.3 },
      { name: "HTML/CSS", per: 55.0 },
      { name: "SQL", per: 49.4 },
      { name: "Python", per: 48.0 },
      { name: "TypeScript", per: 34.8 },
      { name: "Java", per: 33.2 },
      { name: "Bash/Shell", per: 29.0 },
      { name: "C#", per: 27.9 },
      { name: "C++", per: 22.5 },
      { name: "PHP", per: 20.8 },
      { name: "C", per: 19.2 },
      { name: "PowerShell", per: 12.0 },
      { name: "Go", per: 11.1 },
      { name: "Rust", per: 9.3 },
    ],
  },
  {
    day: "2023",
    name: "technologies",
    data: [
      { name: "JavaScript", per: 63.6 },
      { name: "HTML/CSS", per: 52.9 },
      { name: "Python", per: 49.2 },
      { name: "SQL", per: 48.6 },
      { name: "TypeScript", per: 38.8 },
      { name: "Bash/Shell", per: 32.3 },
      { name: "Java", per: 30.3 },
      { name: "C#", per: 27.6 },
      { name: "C++", per: 22.4 },
      { name: "C", per: 19.3 },
      { name: "PHP", per: 18.5 },
      { name: "PowerShell", per: 13.5 },
      { name: "Go", per: 13.24 },
      { name: "Rust", per: 13.0 },
    ],
  },
  {
    day: "2024",
    name: "technologies",
    data: [
      { name: "JavaScript", per: 62.3 },
      { name: "HTML/CSS", per: 52.9 },
      { name: "Python", per: 51 },
      { name: "SQL", per: 51 },
      { name: "TypeScript", per: 38.5 },
      { name: "Bash/Shell", per: 33.9 },
      { name: "Java", per: 30.3 },
      { name: "C#", per: 27.1 },
      { name: "C++", per: 23 },
      { name: "C", per: 20.3 },
      { name: "PHP", per: 18.2 },
      { name: "PowerShell", per: 13.8 },
      { name: "Go", per: 13.5 },
      { name: "Rust", per: 12.6 },
    ],
  },
];

const MostTechData = [
  {
    name: "JavaScript",
    type: "line",
    data: [56, 58, 54, 55, 62, 69, 67, 67, 64],
  },
  {
    name: "HTML/CSS",
    type: "line",
    data: [0, 0, 0, 0, 0, 68, 63, 63, 56],
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
    data: [4, 4, 4, 4, 9, 17, 21, 25, 30],
  },
  {
    name: "C#",
    type: "line",
    data: [44, 37, 31, 30, 34, 34, 31, 31, 27],
  },
  {
    name: "Bash/Shell",
    type: "line",
    data: [0, 0, 0, 0, 0, 39, 36, 33, 27],
  },
  {
    name: "C++",
    type: "line",
    data: [27, 21, 20, 19, 22, 25, 23, 23, 24],
  },
];

const MostTechOptions = [
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2022",
  "2023",
  "2024",
];

const MostTechTitle = "Most Popular Technologies";
const MostTechSuqHeader =
  "Python passed SQL to become our third most popular technology, and Node.JS moves to the sixth most popular technology.";

const responses = 83052;

export default {
  currentData: currentTechData,
  trendData: MostTechData,
  trendOptions: MostTechOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses: responses,
};
