import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AdminInfoCards from "./AdminInfoCards";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { LineGraph } from "./LineGraph";
import { flexBetween } from "../../../../styles/styles";

const AdminHome = () => {
  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "28px",
          }}
        >
          Welcome Admin
        </Typography>
        <Box
          sx={{
            margin: "30px 0 50px 0",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} lg={2.5}>
              <AdminInfoCards
                data={["50", "Buyers"]}
                icon={<ShoppingCartIcon />}
                bgcolor={"#ef4444"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={2.5}>
              <AdminInfoCards
                data={["80Mn", "Sellers"]}
                icon={<ShoppingCartIcon />}
                bgcolor={"##10b981"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3.5}>
              <AdminInfoCards
                data={["50k", "Managing Agents"]}
                icon={<ShoppingCartIcon />}
                bgcolor={"#f59e0b"}
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3.5}>
              <AdminInfoCards
                data={["20", "Facility Managers"]}
                icon={<ShoppingCartIcon />}
                bgcolor={"#6366f1"}
              />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2.5}>
            <Grid item xs={12} md={6}>
              <LineGraph />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Box
                  sx={{
                    backgroundColor: "#1f2937",
                    color: "white",
                    padding: "6px 10px",
                    fontWeight: "600",
                  }}
                >
                  <Typography>Subscription History</Typography>
                </Box>
                {[...Array(4)].map((x, i) => {
                  return (
                    <React.Fragment key={i}>
                      <Box
                        sx={{
                          backgroundColor: "white",
                          ...flexBetween,
                          padding: "4px 10px",
                        }}
                      >
                        <Typography>John Doe</Typography>
                        <Typography>RT37498y3YG</Typography>
                        <Typography>22-11-2021</Typography>
                        <Typography>View</Typography>
                      </Box>
                      <Box
                        sx={{
                          backgroundColor: "#e5e7eb",
                          ...flexBetween,
                          padding: "4px 10px",
                        }}
                      >
                        <Typography>John Doe</Typography>
                        <Typography>RT37498y3YG</Typography>
                        <Typography>22-11-2021</Typography>
                        <Typography>View</Typography>
                      </Box>
                    </React.Fragment>
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

export default AdminHome;
