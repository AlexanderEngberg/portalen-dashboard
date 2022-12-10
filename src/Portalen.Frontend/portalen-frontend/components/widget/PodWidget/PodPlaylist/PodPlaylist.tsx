import { useContext } from "react";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { PlayerStateContext } from "context/PlayStateProvider";

export function PodPlaylist() {
  const { podcasts, playing, togglePlaying, currentSong, setCurrent } =
    useContext(PlayerStateContext);
  return (
    <>
      {podcasts.map((podcast, index) => (
        <ListItem key={index} disablePadding>
          <ListItemButton
            selected={currentSong === index}
            onClick={() => {
              setCurrent(index), togglePlaying();
            }}
          >
            <ListItemIcon>
              {playing && currentSong === index ? (
                <PauseIcon />
              ) : (
                <PlayArrowIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={`${podcast.program}, ${podcast.info}`} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}
