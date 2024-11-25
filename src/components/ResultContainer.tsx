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
import ProblemSolving from "./data/ProblemSolving";
import OtherFrameworks from "./data/OtherFrameworks";
import OtherTools from "./data/OtherTools";
import IntegratedEnvironment from "./data/IntegratedEnvironment";
import OperatingSystem from "./data/Operating system";
import MostSearch from "./charts/MostSearch";
// import { MostTechData } from "./data/MostPopData";
export type DataType = {
  currentData: Array<any>;
  trendData?: Array<any>;
  trendOptions?: Array<any>;
  title: string;
  subHeader: string;
  responses: number;
};

const ResultContainer = () => {
  const [value, setValue] = useRecoilState(CurrentResultState);

  useEffect(() => {
    setValue(value);
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
    case "Other frameworks and libraries":
      data = OtherFrameworks;
      break;
    case "Other tools":
      data = OtherTools;
      break;
    case "Integrated development environment":
      data = IntegratedEnvironment;
      break;
    case "Operating systems":
      data = OperatingSystem;
      break;
    case "Problem Solving":
      data = ProblemSolving;
      break;
    default:
      data = undefined;
  }

  if (data === undefined) {
    // return <div>"{target}" is undefained</div>;
    // return <NotFound message={target} />;
    return <MostSearch />;
  } else {
    return (
      <RankingBox
        currentData={data.currentData}
        trendData={data.trendData}
        trendOptions={data.trendOptions}
        title={data.title}
        subHeader={data.subHeader}
        responses={data.responses}
      />
    );
  }
};

export default ResultContainer;
