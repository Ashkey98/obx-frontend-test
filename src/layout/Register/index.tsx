import React, { useState } from "react";
import {
<<<<<<< HEAD
  Box,
=======
>>>>>>> initial commit
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
<<<<<<< HEAD
  FormHelperText,
=======
>>>>>>> initial commit
  LinearProgress,
  linearProgressClasses,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
<<<<<<< HEAD
import theme from "../../theme";
import ContainerWrapper from "../../components/ContainerWrapper";
import NavLink from "../../components/NavLink";
import styled from "@emotion/styled";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import axios from "axios";
=======
import ContainerWrapper from "../../components/ContainerWrapper";
import theme from "../../theme";
import { Box } from "@mui/system";
import NavLink from "../../components/NavLink";
import styled from "@emotion/styled";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
>>>>>>> initial commit

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 24,
  borderRadius: 5,
  margin: "20px 0 40px 0",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "lightgray",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#2944c1",
  },
}));

const Register = () => {
  const [tab, setTab] = useState(0);
<<<<<<< HEAD
  const [terms, setTerms] = useState(false);
  const [policy, setPolicy] = useState(false);
  const [formdata, setFormdata] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    UEN: "",
    companyName: "",
    companyPhone: "",
    companyAddress: "",
    companyCity: "",
    companyZip: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    UEN: "",
    companyName: "",
    companyPhone: "",
    companyAddress: "",
    companyCity: "",
    companyZip: "",
  });

  function registerUser() {
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post(
        "http://localhost:3001/api/v1/register",
        {
          ...formdata,
        },
        axiosConfig
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    alert("Registered Successfully");
  }
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
                color: theme.palette.primary.main,
                fontSize: "30px",
                fontWeight: "bold",
                marginBottom: "12px",
              }}
            >
              Register
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Thank you for choosing us. we just need a few details.
            </Typography>
          </Box>
          {tab === 0 ? (
            <Box>
              <BorderLinearProgress variant="determinate" value={0} />
<<<<<<< HEAD
              <FormHelperText error>{errors.firstName}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                type="fullname"
                id="fullname"
                label="Full Name"
                variant="outlined"
<<<<<<< HEAD
                required
                value={formdata.firstName}
                onChange={(e) => {
                  setFormdata({ ...formdata, firstName: e.target.value });
                  if (e.target.value.length < 4) {
                    setErrors({ ...errors, firstName: "Name is too short" });
                  } else {
                    setErrors({ ...errors, firstName: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{errors.email}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="email"
<<<<<<< HEAD
                required
                value={formdata.email}
                onChange={(e) => {
                  setFormdata({ ...formdata, email: e.target.value });
                  if (!e.target.value) {
                    setErrors({ ...errors, email: "Email is required" });
                  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value)) {
                    setErrors({ ...errors, email: "Email is invalid" });
                  } else {
                    setErrors({ ...errors, email: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{errors.password}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
<<<<<<< HEAD
                required
                value={formdata.password}
                onChange={(e) => {
                  setFormdata({ ...formdata, password: e.target.value });
                  if (e.target.value.length < 6) {
                    setErrors({ ...errors, password: "Password is too short" });
                  } else if (e.target.value.length > 20) {
                    setErrors({ ...errors, password: "Password is too long" });
                  } else if (e.target.value !== formdata.confirmPassword) {
                    setErrors({ ...errors, password: "Passwords does not match" });
                  } else {
                    setErrors({ ...errors, password: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{errors.confirmPassword}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="confirmPassword"
                label="Confirm Password"
                variant="outlined"
                type="password"
<<<<<<< HEAD
                required
                value={formdata.confirmPassword}
                onChange={(e) => {
                  setFormdata({ ...formdata, confirmPassword: e.target.value });
                  if (e.target.value.length < 6) {
                    setErrors({ ...errors, confirmPassword: "Password is too short" });
                  } else if (e.target.value.length > 20) {
                    setErrors({ ...errors, confirmPassword: "Password is too long" });
                  } else if (e.target.value !== formdata.password) {
                    setErrors({ ...errors, confirmPassword: "Passwords does not match" });
                  } else {
                    setErrors({ ...errors, confirmPassword: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  display: "block",
                  margin: "0 auto",
                  marginTop: "25px",
                  borderRadius: "3px",
                  padding: "10px 40px",
                }}
                onClick={() => setTab(1)}
              >
                <Typography>Next</Typography>
              </Button>
            </Box>
          ) : tab === 1 ? (
            <Box>
              <BorderLinearProgress variant="determinate" value={50} />
<<<<<<< HEAD
              <FormHelperText error>{errors.companyName}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="companyName"
                label="Suppliers Company Name"
                variant="outlined"
                type="text"
<<<<<<< HEAD
                required
                value={formdata.companyName}
                onChange={(e) => {
                  setFormdata({ ...formdata, companyName: e.target.value });
                  if (!e.target.value) {
                    setErrors({ ...errors, companyName: "Company Name is required" });
                  } else {
                    setErrors({ ...errors, companyName: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{errors.UEN}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="uenNo"
                label="UEN No."
                variant="outlined"
                type="text"
<<<<<<< HEAD
                required
                value={formdata.UEN}
                onChange={(e) => {
                  setFormdata({ ...formdata, UEN: e.target.value });
                  if (!e.target.value) {
                    setErrors({ ...errors, UEN: "UEN is required" });
                  } else {
                    setErrors({ ...errors, UEN: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{errors.companyPhone}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="phone"
                label="Phone Number"
                variant="outlined"
                type="tel"
<<<<<<< HEAD
                required
                value={formdata.companyPhone}
                onChange={(e) => {
                  setFormdata({ ...formdata, companyPhone: e.target.value });
                  if (!e.target.value) {
                    setErrors({ ...errors, companyPhone: "Phone is required" });
                  } else if (!/^[0-9]{8}$/.test(e.target.value)) {
                    setErrors({ ...errors, companyPhone: "Phone is invalid" });
                  } else {
                    setErrors({ ...errors, companyPhone: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{errors.companyAddress}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="address"
                label="Address"
                variant="outlined"
                type="text"
                multiline
                rows={6}
                maxRows={10}
<<<<<<< HEAD
                required
                value={formdata.companyAddress}
                onChange={(e) => {
                  setFormdata({ ...formdata, companyAddress: e.target.value });
                  if (!e.target.value) {
                    setErrors({ ...errors, companyAddress: "Address is required" });
                  } else {
                    setErrors({ ...errors, companyAddress: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{errors.companyCity}</FormHelperText>

=======
>>>>>>> initial commit
              <TextField
                id="city"
                label="City"
                variant="outlined"
                type="text"
<<<<<<< HEAD
                required
                value={formdata.companyCity}
                onChange={(e) => {
                  setFormdata({ ...formdata, companyCity: e.target.value });
                  if (!e.target.value) {
                    setErrors({ ...errors, companyCity: "City is required" });
                  } else {
                    setErrors({ ...errors, companyCity: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
<<<<<<< HEAD
              <FormHelperText error>{errors.companyZip}</FormHelperText>
=======
>>>>>>> initial commit
              <TextField
                id="Pincode"
                label="Pincode"
                variant="outlined"
                type="number"
<<<<<<< HEAD
                required
                value={formdata.companyZip}
                onChange={(e) => {
                  setFormdata({ ...formdata, companyZip: e.target.value });
                  if (!e.target.value) {
                    setErrors({ ...errors, companyZip: "Pincode is required" });
                  } else if (!/^[0-9]{6}$/.test(e.target.value)) {
                    setErrors({ ...errors, companyZip: "Pincode is invalid" });
                  } else {
                    setErrors({ ...errors, companyZip: "" });
                  }
                }}
=======
>>>>>>> initial commit
                sx={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              />
              <FormGroup>
                <FormControlLabel
<<<<<<< HEAD
                  control={<Checkbox value={terms} onChange={(e) => setTerms(e.target.checked)} />}
                  label={
                    <React.Fragment>
                      I accept OBX
=======
                  control={<Checkbox />}
                  label={
                    <React.Fragment>
                      I accept OBX{" "}
>>>>>>> initial commit
                      <NavLink
                        linkPath="/terms"
                        styles={{
                          color: theme.palette.primary.main,
                          "&.MuiLink-root": {
                            "&:hover": {
                              color: theme.palette.primary.dark,
                            },
                          },
                        }}
                      >
                        Terms & Conditions
                      </NavLink>
                    </React.Fragment>
                  }
                />
                <FormControlLabel
<<<<<<< HEAD
                  control={
                    <Checkbox value={policy} onChange={(e) => setPolicy(e.target.checked)} />
                  }
                  label={
                    <React.Fragment>
                      I accept OBX
=======
                  control={<Checkbox />}
                  label={
                    <React.Fragment>
                      I accept OBX{" "}
>>>>>>> initial commit
                      <NavLink
                        linkPath="/privacy"
                        styles={{
                          color: theme.palette.primary.main,
                          "&.MuiLink-root": {
                            "&:hover": {
                              color: theme.palette.primary.dark,
                            },
                          },
                        }}
                      >
                        Privacy Policy
                      </NavLink>
                    </React.Fragment>
                  }
                />
              </FormGroup>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    marginTop: "25px",
                    borderRadius: "3px",
                    padding: "10px 40px",
                  }}
                  onClick={() => setTab(0)}
                >
                  <Typography>Back</Typography>
                </Button>
                <Button
<<<<<<< HEAD
                  disabled={!terms || !policy}
=======
>>>>>>> initial commit
                  variant="outlined"
                  sx={{
                    marginTop: "25px",
                    borderRadius: "3px",
                    padding: "10px 40px",
                  }}
<<<<<<< HEAD
                  onClick={registerUser}
                >
                  <Typography>Register</Typography>
=======
                  onClick={() => setTab(2)}
                >
                  <Typography>Next</Typography>
>>>>>>> initial commit
                </Button>
              </Box>
            </Box>
          ) : tab === 2 ? (
            <>
              <BorderLinearProgress variant="determinate" value={100} />
              <Box
                sx={{
                  padding: "40px 30px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "20px",
                  borderRadius: "10px",
                  border: "2px solid blue",
                }}
              >
                <CheckCircleOutlineRoundedIcon
                  sx={{
                    color: "#3bc07d",
                    fontSize: "100px",
                  }}
                />
                <Typography
                  sx={{
                    width: "80%",
                  }}
                >
                  Thank you for singning up! We just need you to verify your email address to
                  complete setting up your account.
                </Typography>
                <Button
                  variant="contained"
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
                        color: "white",
                        "&.MuiLink-root": {
                          "&:hover": {
                            color: "white",
                          },
                        },
                      }}
                    >
                      Continue
                    </NavLink>
                  </Typography>
                </Button>
              </Box>
            </>
          ) : null}
        </Paper>
      </ContainerWrapper>
    </>
  );
};

export default Register;
