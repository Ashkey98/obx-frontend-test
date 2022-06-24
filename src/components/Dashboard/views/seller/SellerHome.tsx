import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { flexBetween, flexCenter } from "../../../../styles/styles";
import SellerInfoCards from "./SellerInfoCards";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GavelIcon from "@mui/icons-material/Gavel";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const SellerHome = () => {
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
          Welcome Seller
        </Typography>
        <Grid container spacing={2.5}>
          <Grid item xs={12} md={6} lg={3}>
            <SellerInfoCards data={["50", "Tenders"]} icon={<GavelIcon />} bgcolor={"#ef4444"} />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SellerInfoCards
              data={["80Mn", "Value"]}
              icon={<MonetizationOnIcon />}
              bgcolor={"##10b981"}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SellerInfoCards
              data={["50k", "Views"]}
              icon={<RemoveRedEyeIcon />}
              bgcolor={"#f59e0b"}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <SellerInfoCards
              data={["20", "Awarded"]}
              icon={<EmojiEventsIcon />}
              bgcolor={"#6366f1"}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2.5}>
          <Grid item xs={12} lg={8}>
            <Box
              sx={{
                boxShadow: 3,
                padding: "10px 20px",
              }}
            >
              <Box
                sx={{
                  ...flexBetween,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  New Messages
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    background: "#dc2626",
                    color: "white",
                  }}
                >
                  <DeleteOutline /> Delete
                </Button>
              </Box>
              <Box
                sx={{
                  flexDirection: "column",
                }}
              >
                {[...Array(7)].map((x, i) => {
                  return (
                    <Box
                      key={i}
                      sx={{
                        ...flexBetween,
                        border: "1px solid lightgrey",
                        padding: "10px 6px",
                        margin: "10px 0",
                      }}
                    >
                      <Box
                        sx={{
                          ...flexCenter,
                        }}
                      >
                        <input type="checkbox" name="" id="" /> &nbsp;
                        <Typography>ABC Tenders</Typography>
                      </Box>
                      <Typography>Imporve on the Content...</Typography>
                      <Typography>9:29 AM</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                boxShadow: 1,
                height: "100%",
                width: "100%",
              }}
            >
              <Typography sx={{ fontSize: "24px", padding: "10px 20px" }}>Notifications</Typography>
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
    </>
  );
};

export default SellerHome;
