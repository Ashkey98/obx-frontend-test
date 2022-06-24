import React from "react";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { flex, flexColumn, StyledTextField } from "../../styles/styles";
import TPContainer from "./utls/TPContainer";
import TPButtons from "./utls/TPButtons";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

interface props {
  setView: any;
}

const TenderInstructions = ({ setView }: props) => {
  return (
    <TPContainer>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "40px 30px",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#2a43c2",
            color: "white",
            padding: "20px ",
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            Instructions
          </Typography>
          <Box
            sx={{
              ...flexColumn,
              gap: "10px",
            }}
          >
            <ul>
              {[...Array(3)].map((x, index) => {
                return (
                  <li>
                    <Typography
                      key={index}
                      sx={{
                        ...flex,
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore
                      laudantium, eos exercitationem impedit magnam aliquid rerum, quam harum est
                      dolorem blanditiis quos praesentium corporis tenetur ratione, quae esse animi?
                    </Typography>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>
        <br />
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledTextField size="small" id="Full Name" label="Full Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              size="small"
              id="Email"
              label="Email"
              type="email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              size="small"
              id="Password"
              label="Password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              size="small"
              id="Confirm Password"
              label="Confirm Password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              size="small"
              id="Company Name"
              label="Company Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField size="small" id="UEN No" label="UEN No" variant="outlined" />
          </Grid>
        </Grid>
        <Box
          sx={{
            margin: "30px 0",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledTextField
                size="small"
                id="Address"
                label="Address"
                variant="outlined"
                multiline
                rows={7}
              />
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <StyledTextField size="small" id="City" label="City" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField size="small" id="State" label="State" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField size="small" id="Country" label="Country" variant="outlined" />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              size="small"
              id="Postcode"
              label="Postcode"
              type="number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledTextField
              size="small"
              id="Phone Number"
              label="Phone Number"
              type="tel"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <br />
        <br />
        <Box
          sx={{
            ...flex,
          }}
        >
          <Checkbox />
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut ad est sint ullam iure,
            nostrum officia fuga sapiente reiciendis deleniti.
          </Typography>
        </Box>
        <br />
        <br />
        <TPButtons
          setView={setView}
          data={["Prev", "Next", "TenderPreviewDetails", "TenderComplete"]}
        />
      </Box>
      <br />
      <br />
    </TPContainer>
  );
};

export default TenderInstructions;
