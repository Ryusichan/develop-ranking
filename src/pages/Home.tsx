import React from "react";
import AutoComplite from "components/toolbox/AutoComplite";
import { Container, Typography, Button, Stack } from "@mui/material";
import Footer from "components/Footer";

import ResultContainer from "components/ResultContainer";
import ModeSelectButton from "components/toolbox/ModeSelectButton";

const Home = () => {
  return (
    <Stack>
      <Container>
        <ModeSelectButton />
        <Typography variant="h4" sx={{ marginBottom: 4, textAlign: "center" }}>
          Most Popular Language?
        </Typography>
        <AutoComplite />
        <ResultContainer />
      </Container>
      <Footer />
    </Stack>
  );
};

export default Home;
