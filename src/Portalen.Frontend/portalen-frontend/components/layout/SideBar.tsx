import { useState } from "react";
import {
  CollapsedDrawer,
  PortalDrawer,
  DrawerHeader,
} from "../../styles/drawer";
import {
  Box,
  Divider,
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

import Image from "next/image";
import headerPic from "../../public/react-hero-logo.9394d800.svg";

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
          <Box sx={{ pr: 4, pl: 4 }}>
            <DrawerHeader>
              <IconButton color="secondary" onClick={() => handlCollapsed()}>
                <CloseIcon />
              </IconButton>
            </DrawerHeader>
            <Divider sx={{ borderColor: "#2e3650" }} />
            <List>
              {["Overview", "Settings"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block", mb: 2 }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                        minWidth: 0,
                        mr: 3,
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <HomeIcon /> : <SettingsIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ color: "white" }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </CollapsedDrawer>
      ) : (
        <div
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <PortalDrawer variant="permanent" open={open}>
            <DrawerHeader></DrawerHeader>
            <List>
              {["Overview", "Settings"].map((text, index) => (
                <ListItem
                  key={text}
                  disablePadding
                  sx={{ display: "block", mb: 2 }}
                >
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "white",
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index % 2 === 0 ? <HomeIcon /> : <SettingsIcon />}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0, color: "white" }}
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
