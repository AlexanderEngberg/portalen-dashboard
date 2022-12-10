import { useState } from "react";
import {
  CollapsedDrawer,
  PortalDrawer,
  DrawerHeader,
} from "../../styles/drawer";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from "@mui/icons-material/Settings";

export interface SideBarProps {
  collapsed: boolean;
  handlCollapsed: Function;
}

export default function SideBar({ collapsed, handlCollapsed }: SideBarProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {collapsed ? (
        <CollapsedDrawer open={collapsed}>
          <IconButton color="secondary" onClick={() => handlCollapsed()}>
            <CloseIcon />
          </IconButton>
          <DrawerHeader />
          <List>
            {["Overview", "Settings"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <HomeIcon /> : <SettingsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </CollapsedDrawer>
      ) : (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <PortalDrawer variant="permanent" open={open}>
            <DrawerHeader />
            <List>
              {["Overview", "Settings"].map((text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <HomeIcon /> : <SettingsIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </PortalDrawer>
        </div>
      )}
    </>
  );
}
