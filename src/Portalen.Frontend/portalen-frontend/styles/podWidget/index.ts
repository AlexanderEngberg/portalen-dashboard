import { Slider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const CoverImage = styled("div")({
    width: 120,
    height: 120,
    objectFit: "cover",
    overflow: "hidden",
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.08)",
    "& > .MuiCardMedia-root": {
      width: "100%",
    },
  });

export const TimeSlider = styled(Slider)(({ theme }) => ({
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
}));

export const VolumeSlider = styled(Slider)(({ theme }) => ({
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
}));

export const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});