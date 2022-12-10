import { ReactElement } from "react";
import { useContext } from "react";
import { PodPlaylist, Player } from "components/widget/PodWidget";
import { Card, CardContent, styled } from "@mui/material";
import { PlayerStateContext } from "context/PlayStateProvider";

export function PodCard(): ReactElement {
  const { podcasts, currentSong } = useContext(PlayerStateContext);
  return (
    <Card>
      <CardContent>
        <Player />
        <PodPlaylist />
      </CardContent>
    </Card>
  );
}
