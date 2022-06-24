import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { flexBetween } from "../../../../styles/styles";

interface SellerInfoCardsprops {
  data: Array<String>;
  bgcolor: string;
  icon: React.ReactNode;
  reverse?: boolean;
}

const SellerInfoCards = ({ data, bgcolor, icon, reverse }: SellerInfoCardsprops) => {
  return (
    <>
      <Box
        sx={{
          padding: "16px 20px",
          ...flexBetween,
          boxShadow: 3,
          gap: "8px",
          height: "auto",
        }}
      >
        <Avatar
          sx={{
            backgroundColor: bgcolor,
            padding: "30px",
            "&.MuiAvatar-root > svg": {
              color: "black",
            },
          }}
        >
          {icon}
        </Avatar>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            flexDirection: reverse ? "column-reverse" : "column",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: "26px",
              fontWeight: "600",
            }}
          >
            {data[0]}
          </Typography>
          <Typography
            sx={{
              color: "black",
              fontSize: "22px",
            }}
          >
            {data[1]}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SellerInfoCards;
