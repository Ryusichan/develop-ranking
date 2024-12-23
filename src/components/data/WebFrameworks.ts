const currentWFWData = [
  {
    day: "2024",
    name: "webFramework",
    data: [
      { name: "Node.js", per: 40.8 },
      { name: "React.js", per: 39.5 },
      { name: "jQuery", per: 21.4 },
      { name: "Next.js", per: 17.9 },
      { name: "Express", per: 17.8 },
      { name: "Angular", per: 17.1 },
      { name: "ASP.NET Core", per: 16.9 },
      { name: "Vue.js", per: 15.4 },
      { name: "ASP.NET", per: 12.9 },
      { name: "Flask", per: 12.9 },
      { name: "Spring Boot", per: 12.7 },
      { name: "Django", per: 12 },
      { name: "WordPress", per: 11.8 },
      { name: "FastAPI", per: 9.9 },
    ],
  },
  {
    day: "2023",
    name: "webFramework",
    data: [
      { name: "Node.js", per: 42.6 },
      { name: "React.js", per: 40.5 },
      { name: "jQuery", per: 21.9 },
      { name: "Express", per: 19.2 },
      { name: "Angular", per: 17.4 },
      { name: "Next.js", per: 16.6 },
      { name: "ASP.NET Core", per: 16.5 },
      { name: "Vue.js", per: 16.3 },
      { name: "WordPress", per: 13.3 },
      { name: "ASP.NET", per: 12.7 },
      { name: "Flask", per: 12.1 },
      { name: "Spring Boot", per: 11.9 },
      { name: "Django", per: 11.4 },
      { name: "Laravel", per: 7.5 },
    ],
  },
  {
    day: "2022",
    name: "webFramework",
    data: [
      { name: "Node.js", per: 47.1 },
      { name: "React.js", per: 42.6 },
      { name: "jQuery", per: 28.5 },
      { name: "Express", per: 22.9 },
      { name: "Angular", per: 20.3 },
      { name: "Vue.js", per: 18.8 },
      { name: "ASP.NET Core", per: 18.5 },
      { name: "ASP.NET", per: 14.9 },
      { name: "Django", per: 14.6 },
      { name: "Flask", per: 14.6 },
      { name: "Next.js", per: 13.5 },
      { name: "Laravel", per: 9.4 },
      { name: "Angular.js", per: 8.9 },
      { name: "FastAPI", per: 6.0 },
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

const WFWOptions = ["2019", "2020", "2021", "2022", "2023", "2024"];

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
