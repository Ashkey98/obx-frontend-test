import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import NavLink from "../../components/NavLink";
import theme from "../../theme";

const SingPass = () => {
  return (
    <>
      <ContainerWrapper>
        <Paper
          elevation={6}
          sx={{
            maxWidth: "600px",
            padding: "50px",
            margin: "0 auto",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.primary.main,
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Login
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Login to a new experience
            </Typography>{" "}
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            ></Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Scan and Login with Singpass app
            </Typography>
            <img width={"100%"} src="qr.png" alt="" />
            <Typography
              sx={{
                fontSize: "18px",
              }}
            >
              OR
            </Typography>
            <Button
              variant="outlined"
              sx={{
                margin: "0 auto",
                borderRadius: "3px",
                marginTop: "20px",
                padding: "10px 40px",
              }}
            >
              <Typography>
                <NavLink
                  linkPath="/login"
                  styles={{
                    "&.MuiLink-root": {
                      "&:hover": {
                        color: "initial",
                      },
                    },
                  }}
                >
                  Login with Email?
                </NavLink>
              </Typography>
            </Button>
          </Box>
        </Paper>
      </ContainerWrapper>
    </>
  );
};

export default SingPass;
