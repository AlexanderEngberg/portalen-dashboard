import React, { useState } from "react";
import { ReactNode } from "react";
import { Box } from "@mui/material";
import AppBar from "./AppBar";
import SideBar from "./SideBar";

export interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const handlCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar handlCollapsed={handlCollapsed} />
      <SideBar handlCollapsed={handlCollapsed} collapsed={collapsed} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
