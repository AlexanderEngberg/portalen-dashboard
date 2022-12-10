import { Box, Typography, CardMedia } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const CoverImage = styled("div")({
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

export interface MediaControlsHeaderProps {
  imageUrl: string;
  program: string;
  info: string;
}

export function MediaControlsHeader({
  imageUrl,
  program,
  info,
}: MediaControlsHeaderProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CoverImage>
        <CardMedia component="img" image={imageUrl} alt={program} />
      </CoverImage>
      <Box sx={{ ml: 1.5, minWidth: 0 }}>
        <Typography noWrap>
          <b>{program}</b>
        </Typography>
        <Typography noWrap letterSpacing={-0.25}>
          {info}
        </Typography>
      </Box>
    </Box>
  );
}
