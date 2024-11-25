// const currentDatabaseData = [
//   {
//     name: "Database",
//     data: [
//       50.1, 40.4, 32.1, 27.7, 26.8, 20.6, 17.1, 16.1, 13.2, 12.6, 7.3, 2.6, 2.0,
//       1.5,
//     ],
//   },
// ];

const currentDatabaseData = [
  {
    day: "2022",
    name: "Database",
    data: [
      { name: "MySQL", per: 46.8 },
      { name: "PostgreSQL", per: 43.5 },
      { name: "SQLite", per: 32.01 },
      { name: "MongoDB", per: 28.3 },
      { name: "Microsoft SQL Server", per: 26.8 },
      { name: "Redis", per: 22.1 },
      { name: "MariaDB", per: 17.9 },
      { name: "Elasticsearch", per: 12.2 },
      { name: "Oracle", per: 11.4 },
      { name: "Firebase Realtime Database", per: 8.7 },
      { name: "DynamoDB", per: 8.2 },
      { name: "Cloud Firestore", per: 7.4 },
      { name: "Cassandra", per: 2.6 },
      { name: "Neo4j", per: 2.1 },
    ],
  },
  {
    day: "2023",
    name: "Database",
    data: [
      { name: "PostgreSQL", per: 45.5 },
      { name: "MySQL", per: 41.0 },
      { name: "SQLite", per: 30.9 },
      { name: "MongoDB", per: 25.5 },
      { name: "Microsoft SQL Server", per: 25.4 },
      { name: "Redis", per: 20.4 },
      { name: "MariaDB", per: 17.6 },
      { name: "Elasticsearch", per: 13.3 },
      { name: "Oracle", per: 9.8 },
      { name: "DynamoDB", per: 8.8 },
      { name: "Firebase Realtime Database", per: 6.4 },
      { name: "Cloud Firestore", per: 6.4 },
      { name: "BigQuery", per: 4.5 },
      { name: "Microsoft Access", per: 4.2 },
    ],
  },
  {
    day: "2024",
    name: "Database",
    data: [
      { name: "PostgreSQL", per: 48.7 },
      { name: "MySQL", per: 40.3 },
      { name: "SQLite", per: 33.1 },
      { name: "Microsoft SQL Server", per: 25.3 },
      { name: "MongoDB", per: 24.8 },
      { name: "Redis", per: 20 },
      { name: "MariaDB", per: 17.2 },
      { name: "Elasticsearch", per: 12.5 },
      { name: "Oracle", per: 10.1 },
      { name: "DynamoDB", per: 7.9 },
      { name: "Firebase Realtime Database", per: 5.8 },
      { name: "Cloud Firestore", per: 5.4 },
      { name: "BigQuery", per: 4.8 },
      { name: "Microsoft Access", per: 4.2 },
    ],
  },
];

const currentDatabaseOptions = [
  "MySQL",
  "PostgreSQL",
  "SQLite",
  "MongoDB",
  "Microsoft SQL Server",
  "Redis",
  "MariaDB",
  "Firebase",
  "Elasticsearch",
  "Oracle",
  "DynamoDB",
  "Cassandra",
  "IBM DB2",
  "Couchbase",
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

const MostTechTitle = "Most popular Databases";
const MostTechSuqHeader =
  "The most common databases are consistent between all respondents and professional developers. The only difference we observed is that professional developers are slightly more likely to use Microsoft SQL Server over MongoDB.";

const responses = 73317;

export default {
  currentData: currentDatabaseData,
  currentOptions: currentDatabaseOptions,
  trendData: DatabaseData,
  trendOptions: DatabaseOptions,
  title: MostTechTitle,
  subHeader: MostTechSuqHeader,
  responses,
};
