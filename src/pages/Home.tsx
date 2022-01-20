import React from "react";
import AutoComplite from "components/toolbox/AutoComplite";
import { Container, Typography, Button } from "@mui/material";
import ToggleModeSelect from "components/toolbox/ToggleModeSelect";

const Home = () => {
  return (
    <Container>
      <ToggleModeSelect />
      <Typography variant="h4">Most Popular Language?</Typography>
      <AutoComplite />
      <Button>dark???</Button>
    </Container>
  );
};

export default Home;
