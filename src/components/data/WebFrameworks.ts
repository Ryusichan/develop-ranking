const currentWFWData = [
  {
    name: "CloudPlatForms",
    data: [
      40.1, 34.4, 23.8, 22.9, 18.9, 18.1, 16.1, 15.7, 14.9, 14.5, 11.4, 10.1,
      7.0, 3.9, 3.8, 3.8, 2.7, 2.3,
    ],
  },
];

const currentWFWOptions = [
  "React.js",
  "jQuery",
  "Express",
  "Angular",
  "Vue.js",
  "ASP.NET Core",
  "Flask",
  "ASP.NET",
  "Django",
  "Spring",
  "Angular.js",
  "Laravel",
  "Ruby on Rails",
  "Gatsby",
  "FastAPI",
  "Symfony",
  "Svelte",
  "Drupal",
];

const WFWData = [
  {
    name: "React.js",
    type: "line",
    data: [31, 35, 40],
  },
  {
    name: "jQuery",
    type: "line",
    data: [48, 43, 34],
  },
  {
    name: "Express",
    type: "line",
    data: [19, 21, 23],
  },
  {
    name: "Angular",
    type: "line",
    data: [30, 25, 22],
  },
  {
    name: "Vue.js",
    type: "line",
    data: [15, 17, 18],
  },
  {
    name: "ASP.NET Core",
    type: "line",
    data: [26, 19, 18],
  },
  {
    name: "Flask",
    type: "line",
    data: [12, 14, 16],
  },
  {
    name: "ASP.NET",
    type: "line",
    data: [26, 19, 15],
  },
  {
    name: "Django",
    type: "line",
    data: [13, 14, 14],
  },
  {
    name: "Spring",
    type: "line",
    data: [16, 16, 14],
  },
];

const WFWOptions = ["2019", "2020", "2022"];

const MostTechTitle = "Web frameworks";
const MostTechSuqHeader =
  "This year, React.js surpassed jQuery as the most commonly used web framework.";

const responses = 67593;

export default {
  currentData: currentWFWData,
  currentOptions: currentWFWOptions,
  trendData: WFWData,
  trendOptions: WFWOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses: responses,
};
