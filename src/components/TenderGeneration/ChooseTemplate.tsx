import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { ArrowBack } from "@mui/icons-material";

const ChooseTemplate = () => {
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
            Choose Template or  <Button
            sx={{
              backgroundColor:"blue",
              width: "110px",
              height:"30px"
              
              

            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Click Here</Typography>
          </Button> to Create Custom
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
         display:"flex",
         flexDirection: "row",
         height:"100%",
         width:"100%",
        justifyContent: "space-evenly",
        alignItems: "center",
       }}>
         <Box
         sx={{
           backgroundColor: "white",
           height:"380px",
           width:"25%",
           border: "1px solid rgba(1, 0, 0, 0.05)",
           boxShadow:"3",
           display: "flex",
           flexDirection:"column",
           alignItems:"center"
                    }}>
          
          <Box
          sx={{
            height:"270px"
          }}>
         <img width="100px" src="ad.jpg" alt="" />

          </Box>

         <Typography
         sx={{
           fontWeight:"bold",
           fontSize:"100%"
         }}>
           Template 1
         </Typography>

         <Button
            sx={{
              backgroundColor:"blue",
              width: "45%",

            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Select</Typography>
          </Button>
         </Box>

         <Box
         sx={{
           backgroundColor: "white",
           width:"25%",
           height:"380px",
           border: "1px solid rgba(1, 0, 0, 0.05)",
           boxShadow:"3",
           display: "flex",
           flexDirection:"column",
           alignItems:"center"
                    }}>
          
          <Box
          sx={{
            height:"270px"
          }}>
         <img width="100px" src="ad.jpg" alt="" />

          </Box>


         <Typography
         sx={{
           fontWeight:"bold",
           fontSize:"100%"

         }}>
           Template 2
         </Typography>

         <Button
            sx={{
              backgroundColor:"blue",
              width: "45%",
            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Select</Typography>
          </Button>
         </Box>

         <Box
         sx={{
           backgroundColor: "white",
           height:"380px",
           width:"25%",
           border: "1px solid rgba(1, 0, 0, 0.05)",
           boxShadow:"3",
           display: "flex",
           flexDirection:"column",
           alignItems:"center"
                    }}>
          
          <Box
          sx={{
            height:"270px"
          }}>
         <img width="100px" src="ad.jpg" alt="" />

          </Box>

         <Typography
         sx={{
           fontWeight:"bold",
           fontSize:"100%"
         }}>
           Template 3
         </Typography>

         <Button
            sx={{
              backgroundColor:"blue",
              width: "45%",

            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Select</Typography>
          </Button>
         </Box>
         <Box
         sx={{
           backgroundColor: "white",
           height:"380px",
           width:"25%",
           border: "1px solid rgba(1, 0, 0, 0.05)",
           boxShadow:"3",
           display: "flex",
           flexDirection:"column",
           alignItems:"center"
                    }}>
          
          <Box
          sx={{
            height:"270px"
          }}>
         <img width="100px" src="ad.jpg" alt="" />

          </Box>

         <Typography
         sx={{
           fontWeight:"bold",
           fontSize:"100%"
         }}>
           Template 4
         </Typography>

         <Button
            sx={{
              backgroundColor:"blue",
              width: "45%",

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

export default ChooseTemplate;
