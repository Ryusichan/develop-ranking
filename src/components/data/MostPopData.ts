const currentTechData = [
  {
    name: "technologies",
    data: [
      64.9, 56.0, 48.2, 47.0, 35.3, 33.9, 30.1, 27.8, 27.1, 24.3, 21.9, 21.0,
      10.7, 9.5,
    ],
  },
];

const currentTechOptions = [
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
  "PHP",
  "C",
  "PowerShell",
  "Go",
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
];

const MostTechTitle = "Most Popular Technologies";
const MostTechSuqHeader =
  "Python passed SQL to become our third most popular technology, and Node.JS moves to the sixth most popular technology.";

  const responses = 83052;

export default {
  currentData: currentTechData,
  currentOptions: currentTechOptions,
  trendData: MostTechData,
  trendOptions: MostTechOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses: responses,
};
