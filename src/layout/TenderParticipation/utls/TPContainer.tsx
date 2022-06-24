import React from "react";
import { Box } from "@mui/material";
import ContainerWrapper from "../../../components/ContainerWrapper";

interface TPContainerProps {
  children: React.ReactNode;
}

const TPContainer = ({ children }: TPContainerProps) => {
  return (
    <Box
      sx={{
        backgroundColor: "#eff2f9",
      }}
    >
      <ContainerWrapper>{children}</ContainerWrapper>
    </Box>
  );
};

export default TPContainer;
