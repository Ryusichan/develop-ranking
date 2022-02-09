import { Stack, Typography } from "@mui/material";
import React from "react";

interface Props {
  message: string;
}

const NotFound = ({ message }: Props) => {
  return (
    <Stack>
      <Typography sx={{ mb: 4, mt: 4, textAlign: "center" }}>
        "{message}" not found
      </Typography>
    </Stack>
  );
};

export default NotFound;
