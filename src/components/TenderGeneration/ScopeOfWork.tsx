import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ArrowBack } from "@mui/icons-material";
const ScopeOfWork = () => {
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
            Scope Of Work
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
        paddingTop: "60px"
      }}>
      <Typography
       sx={{
         fontSize: "25px",
         fontWeight: "bold"
       }}>
         Contract Validity
       </Typography>
       
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="oneYear" control={<Radio />} label="One Years" />
        <FormControlLabel value="twoYear" control={<Radio />} label="Two Years" />
        <FormControlLabel value="threeYear" control={<Radio />} label="Three Years" />
        <FormControlLabel value="fourYear" control={<Radio />} label="Four Years" />
        <FormControlLabel value="fiveYear" control={<Radio />} label="Five Years" />
        
      </RadioGroup>
      </Box>

      <Box
      sx={{
        paddingTop: "60px"
      }}>
      <Typography
       sx={{
         fontSize: "25px",
         fontWeight: "bold"
       }}>
         Other Services
       </Typography>
       
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="surges" control={<Checkbox />} label="Surges" />
        <FormControlLabel value="otherObligations" control={<Checkbox />} label="Other Obligations" />
      </RadioGroup>
      </Box>
      <Box
       sx={{
         display:"flex",
         alignItems: "center",
         justifyContent: "center",
         width:"100%",
         paddingTop: "100px",
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

export default ScopeOfWork;
