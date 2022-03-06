import React from "react";
import { Box, Grid, Paper } from "@mui/material";
import ExploreCard from "./ExploreCard";

export default function Explore() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: {
          xs: 0,
          md: 3,
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
        <Grid item md={4}>
          <ExploreCard />
        </Grid>
      </Grid>
    </Box>
  );
}
