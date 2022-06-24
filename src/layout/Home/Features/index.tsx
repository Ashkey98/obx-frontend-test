import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContainerWrapper from "../../../components/ContainerWrapper";

const Features = () => {
  const featuresList = [
    { title: "User OnBoarding Guide", srcImage: "icon3.png" },
    { title: "Risk - Assessment Checklist", srcImage: "icon3.png" },
    { title: "Live Document Preview", srcImage: "icon3.png" },
    { title: "Contract Customization (Letterheads, fonts)", srcImage: "icon3.png" },
    { title: "Supplier Engagement (RFIs)", srcImage: "icon3.png" },
  ];

  return (
    <>
      <Box>
        <ContainerWrapper>
          <Grid container>
            <Grid item xs={12} md={6}>
              <Typography variant="h2">OBX Generating Engine</Typography>
              <Typography
                variant="body1"
                sx={{
                  marginBottom: "20px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ut fugiat ipsam
                adipisci deleniti libero quam reiciendis repudiandae nostrum ex, vero quisquam nulla
                voluptates.
              </Typography>
              {featuresList.map((feature, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      marginRight: "20px",
                      alignItems: "center",
                    }}
                  >
                    <img src={`${feature.srcImage}`} alt={`${feature.title}`} height={60} />
                    <Typography variant="body2" sx={{ fontSize: "20px", marginLeft: "10px" }}>
                      {feature.title}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={12} md={6}>
              <img src={"edu_2.png"} width={"100%"} height={"auto"} />
            </Grid>
          </Grid>
        </ContainerWrapper>
      </Box>
    </>
  );
};

export default Features;
