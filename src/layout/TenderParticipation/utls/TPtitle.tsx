import { Box, Typography } from "@mui/material";
import React from "react";

interface TPtitleProps {
  title: String;
  small?: Boolean;
}

const TPtitle = ({ title, small }: TPtitleProps) => {
  return (
    <Box
      sx={{
        padding: "15px 30px",
        backgroundColor: "white",
        boxShadow: 1,
        border: "1px solid lightgray",
      }}
    >
      <Typography
        sx={{
          color: "#2a43c2",
          fontSize: small ? "20px" : "24px",
          fontWeight: "600",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TPtitle;
