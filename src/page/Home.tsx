import React from "react";
import AutoComplite from "components/toolbox/AutoComplite";
import { Container, Typography, Button } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4">Most Popular Language?</Typography>
      <AutoComplite />
      <Button>dark???</Button>
    </Container>
  );
};

export default Home;
