import React from "react";
import { Box } from "@mui/material";
import MyBucketList from "./MyBucketList";

export default function MyStuff(props) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        p: {
          sm: 2,
          lg: 3,
        },
        width: "100%",
      }}
    >
      <MyBucketList />
    </Box>
  );
}
