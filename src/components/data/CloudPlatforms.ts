// const currentTechData = [
//   {
//     name: "CloudPlatForms",
//     data: [54.2, 31.0, 20.7, 24.0, 17.6, 2.5, 1.8],
//   },
// ];
const currentTechData = [
  {
    day: "2022",
    name: "CloudPlatForms",
    data: [
      { name: "Amazon Web Services", per: 51.0 },
      { name: "Microsoft Azure", per: 28.7 },
      { name: "Google Cloud", per: 26.8 },
      { name: "Firebase", per: 21.1 },
      { name: "Heroku", per: 19.9 },
      { name: "Digital Ocean", per: 15.6 },
      { name: "VMware", per: 8.7 },
      { name: "Managed Hosting", per: 5.7 },
      { name: "Linode, now Akamai", per: 3.9 },
      { name: "OVH", per: 3.7 },
      { name: "Oracle Cloud Infrastructure", per: 2.1 },
      { name: "OpenStack", per: 2.0 },
      { name: "IBM Cloud or Watson", per: 1.6 },
      { name: "Colocation", per: 1.2 },
    ],
  },
  {
    day: "2023",
    name: "CloudPlatForms",
    data: [
      { name: "Amazon Web Services", per: 48.6 },
      { name: "Microsoft Azure", per: 26.0 },
      { name: "Google Cloud", per: 23.8 },
      { name: "Firebase", per: 15.4 },
      { name: "Cloudflare", per: 15.2 },
      { name: "Digital Ocean", per: 13.3 },
      { name: "Heroku", per: 12.0 },
      { name: "Vercel", per: 10.6 },
      { name: "Netlify", per: 8.9 },
      { name: "VMware", per: 7.1 },
      { name: "Hetzner", per: 4.4 },
      { name: "Linode, now Akamai", per: 3.9 },
      { name: "Managed Hosting", per: 3.4 },
      { name: "OVH", per: 3.4 },
    ],
  },
  {
    day: "2024",
    name: "CloudPlatForms",
    data: [
      { name: "Amazon Web Services", per: 48 },
      { name: "Microsoft Azure", per: 27.8 },
      { name: "Google Cloud", per: 25.1 },
      { name: "Cloudflare", per: 15.1 },
      { name: "Firebase", per: 13.9 },
      { name: "Vercel", per: 11.9 },
      { name: "Digital Ocean", per: 11.7 },
      { name: "Heroku", per: 8.2 },
      { name: "Netlify", per: 7 },
      { name: "VMware", per: 6.6 },
      { name: "Hetzner", per: 5 },
      { name: "Supabase", per: 3.8 },
      { name: "Linode, now Akamai", per: 3.1 },
      { name: "OVH", per: 3 },
    ],
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

const MostTechTitle = "Cloud platforms";
const MostTechSuqHeader =
  "AWS maintains its lead as the most widely used cloud platform, but Google Cloud and Microsoft Azure made substantial gains from last year. It is worth noting that this is the first year that we broke out cloud platforms from our general platforms question.";

const responses = 62061;

export default {
  currentData: currentTechData,
  currentOptions: currentTechOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses,
};
