import { usePlayerState } from "context/PlayStateProvider";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";

export function PodPlaylist() {
  const {
    state: { podcasts, currentSong, playing },
    functions: { setCurrent, togglePlaying },
  } = usePlayerState();
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
