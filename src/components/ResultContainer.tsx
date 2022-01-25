import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { CurrentResultState } from "state";
import CloudPlatforms from "./charts/CloudPlatforms";
import MostPopContent from "./charts/MostPopContent";
import MostPopDatabases from "./charts/MostPopDatebases";
import WebFrameworks from "./charts/WebFrameworks";

const ResultContainer = () => {
  const [value, setValue] = useRecoilState(CurrentResultState);

  useEffect(() => {
    setValue(value);
    console.log("value", value);
    setValue(value);
    console.log("currentResult", value);
  }, [value]);

  let target = value ? value.title : "";

  // if (target === "Most popular technologies") {
  //   // console.log("Most popular technologies", value);
  //   return <MostPopContent />;
  // } else {
  //   return <div>"{target}" is undefained</div>;
  // }
  switch (target) {
    case "Most popular technologies":
      return <MostPopContent />;
    case "Most popular Databases":
      return <MostPopDatabases />;
    case "Cloud platforms":
      return <CloudPlatforms />;
    case "Web frameworks":
      return <WebFrameworks />;
    default:
      return <div>"{target}" is undefained</div>;
  }
};

export default ResultContainer;
