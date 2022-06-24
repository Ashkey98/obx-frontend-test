import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface TPButtonsProps {
  data: Array<String>;
  left?: Boolean;
  setView: any;
}

const TPButtons = ({ data, left, setView }: TPButtonsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "40px",
        justifyContent: left ? "left" : "center",
      }}
    >
      <Button
        onClick={() => {
          setView(data[2]);
        }}
        sx={{
          backgroundColor: "#e94545",
          color: "white",
          padding: "10px 20px",
          maxWidth: "120px",
          width: "100%",
        }}
        variant="contained"
      >
        <Typography>{data[0]}</Typography>
      </Button>
      <Button
        onClick={() => {
          setView(data[3]);
        }}
        sx={{
          backgroundColor: "#2944c1",
          color: "white",
          padding: "10px 20px",
          maxWidth: "120px",
          width: "100%",
        }}
        variant="contained"
      >
        <Typography>{data[1]}</Typography>
      </Button>
    </Box>
  );
};

export default TPButtons;
