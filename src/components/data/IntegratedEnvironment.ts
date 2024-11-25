const currentDatabaseData = [
  {
    day: "2022",
    name: "Integrated development environment",
    data: [
      { name: "Visual Studio Code", per: 74.4 },
      { name: "Visual Studio", per: 32.1 },
      { name: "IntelliJ IDEA", per: 27.9 },
      { name: "Notepad++", per: 27.7 },
      { name: "Vim", per: 23.3 },
      { name: "Android Studio", per: 19.8 },
      { name: "PyCharm", per: 17.2 },
      { name: "Sublime Text", per: 16.5 },
      { name: "Eclipse", per: 12.5 },
      { name: "Jupyter Notebook/JupyterLab", per: 11.6 },
      { name: "Xcode", per: 10.5 },
      { name: "Atom", per: 9.3 },
      { name: "Nano", per: 9.2 },
      { name: "WebStorm", per: 7.9 },
    ],
  },
  {
    day: "2023",
    name: "Integrated development environment",
    data: [
      { name: "Visual Studio Code", per: 73.7 },
      { name: "Visual Studio", per: 28.4 },
      { name: "IntelliJ IDEA", per: 26.8 },
      { name: "Notepad++", per: 24.5 },
      { name: "Vim", per: 22.2 },
      { name: "Android Studio", per: 16.8 },
      { name: "PyCharm", per: 14.6 },
      { name: "Jupyter Notebook/JupyterLab", per: 12.7 },
      { name: "Sublime Text", per: 12.6 },
      { name: "Neovim", per: 11.8 },
      { name: "Eclipse", per: 9.9 },
      { name: "Xcode", per: 9.4 },
      { name: "Nano", per: 8.9 },
      { name: "WebStorm", per: 7.3 },
    ],
  },
  {
    day: "2024",
    name: "Integrated development environment",
    data: [
      { name: "Visual Studio Code", per: 73.6 },
      { name: "Visual Studio", per: 29.3 },
      { name: "IntelliJ IDEA", per: 26.8 },
      { name: "Notepad++", per: 23.9 },
      { name: "Vim", per: 21.6 },
      { name: "Android Studio", per: 16.1 },
      { name: "PyCharm", per: 15.1 },
      { name: "Jupyter Notebook/JupyterLab", per: 12.8 },
      { name: "Neovim", per: 12.5 },
      { name: "Sublime Text", per: 10.9 },
      { name: "Eclipse", per: 9.4 },
      { name: "Xcode", per: 9.3 },
      { name: "Nano", per: 9.2 },
      { name: "WebStorm", per: 7.5 },
    ],
  },
];

const currentDatabaseOptions = [
  "Visual Studio Code",
  "Visual Studio",
  "Notepad++",
  "IntelliJ",
  "Android Studio",
  "Sublime Text",
  "PyCharm",
  "Eclipse",
  "Atom",
  "IPython/Jupyter",
  "Xcode",
  "Webstorm",
  "PHPStorm",
  "NetBeans",
];

const DatabaseData = [
  {
    name: "MySQL",
    type: "line",
    data: [49.6, 58.7, 54.0, 55.6, 50.1],
  },
  {
    name: "PostgreSQL",
    type: "line",
    data: [60.8, 32.9, 34.3, 36.1, 40.4],
  },
  {
    name: "SQLite",
    type: "line",
    data: [47.2, 19.7, 31.6, 31.2, 32.1],
  },
  {
    name: "MongoDB",
    type: "line",
    data: [55.0, 25.9, 25.5, 26.4, 27.7],
  },
  {
    name: "Microsoft SQL Server",
    type: "line",
    data: [54.2, 7.9, 32.8, 33.0, 26.8],
  },
  {
    name: "Redis",
    type: "line",
    data: [0, 18.0, 18.6, 18.3, 20.6],
  },
  {
    name: "MariaDB",
    type: "line",
    data: [0, 13.4, 16.5, 16.8, 17.1],
  },
  {
    name: "Firebase",
    type: "line",
    data: [0, 0, 12.8, 14.4, 16.1],
  },
  {
    name: "Elasticsearch",
    type: "line",
    data: [0, 14.1, 14.3, 13.8, 13.2],
  },
  {
    name: "Oracle",
    type: "line",
    data: [36.9, 11.1, 16.5, 16.5, 12.6],
  },
];

const DatabaseOptions = ["2017", "2018", "2019", "2020", "2022"];

const MostTechTitle = "Integrated development environment";
const MostTechSuqHeader =
  "Visual Studio Code has a significant lead as the IDE of choice across all developers.";

const responses = 82277;

export default {
  currentData: currentDatabaseData,
  currentOptions: currentDatabaseOptions,
  trendData: DatabaseData,
  trendOptions: DatabaseOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses,
};
