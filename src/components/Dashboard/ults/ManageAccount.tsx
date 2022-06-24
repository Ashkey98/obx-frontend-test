import React, { useEffect, useRef, useState } from "react";
import { Box } from "@mui/system";
<<<<<<< HEAD
import { Avatar, Button, Typography, Grid, FormHelperText } from "@mui/material";
import { StyledTextField } from "../../../styles/styles";

const ManageAccount = () => {
  const [color, setColor] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    UNEno: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
  });
  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    UNEno: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    phone: "",
  });
=======
import { Avatar, Button, Typography, Grid } from "@mui/material";
import { hidden, StyledTextField } from "../../../styles/styles";

const ManageAccount = () => {
  const [color, setColor] = useState("");
>>>>>>> initial commit

  const uploadRef = useRef<HTMLInputElement>(null);

  function handleUpload() {
    if (uploadRef.current !== null) {
      uploadRef.current.click();
    }
  }
  function handleRemove() {
    alert("removed");
  }

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
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "28px",
          }}
        >
          Manage Accounts
        </Typography>
        <Box
          sx={{
            padding: "20px 30px",
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            height: "60",
          }}
        >
          <Box>
            <Avatar sx={{ width: 80, height: 80 }} />
            <small>
              <em>(max 200kb)</em>
            </small>
          </Box>
          <Button
            onClick={handleUpload}
            variant="outlined"
            sx={{
              alignSelf: "center",
              padding: "4px 20px",
              border: "1px solid blue",
              ":hover": {
                border: "1px solid blue",
              },
            }}
          >
            Upload
          </Button>
          <input
            style={{
              display: "none",
              visibility: "hidden",
            }}
            type="file"
            ref={uploadRef}
          />
          <Button
            onClick={handleRemove}
            variant="outlined"
            sx={{
              alignSelf: "center",
              padding: "4px 20px",
              border: "1px solid blue",
              ":hover": {
                border: "1px solid blue",
              },
            }}
          >
            Remove
          </Button>
        </Box>

        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
<<<<<<< HEAD
              <FormHelperText error> {error.fullName}</FormHelperText>
              <StyledTextField
                size="small"
                id="Full Name"
                label="Full Name"
                variant="outlined"
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, fullName: "" });
                  } else {
                    setError({ ...error, fullName: "Full Name is required" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.email}</FormHelperText>
=======
              <StyledTextField size="small" id="Full Name" label="Full Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
>>>>>>> initial commit
              <StyledTextField
                size="small"
                id="Email"
                label="Email"
                type="email"
                variant="outlined"
<<<<<<< HEAD
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, email: "" });
                  } else {
                    setError({ ...error, email: "Email is required" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.password}</FormHelperText>
=======
              />
            </Grid>
            <Grid item xs={12} md={6}>
>>>>>>> initial commit
              <StyledTextField
                size="small"
                id="Password"
                label="Password"
                type="password"
                variant="outlined"
<<<<<<< HEAD
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, password: "" });
                  } else {
                    setError({ ...error, password: "Password is required" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.confirmPassword}</FormHelperText>
=======
              />
            </Grid>
            <Grid item xs={12} md={6}>
>>>>>>> initial commit
              <StyledTextField
                size="small"
                id="Confirm Password"
                label="Confirm Password"
                type="password"
                variant="outlined"
<<<<<<< HEAD
                value={formData.confirmPassword}
                onChange={(e) => {
                  setFormData({ ...formData, confirmPassword: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, confirmPassword: "" });
                  } else if (e.target.value.length === 0) {
                    setError({ ...error, confirmPassword: "Confirm Password is required" });
                  } else {
                    setError({ ...error, confirmPassword: "Password does not match" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.companyName}</FormHelperText>
=======
              />
            </Grid>
            <Grid item xs={12} md={6}>
>>>>>>> initial commit
              <StyledTextField
                size="small"
                id="Company Name"
                label="Company Name"
                variant="outlined"
<<<<<<< HEAD
                value={formData.companyName}
                onChange={(e) => {
                  setFormData({ ...formData, companyName: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, companyName: "" });
                  } else {
                    setError({ ...error, companyName: "Company name is required" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.UNEno}</FormHelperText>

              <StyledTextField
                size="small"
                id="UEN No"
                label="UEN No"
                variant="outlined"
                value={formData.UNEno}
                onChange={(e) => {
                  setFormData({ ...formData, UNEno: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, UNEno: "" });
                  } else {
                    setError({ ...error, UNEno: "UEN No is required" });
                  }
                }}
              />
=======
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField size="small" id="UEN No" label="UEN No" variant="outlined" />
>>>>>>> initial commit
            </Grid>
          </Grid>
          <Box
            sx={{
              margin: "30px 0",
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
<<<<<<< HEAD
                <FormHelperText error> {error.address}</FormHelperText>
=======
>>>>>>> initial commit
                <StyledTextField
                  size="small"
                  id="Address"
                  label="Address"
                  variant="outlined"
                  multiline
                  rows={7}
<<<<<<< HEAD
                  value={formData.address}
                  onChange={(e) => {
                    setFormData({ ...formData, address: e.target.value });
                    if (e.target.value.length > 0) {
                      setError({ ...error, address: "" });
                    } else {
                      setError({ ...error, address: "Address is required" });
                    }
                  }}
=======
>>>>>>> initial commit
                />
              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
<<<<<<< HEAD
              <FormHelperText error> {error.city}</FormHelperText>
              <StyledTextField
                size="small"
                id="City"
                label="City"
                variant="outlined"
                value={formData.city}
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, city: "" });
                  } else {
                    setError({ ...error, city: "City is required" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.state}</FormHelperText>

              <StyledTextField
                size="small"
                id="State"
                label="State"
                variant="outlined"
                value={formData.state}
                onChange={(e) => {
                  setFormData({ ...formData, state: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, state: "" });
                  } else {
                    setError({ ...error, state: "State is required" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.country}</FormHelperText>
              <StyledTextField
                size="small"
                id="Country"
                label="Country"
                variant="outlined"
                value={formData.country}
                onChange={(e) => {
                  setFormData({ ...formData, country: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, country: "" });
                  } else {
                    setError({ ...error, country: "Country is required" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.zip}</FormHelperText>

=======
              <StyledTextField size="small" id="City" label="City" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField size="small" id="State" label="State" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField size="small" id="Country" label="Country" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
>>>>>>> initial commit
              <StyledTextField
                size="small"
                id="Postcode"
                label="Postcode"
                type="number"
                variant="outlined"
<<<<<<< HEAD
                value={formData.zip}
                onChange={(e) => {
                  setFormData({ ...formData, zip: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, zip: "" });
                  } else {
                    setError({ ...error, zip: "Postcode is required" });
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormHelperText error> {error.phone}</FormHelperText>
=======
              />
            </Grid>
            <Grid item xs={12} md={6}>
>>>>>>> initial commit
              <StyledTextField
                size="small"
                id="Phone Number"
                label="Phone Number"
                type="tel"
                variant="outlined"
<<<<<<< HEAD
                value={formData.phone}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  if (e.target.value.length > 0) {
                    setError({ ...error, phone: "" });
                  } else {
                    setError({ ...error, phone: "Phone Number is required" });
                  }
                }}
=======
>>>>>>> initial commit
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          style={{
            margin: "15px 40%",
            width: "10em",
            backgroundColor: color ? color : "inherit",
          }}
          variant="contained"
        >
          Save Changes
        </Button>
      </Box>
    </>
  );
};

export default ManageAccount;
