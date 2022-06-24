import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { StyledTextField } from "../../styles/styles";

const Invite = () => {
  return (
    <>
    <Box
        sx={{
          padding: "20px 30px",
          maxHeight: "600px",
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
           Invitation


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
        display: "flex",
        flexDirection: "column",

       }}>
        <Box
        sx={{
         padding: 1,
          width:"90%",
          minWidth:"280px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around"
        }}>
          <Box
          sx={{
            display:"flex",
            flexDirection: "column",
            gap: "0 0 25px 35px"

          }}>
          <Typography
           sx={{
            fontSize: "20px"
          }}>
          Email :
        </Typography>
        <TextField
          inputProps={{
            style: {
              padding: 5,
              width:"50%"
            },
          }}
        />
          </Box>
        <Box
        sx={{
          display:"flex",
          flexDirection: "column",
        }}>
        <Typography
         sx={{
          fontSize: "20px"
        }}>
          Subject :
        </Typography>
        <TextField
          inputProps={{
            style: {
              padding: 5,
              width:"50%"
            },
          }}
        />
        </Box>
       
        </Box>
        <Box
        sx={{
          paddingTop:"30px"
        }}>
          <Typography
          sx={{
            fontSize: "20px"
          }}>
            Description :
          </Typography>
                <StyledTextField
                  size="small"
                  variant="outlined"
                  multiline
                  rows={5}
                />
        </Box>
        <Box
        sx={{
          display:"flex",
         alignItems: "center",
         justifyContent: "center",
         width:"100%",
         marginTop:"10px"
         
        }}>
          <Button
            sx={{
              backgroundColor:"blue",
              width: "30%",
              justifyContent:"center",
              alignItems:"center"
            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Select</Typography>
          </Button>
        </Box>
       </Box>
      </Box>
    
    </>
  );
};

export default Invite;
