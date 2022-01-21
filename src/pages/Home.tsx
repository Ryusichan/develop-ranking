import React from "react";
import AutoComplite from "components/toolbox/AutoComplite";
import { Container, Typography, Button, Stack } from "@mui/material";
import Footer from "components/Footer";
import MostPopTech from "components/charts/MostPopContent";
import ResultContainer from "components/ResultContainer";
// import ToggleModeSelect from "components/toolbox/ToggleModeSelect";
export interface FilmOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

const Home = () => {
  const [value, setValue] = React.useState<FilmOptionType | null>(null);

  console.log("HomeValue", value);

  return (
    <Stack>
      <Container>
        <Typography variant="h4" sx={{ marginBottom: 4, textAlign: "center" }}>
          Most Popular Language?
        </Typography>
        <AutoComplite value={value} setValue={setValue} />
        <ResultContainer value={value} />
      </Container>
      <Footer />
    </Stack>
  );
};

export default Home;
