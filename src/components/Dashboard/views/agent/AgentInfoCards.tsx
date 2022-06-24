import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { flexEvenly } from "../../../../styles/styles";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

interface props {
  title: String;
  value: String;
  color: string;
}

const AgentInfoCards = ({ title, value, color }: props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            background: color ? color : "inherit",
            ...flexEvenly,
            padding: "20px 10px",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "20px",
              textTransform: "uppercase",
            }}
          >
            {title}
          </Typography>
          <AccountCircleIcon sx={{ width: "60px", height: "60px" }} />
        </Box>
        <Box
          sx={{
            padding: "20px 30px",
          }}
        >
          <Typography
            sx={{
              fontSize: "36px",
              fontWeight: "800",
            }}
          >
            {value}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AgentInfoCards;
