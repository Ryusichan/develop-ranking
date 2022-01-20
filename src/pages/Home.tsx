import React from "react";
import AutoComplite from "components/toolbox/AutoComplite";
import { Container, Typography, Button, Stack } from "@mui/material";
import Footer from "components/Footer";
import MostPopTech from "components/charts/MostPopTech";
// import ToggleModeSelect from "components/toolbox/ToggleModeSelect";

const Home = () => {
  return (
    <Stack>
      <Container>
        <Typography variant="h4">Most Popular Language?</Typography>
        <AutoComplite />
        <MostPopTech />
      </Container>
      <Footer />
    </Stack>
  );
};

export default Home;
