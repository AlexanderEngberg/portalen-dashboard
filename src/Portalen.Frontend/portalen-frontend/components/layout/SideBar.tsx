import { useState } from "react";
import { PortalDrawer, DrawerHeader } from "../../styles/drawer";
import {
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

export interface SideBarProps {
  open: boolean;
  handleDrawerOpen: Function;
}

export default function SideBar({ open, handleDrawerOpen }: SideBarProps) {
  return (
    <PortalDrawer variant="permanent" open={open}>
      {open ? (
        <IconButton color="secondary" onClick={() => handleDrawerOpen()}>
          <CloseIcon />
        </IconButton>
      ) : null}
      <DrawerHeader></DrawerHeader>
    </PortalDrawer>
  );
}
