import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContainerWrapper from "../../../components/ContainerWrapper";

const MileStones = () => {
  const milestones = [
    {
      title: "Contact value",
      value: "9.8M",
      src: "icon3.png",
    },
    {
      title: "Estates",
      value: "600+",
      src: "icon4.png",
    },
    {
      title: "Tenders",
      value: "2000+",
      src: "icon5.png",
    },
    {
      title: "Vendors",
      value: "4000+",
      src: "icon6.png",
    },
  ];

  return (
    <>
      <Box>
        <ContainerWrapper>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2" textAlign="center">
              Our Key Milestones
            </Typography>
            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "60px 0",
              }}
            >
              {milestones.map((data, index) => {
                return (
                  <Grid
                    xs={12}
                    md={6}
                    lg={3}
                    item
                    key={index}
                    sx={{
                      flexGrow: "1",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src={data.src} alt={data.title} width={100} />
                    <Typography
                      variant="body2"
                      sx={{ fontSize: "50px", fontWeight: "600" }}
                    >
                      {data.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "22px",
                        fontWeight: "900",
                      }}
                    >
                      {data.title}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </ContainerWrapper>
      </Box>
    </>
  );
};

export default MileStones;
