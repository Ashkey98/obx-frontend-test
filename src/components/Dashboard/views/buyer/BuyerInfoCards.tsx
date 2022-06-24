import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

interface props {
  title: String;
  value: String;
  bgcolor: string;
  imgUrl: String;
}

const BuyerInfoCards = ({ title, value, bgcolor, imgUrl }: props) => {
  return (
    <>
      <Box
        sx={{
          padding: "16px 24px",
          background: bgcolor ? bgcolor : "inherit",
        }}
      >
        <Typography
          sx={{
            fontSize: "30px",
            color: "white",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "30px",
            }}
          >
            {value}
          </Typography>
          <img width={"44px"} src={`/${imgUrl}`} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default BuyerInfoCards;
