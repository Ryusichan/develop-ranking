import { FilmOptionType } from "pages/Home";
import React, { useEffect } from "react";
import MostPopTech from "./charts/mostPoptech/MostPopTech";

const ResultContainer = ({ value }: any) => {
  const [currentResult, setCurrentResult] =
    React.useState<FilmOptionType | null>(null);
  useEffect(() => {
    setCurrentResult(value);
    console.log("value", value);
    console.log("currentResult", currentResult);
  }, [value]);

  return <MostPopTech />;
};

export default ResultContainer;
