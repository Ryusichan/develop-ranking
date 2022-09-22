const currentDatabaseData = [
    {
      name: "Integrated development environment",
      data: [
        71.06, 33.03, 29.71, 28.74, 24.19, 22.22, 20.47, 19.29, 15.87, 12.94, 12.63, 11.07, 8.04,
        7.47,
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
  