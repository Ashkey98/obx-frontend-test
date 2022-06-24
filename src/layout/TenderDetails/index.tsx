import React from "react";
import { WhatsappRounded } from "@mui/icons-material";
import { Button, Chip, Divider, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import ContainerWrapper from "../../components/ContainerWrapper";
import theme from "../../theme";

const TenderDetails = () => {
  const tenderDetails = {
    Tender_ID: "64354",
    Tender_Value: "SDG 30Mn",
    Published: "20 Feb 2021",
    Result_Date: "24 Dec 2021",
    Category: "Facility",
    Procurment_Method: "Open",
    Total_Views: 6546,
    Type_Of_Facility: "Seller",
    Sercices_Required: (
      <Box
        sx={{
          marginLeft: "50px",
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        <Chip size="small" label="service a" color="primary" />
        <Chip size="small" label="service b" color="primary" />
        <Chip size="small" label="service c" color="primary" />
        <Chip size="small" label="service d" color="primary" />
        <Chip size="small" label="service e" color="primary" />
      </Box>
    ),
  };
  return (
    <>
      <ContainerWrapper>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Paper elevation={3}>
              <Box
                sx={{
                  padding: "20px",
                }}
              >
                <Typography marginBottom={"0"} variant="h4">
                  XYZ Tender
                </Typography>
              </Box>
              <Divider />
              <Box>
                <Box
                  sx={{
                    padding: "20px",
                  }}
                >
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat placeat
                    quisquam fugiat nulla fuga animi sequi impedit cumque ipsam quod aliquid,
                    temporibus, possimus, excepturi dignissimos repudiandae veritatis sit
                    accusantium natus!
                  </Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur perspiciatis doloribus rem labore, harum
                    facilis cupiditate nam similique dignissimos aliquid soluta nemo...
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Share the Tender&nbsp;
                    <WhatsappRounded
                      sx={{
                        color: "green",
                      }}
                    />
                  </Typography>
                  <Link href="/tenderparticipation">
                    <Button
                      sx={{
                        padding: "10px 40px",
                        backgroundColor: theme.palette.secondary.main,
                        ":hover": {
                          backgroundColor: theme.palette.secondary.dark,
                        },
                      }}
                      variant="contained"
                    >
                      <Typography>Login to Participate</Typography>
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3}>
              <Box>
                {Object.entries(tenderDetails).map(([key, value], index) => {
                  return (
                    <Box key={index}>
                      <Typography
                        component={"div"}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "14px 20px",
                          gapX: "20px",
                        }}
                      >
                        <span style={{ fontSize: "18px" }}>{key}</span>
                        <span style={{ fontSize: "16px", color: "gray" }}>{value}</span>
                      </Typography>
                      <Divider />
                    </Box>
                  );
                })}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </>
  );
};

export default TenderDetails;
