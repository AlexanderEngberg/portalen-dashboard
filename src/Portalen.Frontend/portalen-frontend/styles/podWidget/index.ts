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