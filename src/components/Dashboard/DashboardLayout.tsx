import React, { useState } from "react";
import { Box } from "@mui/material";
import DashboardMainView from "./DashboardMainView";
import DashboardSideBar from "./DashboardSideBar";
import TemporaryDrawer from "./DashbaordDrawer";

interface DashboardLayoutProps {
  data: Array<any>;
  dashboard: React.ReactNode;
  view: String;
  setView: any;
}

const DashboardLayout = ({ data, dashboard, view, setView }: DashboardLayoutProps) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          alignItems: "center",
          padding: "10px 20px",
          boxShadow: 1,
          marginBottom: "10px",
          display: {
            xs: "flex",
            lg: "none",
          },
          visibility: {
            xs: "visible",
            lg: "hidden",
          },
        }}
      >
        <TemporaryDrawer view={view} setView={setView} data={data} />
      </Box>

      <Box
        sx={{
          display: "flex",
          alignSelf: "stretch",
        }}
      >
        <DashboardSideBar data={data} view={view} setView={setView} />
        <DashboardMainView>{dashboard}</DashboardMainView>
      </Box>
    </>
  );
};

export default DashboardLayout;
