import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const ManageMaintenance = () => {
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
          Maintenance
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: "20px",
            }}
          >
            Schedule Maintenance
          </Typography>
          <TextField fullWidth />
          <br /> <br />
          <Box
            sx={{
              textAlign: "right",
            }}
          >
            <Button variant="contained">Save Changes</Button> &nbsp;&nbsp;&nbsp;
            <Button variant="contained">Cancle</Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ManageMaintenance;
