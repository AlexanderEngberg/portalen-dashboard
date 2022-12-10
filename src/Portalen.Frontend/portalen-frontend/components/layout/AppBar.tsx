import { PortalAppBar } from "../../styles/appBar";
import { Box, Toolbar, Container, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export interface AppBarProps {
  handleDrawerOpen: Function;
}

export default function AppBar({ handleDrawerOpen }: AppBarProps) {
  return (
    <PortalAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "flex-end" }}>
          <Box>
            <IconButton
              size="large"
              edge="end"
              color="secondary"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => handleDrawerOpen()}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </PortalAppBar>
  );
}
