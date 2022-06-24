import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BuyerInfoCards from "../buyer/BuyerInfoCards";
import BarGraphs from "./BarGraph";

const ManagerHome = () => {
  const color = "linear-gradient(to bottom, #000428, #004e92)";

  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "28px",
          }}
        >
          Welcome Manager
        </Typography>
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={4} container spacing={3} direction="column">
            <Grid item xs={12} md={3}>
              <BuyerInfoCards
                title={"Tenders"}
                value={"67"}
                bgcolor={"linear-gradient(to left, #4568dc, #b06ab3)"}
                imgUrl={"tenderizer.png"}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <BuyerInfoCards
                title={"Value"}
                value={"$24,567"}
                bgcolor={"linear-gradient(to left, #f12711, #f5af19)"}
                imgUrl={"transaction.png"}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <BuyerInfoCards
                title={"Value"}
                value={"$24,567"}
                bgcolor={"linear-gradient(to left, #8a2387, #e94057, #f27121)"}
                imgUrl={"transaction.png"}
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            <BarGraphs />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ManagerHome;
