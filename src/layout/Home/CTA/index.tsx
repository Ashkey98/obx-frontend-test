import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ContainerWrapper from "../../../components/ContainerWrapper";

const CTA = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/bg.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        padding: "60px 0",
        color: "#fff",
      }}
    >
      <ContainerWrapper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontSize: "26px", marginBottom: "20px" }}>
            OBX has a suite of features that help Suppliers do better in their deals and tendering
          </Typography>
          <Typography
            sx={{
              padding: "0 30px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat mollitia distinctio,
            eaque aspernatur sequi iusto! Totam, delectus corrupti quam numquam reprehenderit sequi
            eaque neque itaque iusto maxime nihil. Doloremque, illum?
          </Typography>
          <Button
            sx={{
              backgroundColor: "#2a43c2",
              border: "2px solid #fff",
              padding: "6px 16px",
              color: "white",
              fontSize: "16px",
            }}
          >
            Contact Now
          </Button>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};

export default CTA;
