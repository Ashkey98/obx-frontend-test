import React, { useEffect } from "react";
import { Box } from "@mui/system";
import ContainerWrapper from "../ContainerWrapper";
import DashboardLayout from "./DashboardLayout";

interface DashboardProps {
  data: Array<any>;
  dashboard: React.ReactNode;
  view: String;
  setView: any;
}

const Dashboard = ({ data, dashboard, view, setView }: DashboardProps) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "whitesmoke",
        }}
      >
        <ContainerWrapper>
          <DashboardLayout view={view} setView={setView} data={data} dashboard={dashboard} />
        </ContainerWrapper>
      </Box>
    </>
  );
};

export default Dashboard;
