import {
  useContext,
  useState,
  useEffect,
  useRef,
  Ref,
  ChangeEvent,
} from "react";
import { PlayerStateContext } from "context/PlayStateProvider";
import { Box, Typography, Slider, IconButton, Stack } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import VolumeUpRounded from "@mui/icons-material/VolumeUpRounded";
import VolumeDownRounded from "@mui/icons-material/VolumeDownRounded";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from "@mui/icons-material/Replay10";

const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export function MediaControls() {
  const { playing, togglePlaying, podcasts, currentSong, prevPod, nextPod } =
    useContext(PlayerStateContext);
  const { file_url } = podcasts[currentSong] || {};

  const audioRef = useRef<HTMLAudioElement>(null);
  const [statevolum, setStateVolum] = useState(0.3);
  const [dur, setDur] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const theme = useTheme();
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const lightIconColor =
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)";

  const fmtMSS = (s: number) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + ~~s;
  };

  const handleProgress = (value: number) => {
    let compute = (value * dur) / 100;
    setCurrentTime(compute);
    if (audioRef.current != undefined) {
      audioRef.current.currentTime = compute;
    }
  };

  const handleVolume = (value: number) => {
    let compute = value / 100;
    setStateVolum(compute);
    if (audioRef.current != undefined) {
      audioRef.current.volume = compute;
    }
  };

  const forward10Sec = () => {
    let compute = currentTime + 10;
    setCurrentTime(compute);
    if (audioRef.current != undefined) {
      audioRef.current.currentTime = compute;
    }
  };

  const replay10Sec = () => {
    let compute = currentTime - 10;
    setCurrentTime(compute);
    if (audioRef.current != undefined) {
      audioRef.current.currentTime = compute;
    }
  };

  useEffect(() => {
    playing ? audioRef.current?.play() : audioRef.current?.pause();
  });
  return (
    <Box sx={{ width: "100%" }}>
      <audio
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onCanPlay={(e) => setDur(e.currentTarget.duration)}
        /* onEnded={handleEnd} */
        ref={audioRef}
        preload="true"
        src={file_url}
      />
      <Slider
        aria-label="time-indicator"
        size="small"
        value={dur ? (currentTime * 100) / dur : 0}
        min={0}
        step={1}
        max={100}
        onChange={(_, value) => handleProgress(value as number)}
        sx={{
          color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
          height: 4,
          "& .MuiSlider-thumb": {
            width: 8,
            height: 8,
            transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
            "&:before": {
              boxShadow: "0 2px 12px 0 rgba(0,0,0,0.4)",
            },
            "&:hover, &.Mui-focusVisible": {
              boxShadow: `0px 0px 0px 8px ${
                theme.palette.mode === "dark"
                  ? "rgb(255 255 255 / 16%)"
                  : "rgb(0 0 0 / 16%)"
              }`,
            },
            "&.Mui-active": {
              width: 20,
              height: 20,
            },
          },
          "& .MuiSlider-rail": {
            opacity: 0.28,
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: -2,
        }}
      >
        <TinyText>{fmtMSS(currentTime)}</TinyText>
        <TinyText>-{fmtMSS(dur - currentTime)}</TinyText>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -1,
        }}
      >
        <IconButton
          aria-label="replay 10sec"
          onClick={() => {
            replay10Sec();
          }}
        >
          <Replay10Icon fontSize="medium" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label="previous song"
          onClick={() => {
            prevPod();
          }}
        >
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label={playing ? "play" : "pause"}
          disabled={currentSong < 0}
          onClick={() => togglePlaying()}
        >
          {playing ? (
            <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
          ) : (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
          )}
        </IconButton>
        <IconButton
          aria-label="next song"
          onClick={() => {
            nextPod();
          }}
        >
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label="forward 10sec"
          onClick={() => {
            forward10Sec();
          }}
        >
          <Forward10Icon fontSize="medium" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1, px: 1 }}
        alignItems="center"
        justifyContent="center"
      >
        <VolumeDownRounded htmlColor={lightIconColor} />
        <Slider
          aria-label="Volume"
          value={Math.round(statevolum * 100)}
          onChange={(_, value) => handleVolume(value as number)}
          sx={{
            width: "60%",
            color: theme.palette.mode === "dark" ? "#fff" : "rgba(0,0,0,0.87)",
            "& .MuiSlider-track": {
              border: "none",
            },
            "& .MuiSlider-thumb": {
              width: 18,
              height: 18,
              backgroundColor: "#fff",
              "&:before": {
                boxShadow: "0 4px 8px rgba(0,0,0,0.4)",
              },
              "&:hover, &.Mui-focusVisible, &.Mui-active": {
                boxShadow: "none",
              },
            },
          }}
        />
        <VolumeUpRounded htmlColor={lightIconColor} />
      </Stack>
    </Box>
  );
}
