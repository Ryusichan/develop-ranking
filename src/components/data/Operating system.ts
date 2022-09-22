const currentDatabaseData = [
    {
      name: "Operating system",
      data: [
        45.33, 25.32, 25.19, 3.29, 0.18
      ],
    },
  ];
  
  const currentDatabaseOptions = [
    "Windows",
    "Linux-based",
    "MacOS",
    "Windows Subsystem for Linux",
    "BSD",
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
  
  const DatabaseOptions = ["2017", "2018", "2019", "2020", "2021"];
  
  const MostTechTitle = "Operating system";
  const MostTechSuqHeader =
    "Windows continues to be the most popular operating system, though slightly less so among professional developers. This year was also the first time we added WSL as an option.";
  
  export default {
    currentData: currentDatabaseData,
    currentOptions: currentDatabaseOptions,
    trendData: DatabaseData,
    trendOptions: DatabaseOptions,
    title: MostTechTitle,
    subHeader: MostTechSuqHeader,
  };
  