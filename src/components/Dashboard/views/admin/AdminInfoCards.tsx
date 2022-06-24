import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { flexBetween, flexEvenly } from "../../../../styles/styles";

interface AdminInfoCardsprops {
  data: Array<String>;
  bgcolor: string;
  icon: React.ReactNode;
}

const AdminInfoCards = ({ data, bgcolor, icon }: AdminInfoCardsprops) => {
  return (
    <>
      <Box
        sx={{
          padding: "16px 20px",
          ...flexEvenly,
          boxShadow: 3,
          gap: "8px",
          height: "auto",
        }}
      >
        <Avatar
          sx={{
            backgroundColor: bgcolor,
            padding: "14px",
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
            flexDirection: "column-reverse",
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
              fontSize: "16px",
            }}
          >
            {data[1]}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default AdminInfoCards;
