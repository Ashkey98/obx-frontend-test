import React from "react";
import { Box, Typography } from "@mui/material";
import Editor from "./Editor";

const ManageTerms = () => {
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
          Manage Terms and Conditions
        </Typography>
        <Box>
          <Editor />
        </Box>
      </Box>
    </>
  );
};

export default ManageTerms;
