const currentDatabaseData = [
    {
      name: "Database",
      data: [
        89.69, 79.96, 48.01, 43.56, 39.5, 37.04, 14.63, 11.99, 9.37, 7.92
      ],
    },
  ];
  
  const currentDatabaseOptions = [
    "Google it",
    "Visit Stack Overflow",
    "Do other work and come back later",
    "Watch help / tutorial videos",
    "Call a coworker or friend",
    "Go for a walk or other physical activity",
    "Play games",
    "Panic",
    "Meditate",
    "Visit another developer community",
  ];
  
  const DatabaseOptions = ["2017", "2018", "2019", "2020", "2022"];
  
  const MostTechTitle = "Learning & problem solving";
  const MostTechSuqHeader =
    "Respondents most often use Google when they get stuck or visit Stack Overflow.";
  
  export default {
    currentData: currentDatabaseData,
    currentOptions: currentDatabaseOptions,
    // trendData: DatabaseData,
    trendOptions: DatabaseOptions,
    title: MostTechTitle,
    subHeader: MostTechSuqHeader,
  };
  