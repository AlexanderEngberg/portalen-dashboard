import { ReactElement } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { PodCard } from "components/widget/PodWidget/PodCard";
import PlayerProvider from "./../context/PlayStateProvider";

export default function Home(): ReactElement {
  return (
    <>
      <PlayerProvider>
        <Grid
          container
          spacing="20px"
          // rowSpacing="20px"
          // columnSpacing="20px"
        >
          <Grid item xs={12} md={6}>
            <PodCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <PodCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <PodCard />
          </Grid>
          <Grid item xs={12} md={6}>
            <PodCard />
          </Grid>
        </Grid>
      </PlayerProvider>
    </>
  );
}
