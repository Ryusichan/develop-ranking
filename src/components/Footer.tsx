import { Container, Stack } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Container sx={{ borderTop: "1px solid gray", minHeight: 300 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ minHeight: 300 }}
      >
        <Stack sx={{ width: "30%" }}>
          <img
            src="https://www.technocrazed.com/wp-content/uploads/2016/02/Best-Programming-Languages-to-Learn-in-2021.jpg"
            alt=""
          />
        </Stack>
        <Stack
          direction="column"
          sx={{ width: "70%", textAlign: "center" }}
          alignItems="center"
        >
          <h1>I hope it will be helpful for many developers who study new languages.</h1>
          <p>© 2022 Most Popular Language</p>
          <p>© Derect by Ryu si chan</p>
        </Stack>
        <Stack sx={{ width: "30%" }}>
          <img
            src="https://www.technocrazed.com/wp-content/uploads/2016/02/Best-Programming-Languages-to-Learn-in-2021.jpg"
            alt=""
          />
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
