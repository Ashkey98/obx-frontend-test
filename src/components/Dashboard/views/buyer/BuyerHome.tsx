import React from "react";
import { Box } from "@mui/system";
import { Avatar, Divider, Grid, Typography } from "@mui/material";
import BuyerInfoCards from "./BuyerInfoCards";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Value", "Viewers", "Tenders", "Awarded"],
  datasets: [
    {
      label: "# of Votes",
      data: [50, 19, 3, 5],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const BuyerHome = () => {
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
          Welcome Buyer
        </Typography>
        <Grid maxWidth={"100%"} container spacing={2.5}>
          <Grid item xs={12} md={4}>
            <BuyerInfoCards
              title={"Tenders"}
              value={"67"}
              bgcolor={"linear-gradient(to left, #ff00cc, #333399)"}
              imgUrl={"tenderizer.png"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BuyerInfoCards
              title={"Value"}
              value={"$24,567"}
              bgcolor={"linear-gradient(to left, #0575e6, #021b79)"}
              imgUrl={"transaction.png"}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <BuyerInfoCards
              title={"Awarded"}
              value={"16"}
              bgcolor={"linear-gradient(to left, #00f260, #0575e6)"}
              imgUrl={"medala.png"}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                boxShadow: 1,
                height: "100%",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "24px", padding: "10px 20px" }}>Statistics</Typography>
              <Divider />
              <Box
                sx={{
                  padding: "40px 10px",
                }}
              >
                <Pie data={data} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                boxShadow: 1,
                height: "100%",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "24px", padding: "10px 20px" }}>Inbox</Typography>
              <Divider />
              {[1, 2, 3, 4].map((x, index) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "6px 20px",
                      borderBottom: "1px solid lightgrey",
                      cursor: "pointer",
                    }}
                    key={index}
                  >
                    <Avatar sx={{ width: "30px", height: "30px" }} />
                    <Typography sx={{ display: "flex", flexDirection: "column" }}>
                      <span
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        John Doe
                      </span>
                      <span
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        Hey, There I am avaliable
                      </span>
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                      }}
                    >
                      13:40 PM
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                boxShadow: 1,
                height: "100%",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "24px", padding: "10px 20px" }}>Notifications</Typography>
              <Divider />
              {[...Array(7)].map((x, index) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      padding: "6px 20px",
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
    </>
  );
};

export default BuyerHome;
