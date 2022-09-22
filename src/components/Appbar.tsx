import { Button, Link, Stack } from "@mui/material";
import { maxWidth } from "@mui/system";
import React from "react";
import ModeSelectButton from "./toolbox/ModeSelectButton";

const Appbar = () => {

  const handlerMoveHome = () => {
    window.location.href = "/";
  };

  const logo = require("../logo.svg").default;

  return <Stack justifyContent={"space-between"}  alignItems={'center'} direction="row" sx={{p: 1}}>
    <Link onClick={handlerMoveHome} 
      sx={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}>
        <Stack direction={"row"} sx={{fontSize: "23px", fontWeight: 700}} alignItems="center">
      <img
        src={logo}
        alt="logo"
        width="40"
        height="40"
        style={{ 
          marginRight: "6px", 
          maxWidth: 'unset',
          marginBottom: "-4px"
        }}
      />
      Pluton
      </Stack>
    </Link>
        <ModeSelectButton />
    </Stack>
    ;
};

export default Appbar;
