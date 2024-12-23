const currentOFData = [
  {
    day: "2022",
    name: "OtherFramework",
    data: [
      { name: ".NET", per: 34.5 },
      { name: "NumPy", per: 28.6 },
      { name: "Pandas", per: 25.0 },
      { name: "Spring Framework", per: 16.1 },
      { name: "TensorFlow", per: 12.9 },
      { name: "Flutter", per: 12.6 },
      { name: "Scikit-Learn", per: 12.5 },
      { name: "React Native", per: 12.5 },
      { name: "Apache Kafka", per: 10.3 },
      { name: "Electron", per: 9.5 },
      { name: "Torch/PyTorch", per: 8.6 },
      { name: "Qt", per: 8.5 },
      { name: "Keras", per: 7.2 },
      { name: "Ionic", per: 5.2 },
    ],
  },
  {
    day: "2023",
    name: "OtherFramework",
    data: [
      { name: ".NET", per: 25.2 },
      { name: "NumPy", per: 20.2 },
      { name: "Pandas", per: 18.9 },
      { name: ".NET Framework", per: 17.0 },
      { name: "Spring Framework", per: 11.1 },
      { name: "RabbitMQ", per: 10.3 },
      { name: "TensorFlow", per: 9.5 },
      { name: "Scikit-Learn", per: 9.4 },
      { name: "Flutter", per: 9.1 },
      { name: "Apache Kafka", per: 8.9 },
      { name: "Torch/PyTorch", per: 8.7 },
      { name: "React Native", per: 8.4 },
      { name: "Opencv", per: 8.1 },
      { name: "Electron", per: 6.9 },
    ],
  },
  {
    day: "2024",
    name: "OtherFramework",
    data: [
      { name: ".NET", per: 25.2 },
      { name: "NumPy", per: 21.2 },
      { name: "Pandas", per: 20.7 },
      { name: ".NET Framework", per: 16.4 },
      { name: "Spring Framework", per: 11.1 },
      { name: "RabbitMQ", per: 10.9 },
      { name: "Scikit-Learn", per: 10.6 },
      { name: "Torch/PyTorch", per: 10.6 },
      { name: "TensorFlow", per: 10.1 },
      { name: "Apache Kafka", per: 9.4 },
      { name: "Flutter", per: 9.4 },
      { name: "Opencv", per: 8.6 },
      { name: "React Native", per: 8.4 },
      { name: "Qt", per: 7.3 },
    ],
  },
];

const currentOFOptions = [
  ".NET Framework",
  "NumPy",
  ".NET Core / .NET 5",
  "Pandas",
  "TensorFlow",
  "React Native",
  "Flutter",
  "Keras",
  "Qt",
  "Torch/PyTorch",
  "Cordova",
  "Apache Spark",
  "Hadoop",
];

const OFData = [
  {
    name: ".NET Framework",
    type: "line",
    data: [31, 35, 40],
  },
  {
    name: "NumPy",
    type: "line",
    data: [48, 43, 34],
  },
  {
    name: ".NET Core / .NET 5",
    type: "line",
    data: [19, 21, 23],
  },
  {
    name: "Pandas",
    type: "line",
    data: [30, 25, 22],
  },
  {
    name: "TensorFlow",
    type: "line",
    data: [15, 17, 18],
  },
  {
    name: "React Native",
    type: "line",
    data: [26, 19, 18],
  },
  {
    name: "Flutter",
    type: "line",
    data: [12, 14, 16],
  },
  {
    name: "Keras",
    type: "line",
    data: [26, 19, 15],
  },
  {
    name: "Qt",
    type: "line",
    data: [13, 14, 14],
  },
  {
    name: "Torch/PyTorch",
    type: "line",
    data: [16, 16, 14],
  },
];

const OFOptions = ["2019", "2020", "2021", "2022", "2023", "2024"];

const MostTechTitle = "Other frameworks and libraries";
const MostTechSuqHeader =
  "The .NET framework gets the most love in other technologies, though several data science libraries for Python make strong showings.";

const responses = 59921;

export default {
  currentData: currentOFData,
  currentOptions: currentOFOptions,
  trendData: OFData,
  trendOptions: OFOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses,
};
