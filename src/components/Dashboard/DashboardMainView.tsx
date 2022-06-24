import { Box } from "@mui/system";
import React from "react";

interface DashboardMainViewProps {
  children: JSX.Element | React.ReactNode;
}

const DashboardMainView = ({ children }: DashboardMainViewProps) => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          boxShadow: 1,
          background: "white",
          flex: 1,
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default DashboardMainView;
