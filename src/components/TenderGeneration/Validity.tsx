import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Stack from '@mui/material/Stack';
const Validity = () => {
  return (
    <>
    <Box
        sx={{
          padding: "20px 30px",
          maxHeight: "1000px",
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
           Select Validity


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
       <Box
       sx={{
        paddingTop: "100px",
         width: "100%",
         display: "flex",
         alignItems: "center",
         justifyContent: "space-evenly",
       }}>
         <Box
         sx={{ 
           display: "flex",
           flexDirection: "column",
         }}>
         <Typography
         sx={{
           fontSize:"20px"
         }}>
           Select Expiry Date *
         </Typography>

      <TextField
        id="date"
        type="date"
        defaultValue="2021-11-21"
        sx={{ width: 220, height: 100 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
       
      </Box>
      <TextField
        id="time"
        type="time"
        defaultValue="12:00"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ width: 150, height: 72 }}
      />
       </Box>
       <Box
       sx={{
         display:"flex",
         alignItems: "center",
         justifyContent: "center",
         width:"100%"
       }}>
       <Button
            sx={{
              backgroundColor:"blue",
              width: "160px",
              
              

            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Next</Typography>
          </Button>
       </Box>
       
      </Box>
    </>
  );
};

export default Validity;
