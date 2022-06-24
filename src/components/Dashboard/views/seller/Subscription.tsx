import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { flexCenter, StyledTextField } from "../../../../styles/styles";
import Title from "../../ults/Title";
import ArrowBack from "@mui/icons-material/ArrowBack";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";

const Subscription = () => {
  const [view, setView] = useState("home");

  const [color, setColor] = useState("");

  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  return (
    <>
      {view === "home" ? (
        <Box
          sx={{
            padding: {
              xs: "20px 20px 0 20px",
              sm: "50px 20px 0 20px",
              md: "100px 20px 0 20px",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: {
                lg: "80%",
                md: "90%",
              },
              width: "100%",
              margin: "0 auto",
            }}
          >
            <Box
              sx={{
                backgroundColor: color ? color : "inherit",
                padding: "28px",
                textAlign: "center",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                Subscription
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "40px 20px",
                textAlign: "center",
                ...flexCenter,
                flexDirection: "column",
                gap: "30px",
                boxShadow: 3,
              }}
            >
              <Box
                sx={{
                  color: color ? color : "inherit",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "48px",
                    fontWeight: "800",
                    lineHeight: 1,
                  }}
                >
                  SGD 350
                </Typography>
                <Typography
                  sx={{
                    fontSize: "24px",
                    fontWeight: "500",
                  }}
                >
                  Per Year
                </Typography>
              </Box>
              <Typography
                sx={{
                  width: {
                    lg: "80%",
                    md: "90%",
                  },
                  fontWeight: "600",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed laboriosam atque
                tenetur at officiis ea, quisquam a aperiam doloremque, architecto numquam iusto eum
                consectetur eius inventore quas totam. Esse, repellendus.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  padding: "6px 20px",
                  backgroundColor: color ? color : "inherit",
                }}
                onClick={() => setView("form")}
              >
                <Typography
                  sx={{
                    fontSize: "20px",
                  }}
                >
                  Subscribe Now
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
      ) : view === "form" ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <Title title={"Payment Gateway"}>
              <Typography
                onClick={() => setView("home")}
                sx={{
                  color: color ? color : "inherit",
                  cursor: "pointer",
                  ...flexCenter,
                }}
              >
                <ArrowBack /> Back
              </Typography>
            </Title>
            <Box
              sx={{
                padding: "40px",
              }}
            >
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="Name" label="Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="Email" label="Email" type="email" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="Company Name" label="Company Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="Door No." label="Door No." variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="Street" label="Street" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="City" label="City" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="State" label="State" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="Country" label="Country" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    id="Postcode"
                    label="Postcode"
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    id="Phone Number"
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ ...flexCenter }}>
            <Title title={"Paypal"}>
              <MonetizationOnOutlinedIcon sx={{ color: "blue" }} />
            </Title>
          </Box>
          <Box
            sx={{
              padding: "0 0 50px 0",
            }}
          >
            <Title title={"Debit or Credit Card"}>
              <CreditCardOutlinedIcon sx={{ color: "blue" }} />
            </Title>
            <Box
              sx={{
                margin: "30px",
              }}
            >
              <Grid
                container
                spacing={3}
                sx={{
                  marginBottom: "30px",
                }}
              >
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    id="Card Holder Name"
                    label="Card Holder Name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField id="Card Number" label="Card Number" variant="outlined" />
                </Grid>
              </Grid>
              <Grid
                container
                spacing={3}
                sx={{
                  marginBottom: "30px",
                }}
              >
                <Grid item xs={12} md={4}>
                  <StyledTextField
                    id="Expire Month"
                    label="Expire Month"
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledTextField
                    id="Expire Year"
                    label="Expire Year"
                    type="number"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <StyledTextField id="CVV" label="CVV" variant="outlined" type="number" />
                </Grid>
              </Grid>
              <Box sx={{}}>
                <Typography>
                  <input type="checkbox" />
                  By continuing, you agree to conditions
                </Typography>
              </Box>
              <Button
                sx={{
                  ...flexCenter,
                  margin: "20px auto",
                  fontSize: "20px",
                  padding: "8px 40px",
                  backgroundColor: color ? color : "inherit",
                }}
                variant="contained"
              >
                Pay 350.00 SGD
              </Button>
            </Box>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default Subscription;
