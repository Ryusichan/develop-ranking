import React from "react";
import AutoComplite from "components/toolbox/AutoComplite";
import { Container, Typography, Button, Stack } from "@mui/material";
import Footer from "components/Footer";

import ResultContainer from "components/ResultContainer";
import ModeSelectButton from "components/toolbox/ModeSelectButton";
import Appbar from "components/Appbar";

const Home = () => {
  return (
    <Stack>
      <Container>
        <Appbar />
        <Typography variant="h2" sx={{ mb: 4, mt: 4, textAlign: "center" }}>
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
