import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { flexBetween, flexColumn } from "../../../../../styles/styles";
import EditorView from "./Editor";

const ManageAboutUs = () => {
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
          About us
        </Typography>
        <Box
          sx={{
            padding: "20px 30px",
            ...flexColumn,
            gap: "20px",
          }}
        >
          <Box
            sx={{
              ...flexBetween,
            }}
          >
            <TextField fullWidth type="file" />
            <Button
              variant="contained"
              sx={{
                alignSelf: "stretch",
                minWidth: "160px",
              }}
            >
              Choose File
            </Button>
          </Box>
        </Box>
        <Box>
          <EditorView />
        </Box>
      </Box>
    </>
  );
};

export default ManageAboutUs;
