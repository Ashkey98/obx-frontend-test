import React from "react";
import { Button, FormHelperText, Grid, TextField, Typography } from "@mui/material";
import ContainerWrapper from "../../components/ContainerWrapper";
import { Box } from "@mui/system";

const Contact = () => {
  return (
    <>
      <ContainerWrapper>
        <Grid container spacing={3} alignItems={"center"}>
          <Grid item xs={12} md={6} order={{ md: 2, lg: 2 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.570304349625!2d103.84869240995917!3d1.358857538295332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1a602ff17c15%3A0xa9545dd23993859e!2sSingapore%20Polytechnic!5e0!3m2!1sen!2sin!4v1651826032333!5m2!1sen!2sin"
              width="100%"
              height="500px"
              frameBorder={0}
            ></iframe>
          </Grid>
          <Grid item xs={12} md={6} order={{ md: 1, lg: 1 }}>
            <Box mb={2}>
              <Typography sx={{ fontSize: "22px", fontWeight: "500" }}>
                Have any queries, send us a mail.
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "gray",
                }}
              >
                We will get back to you within 24hrs.
              </Typography>
            </Box>
            <Grid container rowGap={4} columnSpacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Company Name"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  multiline
                  minRows={8}
                  maxRows={10}
                  sx={{
                    width: "100%",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  sx={{ width: "100%", borderRadius: "3px", padding: "10px 0" }}
                >
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    Send
                  </Typography>
                </Button>
                <FormHelperText>
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    We respect your privacy, your inforamtion will not be shared with anyone in any
                    way or form.
                  </Typography>
                </FormHelperText>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </>
  );
};

export default Contact;
