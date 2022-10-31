import { Container, Stack, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container sx={{ borderTop: "1px solid gray", minHeight: 250 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: 250 }}
      >
        <Stack
          direction="column"
          sx={{ width: "100%", textAlign: "center" }}
          alignItems="center"
        >
          <Typography variant="h4" sx={{ mb: 2}}>I hope it will be helpful for many developers who study new languages.</Typography>
          <p>© 2022 Most Popular Language</p>
          <p>© Derect by Ryu si chan</p>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
