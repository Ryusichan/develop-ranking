import React from "react";
import { CurrentResultState } from "state";
import { Link, Stack, Typography } from "@mui/material";
import { useRecoilState } from "recoil";

interface Props {
  // message: string;
}

const titleArray = [
  "Most popular technologies",
  "Most popular Databases",
  "Cloud platforms",
  "Web frameworks",
  "Other frameworks and libraries",
];

const MostSearch = () => {
  const [value, setValue] = useRecoilState(CurrentResultState);

  const SearchHandler  = (value:string) => {
    setValue({
      title: value,
    })
  };

  return (
    <Stack sx={{ mt: 8, mb: 8 }}>
      <Stack direction={"row"}>
        <Stack sx={{ flex: 1}}>
        <Stack>
          <Typography variant="h4" sx={{ mb: 4, mt: 4}}>
          Most searched features
          </Typography>
        </Stack>
        <Stack spacing={2} sx={{width: "fit-content"}}>
          {titleArray.map((title, index) => (
            <Link
              key={title}
              href="#"
              onClick={() => SearchHandler(title)}
              variant="body1"
            >
              {index + 1}. {title}
            </Link>
          ))}
        </Stack>
        </Stack>

            <Stack sx={{ flex: 1}}>
              <Stack>
              <Typography variant="h4" sx={{ mb: 4, mt: 4, textAlign: "center" }}>
                Technology
              </Typography>
              </Stack>
              <Stack>
              Each year we explore the tools and technologies developers are currently using. And, as always, we ask them what technologies are most Loved, Dreaded, and Wanted across several categories.
              </Stack>
            </Stack>

      </Stack>

    </Stack>
  );
};

export default MostSearch;
