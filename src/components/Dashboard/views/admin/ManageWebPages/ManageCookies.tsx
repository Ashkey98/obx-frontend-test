import React from "react";
import { Box, Typography } from "@mui/material";
import EditorView from "./Editor";

const ManageCookies = () => {
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
          Manage Cookies Policy
        </Typography>
        <Box>
          <EditorView />
        </Box>
      </Box>
    </>
  );
};

export default ManageCookies;
