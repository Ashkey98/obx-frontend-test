import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { flexCenter } from "../../../styles/styles";

interface props {
  hide?: Boolean;
}

const TenderSearch = ({ hide }: props) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  return (
    <>
      <Box
        sx={{
          ...flexCenter,
<<<<<<< HEAD
          alignItems: {
            xs: "flex-start",
            md: "center",
          },
=======
>>>>>>> initial commit
          padding: "16px 10px",
          margin: "30px 0",
          gap: "10px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        {!hide ? (
          <Typography
            sx={{
              fontWeight: "600",
              marginRight: "10px",
              fontSize: "20px",
            }}
          >
            Search by Tender ID :
          </Typography>
        ) : null}
        <TextField
          inputProps={{
            style: {
              padding: 5,
            },
          }}
        />
<<<<<<< HEAD
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "flex-start",
            gap: {
              xs: 1,
              md: 0,
            },
          }}
        >
=======
        <Box>
>>>>>>> initial commit
          <Button
            variant="contained"
            sx={{
              margin: "0 20px",
              padding: "4px 40px",
              backgroundColor: color ? color : "inherit",
            }}
          >
            <Typography>Search</Typography>
          </Button>
          <Button
            variant="contained"
            sx={{ padding: "4px 40px", backgroundColor: color ? color : "inherit" }}
          >
            <Typography>Clear</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TenderSearch;
