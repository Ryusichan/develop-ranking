const currentOFData = [
  {
    name: "Otherframeworks",
    data: [
      40.1, 34.4, 23.8, 22.9, 18.9, 18.1, 16.1, 15.7, 14.9, 14.5, 11.4, 10.1,
      7.0, 3.9, 3.8, 3.8, 2.7, 2.3,
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

const OFOptions = ["2019", "2020", "2022"];

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
