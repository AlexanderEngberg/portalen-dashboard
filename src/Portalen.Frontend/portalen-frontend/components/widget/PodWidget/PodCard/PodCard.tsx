import { ReactElement } from "react";
import { PodPlaylist, Player } from "components/widget/PodWidget";
import { Card, CardContent, styled } from "@mui/material";

export function PodCard(): ReactElement {
  return (
    <Card>
      <CardContent>
        <Player />
        <PodPlaylist />
      </CardContent>
    </Card>
  );
}
