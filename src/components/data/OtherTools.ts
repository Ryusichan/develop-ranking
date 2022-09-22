const currentOTData = [
  {
    name: "OtherTools",
    data: [
      93.43, 48.85, 17.73, 16.6, 9.88, 7.68, 7.46, 3.9, 3.21, 1.8, 1.41, 1.35,
      1.27, 0.5,
    ],
  },
];

const currentOTOptions = [
  "Git",
  "Docker",
  "Yarn",
  "Kubernetes",
  "Unity 3D",
  "Ansible",
  "Terraform",
  "Xamarin",
  "Unreal Engine",
  "Puppet",
  "Deno",
  "Chef",
  "Flow",
  "Pulumi",
];

const OTData = [
  {
    name: "Git",
    type: "line",
    data: [31, 35, 40],
  },
  {
    name: "Docker",
    type: "line",
    data: [48, 43, 34],
  },
  {
    name: "Yarn",
    type: "line",
    data: [19, 21, 23],
  },
  {
    name: "Kubernetes",
    type: "line",
    data: [30, 25, 22],
  },
  {
    name: "Unity 3D",
    type: "line",
    data: [15, 17, 18],
  },
  {
    name: "Ansible",
    type: "line",
    data: [26, 19, 18],
  },
  {
    name: "Terraform",
    type: "line",
    data: [12, 14, 16],
  },
  {
    name: "Xamarin",
    type: "line",
    data: [26, 19, 15],
  },
  {
    name: "Unreal Engine",
    type: "line",
    data: [13, 14, 14],
  },
  {
    name: "Puppet",
    type: "line",
    data: [16, 16, 14],
  },
];

const OTOptions = ["2019", "2020", "2022"];

const MostTechTitle = "Other tools";
const MostTechSuqHeader =
  "Over 90% of respondents use Git, suggesting that it is a fundamental tool to being a developer.";

const responses = 76253;

export default {
  currentData: currentOTData,
  currentOptions: currentOTOptions,
  trendData: OTData,
  trendOptions: OTOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses,
};
