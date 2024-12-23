const currentOTData = [
  {
    day: "2022",
    name: "OtherTools",
    data: [
      { name: "npm", per: 65.1 },
      { name: "Docker", per: 63.7 },
      { name: "Yarn", per: 27.6 },
      { name: "Homebrew", per: 26.2 },
      { name: "Kubernetes", per: 22.9 },
      { name: "Terraform", per: 11.2 },
      { name: "Unity 3D", per: 10.6 },
      { name: "Ansible", per: 9.4 },
      { name: "Unreal Engine", per: 3.9 },
      { name: "Puppet", per: 1.8 },
      { name: "Chef", per: 1.5 },
      { name: "Pulumi", per: 0.8 },
      { name: "Flow", per: 0.8 },
    ],
  },
  {
    day: "2023",
    name: "OtherTools",
    data: [
      { name: "Docker", per: 51.5 },
      { name: "npm", per: 49.3 },
      { name: "Pip", per: 29.0 },
      { name: "Homebrew", per: 21.9 },
      { name: "Yarn", per: 21.8 },
      { name: "Webpack", per: 20.7 },
      { name: "Make", per: 20.1 },
      { name: "Kubernetes", per: 19.0 },
      { name: "NuGet", per: 15.2 },
      { name: "Maven", per: 15.0 },
      { name: "Gradle", per: 14.9 },
      { name: "Vite", per: 14.7 },
      { name: "Visual Studio Solution", per: 14.6 },
    ],
  },
  {
    day: "2024",
    name: "OtherTools",
    data: [
      { name: "Docker", per: 53.9 },
      { name: "npm", per: 49.6 },
      { name: "Pip", per: 32.4 },
      { name: "Homebrew", per: 22.3 },
      { name: "Make", per: 20.8 },
      { name: "Vite", per: 19.9 },
      { name: "Kubernetes", per: 19.4 },
      { name: "Yarn", per: 18.8 },
      { name: "Webpack", per: 18.4 },
      { name: "NuGet", per: 16.1 },
      { name: "Maven", per: 15.6 },
      { name: "Kubernetes", per: 19.4 },
      { name: "Yarn", per: 18.8 },
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

const OTOptions = ["2019", "2020", "2021", "2022", "2023", "2024"];

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
