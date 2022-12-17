import { Box, Typography, CardMedia } from "@mui/material";
import { CoverImage } from "../../../../styles/podWidget";

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
