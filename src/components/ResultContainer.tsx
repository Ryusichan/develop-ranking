import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { CurrentResultState } from "state";
import MostPopContent from "./charts/MostPopContent";

const ResultContainer = () => {
  const [value, setValue] = useRecoilState(CurrentResultState);

  useEffect(() => {
    setValue(value);
    console.log("value", value);
    setValue(value);
    console.log("currentResult", value);
  }, [value]);

  if (value.title === "Most popular technologies") {
    // console.log("Most popular technologies", value);
    return <MostPopContent />;
  } else {
    return <div>{value.title}</div>;
  }
};

export default ResultContainer;
