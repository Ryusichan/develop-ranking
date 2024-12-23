const currentDatabaseData = [
  {
    name: "Operating system",
    data: [45.33, 25.32, 25.19, 3.29, 0.18],
  },
];

const currentDatabaseOptions = [
  "Windows",
  "Linux-based",
  "MacOS",
  "Windows Subsystem for Linux",
  "BSD",
];

const MostTechTitle = "Operating system";
const MostTechSuqHeader =
  "Windows continues to be the most popular operating system, though slightly less so among professional developers. This year was also the first time we added WSL as an option.";

const responses = 82719;

export default {
  currentData: currentDatabaseData,
  currentOptions: currentDatabaseOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses,
};
