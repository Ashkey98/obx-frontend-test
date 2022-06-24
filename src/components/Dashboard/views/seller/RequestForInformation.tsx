import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Title from "../../ults/Title";
import { flexColumn, StyledTextField } from "../../../../styles/styles";

const RequestForInformation = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  return (
    <>
      <Box>
        <Title title={"Request for Information"} />
        <Box
          sx={{
            padding: "18px 36px",
            ...flexColumn,
            gap: "30px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <StyledTextField id="Your Mail" label="Your Mail" variant="outlined" />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTextField id="Subject" label="Subject" variant="outlined" />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledTextField
                id="Subject"
                label="Subject"
                variant="outlined"
                multiline
                rows={7}
                maxRows={4}
              />
            </Grid>
          </Grid>
          <Button
            sx={{
              backgroundColor: color ? color : "inherit",
            }}
            variant="contained"
          >
            Send
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RequestForInformation;
