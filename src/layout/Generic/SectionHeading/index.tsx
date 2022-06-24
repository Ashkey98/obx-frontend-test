import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface SectionHeadingProps {
  title: string;
}

const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <Box
      sx={{
        background: "linear-gradient(\n90deg\n,#061161,#298ff1)",
        padding: "60px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" color="white">
          {title}
        </Typography>
      </Container>
    </Box>
  );
};

export default SectionHeading;
