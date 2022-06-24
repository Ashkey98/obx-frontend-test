import React, { useEffect, useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import AgentInfoCards from "./AgentInfoCards";

const AgentHome = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "28px",
          }}
        >
          Welcome Agent
        </Typography>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <AgentInfoCards
                    color="linear-gradient(to right, #ffe000, #799f0c)"
                    title={"TOTAL USERS"}
                    value={"1314"}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AgentInfoCards
                    color="linear-gradient(to right, #2193b0, #6dd5ed)"
                    title={"TOTAL USER GROUP"}
                    value={"12"}
                  />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={3}
                sx={{
                  marginTop: "20px",
                }}
              >
                <Grid item xs={12} md={6}>
                  <AgentInfoCards
                    color="linear-gradient(to right, #ec008c, #fc6767)"
                    title={"TOTAL TENDERS"}
                    value={"231"}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <AgentInfoCards
                    color="linear-gradient(to right, #2c3e50, #3498db)"
                    title={"TOTAL PROPERTIES"}
                    value={"93"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  boxShadow: 1,
                  height: "100%",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "24px",
                    padding: "10px 20px",
                    backgroundColor: color ? color : "inherit",
                    color: "white",
                  }}
                >
                  Notifications
                </Typography>
                <Divider />
                {[...Array(8)].map((x, index) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "6px 10px",
                      }}
                      key={index}
                    >
                      <ArrowRightAltIcon sx={{ color: "red", marginRight: "4px" }} />
                      <Typography
                        sx={{
                          fontSize: "12px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, placeat?
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default AgentHome;
