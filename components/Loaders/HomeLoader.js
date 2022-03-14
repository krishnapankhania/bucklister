import { Grid, Skeleton } from "@mui/material";
import React from "react";

export default function HomeLoader() {
  const item = (
    <Grid item md={6} mt={2}>
      <Skeleton variant="rectangular" width={"100%"} height={"300px"} />
    </Grid>
  );
  return (
    <>
      <Grid container spacing={2}>
        {item}
        {item}
        {item}
        {item}
        {item}
        {item}
      </Grid>
    </>
  );
}
