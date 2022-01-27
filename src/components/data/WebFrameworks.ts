const currentTechData = [
  {
    name: "CloudPlatForms",
    data: [54.2, 31.0, 20.7, 24.0, 17.6, 2.5, 1.8],
  },
];

const currentTechOptions = [
  "AWS",
  "Google Cloud Platform",
  "Microsoft Azure",
  "Heroku",
  "DigitalOcean",
  "IBM Cloud or Watson",
  "Oracle Cloud Infrastructure",
];

const MostTechTitle = "2021 Cloud platforms";
const MostTechSuqHeader =
  "AWS maintains its lead as the most widely used cloud platform, but Google Cloud and Microsoft Azure made substantial gains from last year. It is worth noting that this is the first year that we broke out cloud platforms from our general platforms question.";

export default {
  currentData: currentTechData,
  currentOptions: currentTechOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
};
