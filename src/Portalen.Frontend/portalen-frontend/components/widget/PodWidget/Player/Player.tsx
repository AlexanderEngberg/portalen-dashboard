import { useContext, useEffect, useRef, useState } from "react";
import { PlayerStateContext } from "context/PlayStateProvider";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  MediaControlsHeader,
  MediaControls,
} from "components/widget/PodWidget";

const Widget = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
  backdropFilter: "blur(40px)",
}));

export function Player() {
  const { podcasts, currentSong } = useContext(PlayerStateContext);
  const { iconUrl, program, info } = podcasts[currentSong] || {};
  return (
    <Box sx={{ width: "100%", owerflow: "hidden" }}>
      <Widget>
        <MediaControlsHeader imageUrl={iconUrl} program={program} info={info} />
        <MediaControls />
      </Widget>
    </Box>
  );
}
