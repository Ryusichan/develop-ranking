import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { CurrentResultState } from "state";
// import CloudPlatforms from "./charts/CloudPlatforms";
import MostPopContent from "./charts/MostPopContent";
import MostPopDatabases from "./charts/MostPopDatebases";
import NotFound from "./charts/NotFound";
import RankingBox from "./charts/RankingBox";
// import WebFrameworks from "./charts/WebFrameworks";
import CloudPlatforms from "./data/CloudPlatforms";
import MostDatabases from "./data/MostDatabases";
import MostPopData from "./data/MostPopData";
import MostTechData from "./data/MostPopData";
import WebFrameworks from "./data/WebFrameworks";
// import { MostTechData } from "./data/MostPopData";
export type DataType = {
  currentData: Array<any>;
  currentOptions: Array<any>;
  trendData?: Array<any>;
  trendOptions?: Array<any>;
  title: string;
  subHeader: string;
};

const ResultContainer = () => {
  const [value, setValue] = useRecoilState(CurrentResultState);

  useEffect(() => {
    setValue(value);
    console.log("value", value);

    console.log("currentResult", value);
  }, [value]);

  let target = value ? value.title : "";

  let data: undefined | DataType = undefined;

  switch (target) {
    case "Most popular technologies":
      data = MostTechData;
      break;
    case "Most popular Databases":
      data = MostDatabases;
      break;
    case "Cloud platforms":
      data = CloudPlatforms;
      break;
    case "Web frameworks":
      data = WebFrameworks;
      break;
    default:
      data = undefined;
  }

  if (data === undefined) {
    // return <div>"{target}" is undefained</div>;
    return <NotFound message={target} />;
  } else {
    return (
      <RankingBox
        currentData={data.currentData}
        currentOptions={data.currentOptions}
        trendData={data.trendData}
        trendOptions={data.trendOptions}
        title={data.title}
        subHeader={data.subHeader}
      />
    );
  }
};

export default ResultContainer;
