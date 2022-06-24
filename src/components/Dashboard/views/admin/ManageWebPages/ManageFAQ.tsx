import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { flexBetween, flexColumn } from "../../../../../styles/styles";

const ManageFAQ = () => {
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
        <Box
          sx={{
            ...flexBetween,
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: "28px",
            }}
          >
            FAQs
          </Typography>
          <Box>
            <Button variant="contained">
              <Typography>Add new</Typography>
            </Button>
            &nbsp;&nbsp;
            <Button variant="contained">
              <Typography>Delete</Typography>
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            ...flexBetween,
            alignItems: "flex-start",
          }}
        >
          <input style={{ margin: "20px 10px 20px 0" }} type="checkbox" />
          <Box sx={{ ...flexColumn, flex: 1, gap: "10px" }}>
            <TextField label="Title" fullWidth />
            <TextField label="Content" fullWidth multiline minRows={6} />
          </Box>
        </Box>
        <br />
        <Box
          sx={{
            ...flexBetween,
            alignItems: "flex-start",
          }}
        >
          <input style={{ margin: "20px 10px 20px 0" }} type="checkbox" />
          <Box sx={{ ...flexColumn, flex: 1, gap: "10px" }}>
            <TextField label="Title" fullWidth />
            <TextField label="Content" fullWidth multiline minRows={6} />
          </Box>
        </Box>
        <br />
        <Box
          sx={{
            ...flexBetween,
            alignItems: "flex-start",
          }}
        >
          <input style={{ margin: "20px 10px 20px 0" }} type="checkbox" />
          <Box sx={{ ...flexColumn, flex: 1, gap: "10px" }}>
            <TextField label="Title" fullWidth />
            <TextField label="Content" fullWidth multiline minRows={6} />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            padding: "8px 24px",
          }}
          variant="contained"
        >
          <Typography>Save Changes</Typography>
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          sx={{
            padding: "8px 24px",
          }}
          variant="contained"
        >
          <Typography>Cancel</Typography>
        </Button>
      </Box>
    </>
  );
};

export default ManageFAQ;
