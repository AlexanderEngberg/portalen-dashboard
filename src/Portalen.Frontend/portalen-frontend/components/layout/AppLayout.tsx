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
    <>
      <AppBar handlCollapsed={handlCollapsed} />
      <Box sx={{ display: "flex", position: "relative" }}>
        <SideBar handlCollapsed={handlCollapsed} collapsed={collapsed} />
        <Box
          component="main"
          sx={{ display: "flex", flexGrow: 1, p: "1rem 1rem" }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
