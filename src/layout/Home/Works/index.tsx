import React from "react";
import NextLink from "next/link";

// MUI
import { Grid, Link as MUILink } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ContainerWrapper from "../../../components/ContainerWrapper";

const StyledWorkStep = styled("div")({
  "&::before": {
    content: '"01"',
    fontFamily: "Nunito Sans,sans-serif",
    position: "absolute",
    fontSize: "60px",
    top: "10%",
    left: "20%",
    zIndex: "-999",
    color: "#e94545",
    opacity: ".3",
  },
});

const images = [
  { src: "presentation.png", title: "Plan" },
  { src: "deal.png", title: "Collaborate" },
  { src: "planning.png", title: "Manage" },
  { src: "transaction.png", title: "Transact" },
];

const anncouncemntsData = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis praesentium quia ad, consectetur nemo illo? Porro, incidunt quidem ipsum recusandae expedita repudiandae solut.",
    date: "22-09-2021",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis praesentium quia ad, consectetur nemo illo? Porro, incidunt quidem ipsum recusandae expedita repudiandae solut.",
    date: "22-09-2021",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis praesentium quia ad, consectetur nemo illo? Porro, incidunt quidem ipsum recusandae expedita repudiandae solut.",
    date: "22-09-2021",
  },
];

const Works = () => {
  return (
    <>
      <Box>
        <ContainerWrapper>
          <Box sx={{ padding: "50px 0" }}>
            <Typography variant="h2">How It Works?</Typography>
            <Grid container>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {images.map((data, index) => {
                  return (
                    <Grid
                      key={index}
                      item
                      xs={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <img height={80} src={data.src} alt="img" />
                      <Typography
                        sx={{
                          marginTop: "20px",
                          fontSize: "26px",
                          fontWeight: "700",
                        }}
                      >
                        {data.title}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Latest Announcements</Typography>
                <Box
                  sx={{
                    padding: "30px 30px 20px",
                    boxShadow: 3,
                  }}
                >
                  {anncouncemntsData.map((data, index) => {
                    return (
                      <Box sx={{ marginBottom: "15px" }} key={index}>
                        <Typography
                          variant="body1"
                          sx={{ marginBottom: "10px" }}
                        >
                          {data.text}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ fontSize: "14px", marginBottom: "0" }}
                        >
                          {data.date}
                        </Typography>
                        <NextLink href="/" passHref>
                          <MUILink
                            variant="body2"
                            sx={{
                              color: "#e94545",
                              fontWeight: "600",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            Read more <ArrowRightAltIcon />
                          </MUILink>
                        </NextLink>
                      </Box>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </ContainerWrapper>
      </Box>
    </>
  );
};

export default Works;
