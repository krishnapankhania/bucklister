import { Box, Grid } from "@mui/material";
import * as React from "react";
import WannaDoCard from "./WannaDoCard";

export default function WannaDo() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        p: {
          xs: 3,
          md: 3,
        },
      }}
    >
      <Grid container spacing={1} >
        <Grid item md={6}>
          <WannaDoCard />
        </Grid>
        <Grid item md={6}>
          <WannaDoCard />
        </Grid>
        <Grid item md={6}>
          <WannaDoCard />
        </Grid>
        <Grid item md={6}>
          <WannaDoCard />
        </Grid>
        <Grid item md={6}>
          <WannaDoCard />
        </Grid>
        <Grid item md={6}>
          <WannaDoCard />
        </Grid>
      </Grid>
    </Box>
  );
}
