import React, { useState } from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import ContainerWrapper from "../../components/ContainerWrapper";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { flex, flexBetween, flexColumn } from "../../styles/styles";

const Announcments = () => {
  const [view, setView] = useState("main");

  const announcmentsData = [
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a perferendis atque provident optio.",
      date: "6 October 2021",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a perferendis atque provident optio.",
      date: "6 October 2021",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a perferendis atque provident optio.",
      date: "6 October 2021",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a perferendis atque provident optio.",
      date: "6 October 2021",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a perferendis atque provident optio.",
      date: "6 October 2021",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a perferendis atque provident optio.",
      date: "6 October 2021",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a perferendis atque provident optio.",
      date: "6 October 2021",
    },
    {
      info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis a perferendis atque provident optio.",
      date: "6 October 2021",
    },
  ];

  return (
    <>
      <Box>
        <ContainerWrapper>
          {view === "main" ? (
            <Grid container spacing={3}>
              {announcmentsData.map((announcment, index) => {
                return (
                  <Grid key={index} item xs={12} md={4} lg={3}>
                    <Paper
                      elevation={3}
                      sx={{
                        padding: "28px 20px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "18px",
                          lineHeight: "1.3",
                        }}
                      >
                        {announcment.info}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "Grey",
                          margin: "10px 0",
                        }}
                      >
                        {announcment.date}
                      </Typography>

                      <Button onClick={() => setView("details")}>
                        <Typography
                          sx={{
                            color: "#e94545",
                            ...flex,
                          }}
                        >
                          Read More <ArrowRightAltIcon />
                        </Typography>
                      </Button>
                    </Paper>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Box
              sx={{
                ...flexColumn,
                boxShadow: 3,
                padding: "20px 30px",
              }}
            >
              <Box
                sx={{
                  ...flexBetween,
                  padding: "12px 24px",
                  borderBottom: "1px solid lightgray",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: "600",
                    lineHeight: 1,
                  }}
                >
                  Announcment
                  <Typography
                    sx={{
                      fontSize: "16px",
                      color: "Grey",
                      margin: "10px 0",
                    }}
                  >
                    6 October 2021
                  </Typography>
                </Typography>
                <Button onClick={() => setView("main")}>
                  <Typography
                    sx={{
                      ...flex,
                    }}
                  >
                    <KeyboardBackspaceIcon /> Back
                  </Typography>
                </Button>
              </Box>
              <Box
                sx={{
                  padding: "30px 24px",
                }}
              >
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta officia
                  laborum reiciendis rem debitis? Aliquid odio nobis accusantium qui dolorum fugiat
                  quos porro earum eum, optio, illo rem voluptatem! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Quidem numquam quo eius quae quod nemo itaque velit
                  nam perferendis! Nam?
                  <br /> <br />
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam incidunt iste
                  officia cumque! In perferendis sapiente, sit consequuntur natus at.
                  <br /> <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem soluta officia
                  laborum reiciendis rem debitis? Aliquid odio nobis accusantium qui dolorum fugiat
                  quos porro earum eum, optio, illo rem voluptatem! Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Quidem numquam quo eius quae quod nemo itaque velit
                  nam perferendis! Nam?
                </Typography>
              </Box>
            </Box>
          )}
        </ContainerWrapper>
      </Box>
    </>
  );
};

export default Announcments;
