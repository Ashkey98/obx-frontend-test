import React from "react";
import { Box, Typography } from "@mui/material";
import { flexColumn } from "../../styles/styles";
import NavLink from "../../components/NavLink";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        ...flexColumn,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography
        component="h1"
        sx={{
          fontWeight: "900",
          fontSize: {
            xs: "100px",
            md: "200px",
          },
          lineHeight: "1",
        }}
      >
        404
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: "300",
        }}
      >
        Page Not Found. <NavLink linkPath="/">Home</NavLink>
      </Typography>
    </Box>
  );
};

export default PageNotFound;
