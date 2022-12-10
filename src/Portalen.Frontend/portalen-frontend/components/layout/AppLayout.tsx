import React, { useState } from "react";
import { ReactNode } from "react";
import { Box } from "@mui/material";
import AppBar from "./AppBar";
import SideBar from "./SideBar";

export interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [open, setOpen] = useState(false);
  //Test
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar handleDrawerOpen={handleDrawerOpen} />
      <SideBar handleDrawerOpen={handleDrawerOpen} open={open} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
