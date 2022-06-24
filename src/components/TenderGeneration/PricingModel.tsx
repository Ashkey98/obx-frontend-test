import { Typography, Box } from "@mui/material";
import React from "react";
import { ArrowBack } from "@mui/icons-material";

const PricingModel = () => {
  return (
    <>
   <Box
        sx={{
          padding: "20px 30px",
        height: "600px",
          overflowY: "scroll",
          " ::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: "lightgray",
          },
          "::-webkit-scrollbar": {
            width: "100%",
          },
        }}
      >
 <Box
       sx={{
         display: "flex",
         justifyContent: "space-between",
         borderBottom: "1px solid",
         width: "100%",
         height: "200"
       }}>
         <Typography sx={{
            fontSize: "25px",
            fontWeight: "bold"
          }}>
            Facility Parameters

         </Typography>
         <Typography 
         sx={{
           color: "blue",
           display: "flex",
           justifyContent: "space-around"
         }}>
         <ArrowBack /> Back

         </Typography>

       </Box>
      </Box>
    </>
  );
};

export default PricingModel;
