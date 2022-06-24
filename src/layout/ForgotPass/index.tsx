<<<<<<< HEAD
import { Box, Button, FormHelperText, Paper, TextField, Typography } from "@mui/material";
=======
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
>>>>>>> initial commit
import React from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import NavLink from "../../components/NavLink";
import { flexColumn } from "../../styles/styles";

const ForgotPass = () => {
<<<<<<< HEAD
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
=======
>>>>>>> initial commit
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
                color: "#4f46e5",
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Login
            </Typography>
          </Box>
          <Box>
<<<<<<< HEAD
            <FormHelperText error>{error}</FormHelperText>
=======
>>>>>>> initial commit
            <TextField
              type="email"
              id="email"
              label="Enter your Email"
              variant="outlined"
<<<<<<< HEAD
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
                if (e.target.value.length > 0) {
                  setError("");
                } else {
                  setError("Please enter your email");
                }
              }}
=======
>>>>>>> initial commit
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
            />
            <Box
              sx={{
                ...flexColumn,
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  borderRadius: "4px",
                  margin: "20px 0",
                  padding: "10px 30px",
                }}
              >
                <Typography>Submit</Typography>
              </Button>
              <br />
              <NavLink
                styles={{
                  fontSize: "16px",
                  color: "#4f46e5",
                  opacity: 0.9,
                  padding: "0",
                  display: "inline-block",
                }}
                linkPath="/login"
              >
                Back to Login ?
              </NavLink>
            </Box>
          </Box>
        </Paper>
      </ContainerWrapper>
    </>
  );
};

export default ForgotPass;
