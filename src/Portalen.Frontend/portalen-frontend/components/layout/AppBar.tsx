import { PortalAppBar } from "../../styles/appBar";
import { Box, Toolbar, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export interface AppBarProps {
  handlCollapsed: Function;
}

export default function AppBar({ handlCollapsed }: AppBarProps) {
  return (
    <PortalAppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
          <Box>
            <IconButton
              size="large"
              edge="end"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => handlCollapsed()}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </PortalAppBar>
  );
}
