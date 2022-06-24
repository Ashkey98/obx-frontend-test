import { Container } from "@mui/material";
import React, { ReactChildren, ReactChild } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const ContainerWrapper = ({ children }: ContainerProps) => {
  return (
    <Container
      className="testing"
      maxWidth="lg"
      sx={{
        padding: {
          xs: "50px 10px",
          lg: "50px 0",
        },
      }}
    >
      {children}
    </Container>
  );
};

export default ContainerWrapper;
