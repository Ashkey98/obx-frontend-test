import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';

import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ArrowBack } from "@mui/icons-material";
const FacilityParameter = () => {
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
      <Box
      sx={{
        paddingTop: "20px"
      }}>
      <Typography
       sx={{
         fontSize: "25px",
         fontWeight: "bold"
       }}>
         1. Facility
       </Typography>
       
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="commercial" control={<Radio />} label="Commercial" />
        <FormControlLabel value="condominium" control={<Radio />} label="Condominium" />
        <FormControlLabel value="warehouse" control={<Radio />} label="Warehouse" />
        <FormControlLabel value="dormitory" control={<Radio />} label="Dormitory" />
        
      </RadioGroup>
      </Box>

      <Box
      sx={{
        paddingTop: "20px"
      }}>
      <Typography
       sx={{
         fontSize: "25px",
         fontWeight: "bold"
       }}>
         2. Service
       </Typography>
       
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="visualAnalytic" control={<Checkbox />} label="Visual Analytic" />
        <FormControlLabel value="visitormManagement" control={<Checkbox />} label="Visitorm Management" />
        <FormControlLabel value="vehicleManangement" control={<Checkbox />} label="Vehicle Manangement" />
        <FormControlLabel value="unauthorizedEntry" control={<Checkbox />} label="Prevention of unauthorized activity or entry" />
        <FormControlLabel value="trafficRegulation" control={<Checkbox />} label="Traffic regulation" />
        <FormControlLabel value="accessControl" control={<Checkbox />} label="Access Control" />
        <FormControlLabel value="theftDetection" control={<Checkbox />} label="Fire and theft prevention detection" />
        <FormControlLabel value="manyMore" control={<Checkbox />} label="Many More" />


        
      </RadioGroup>
      </Box>
      <Box
       sx={{
         display:"flex",
         alignItems: "center",
         justifyContent: "center",
         width:"100%",
         paddingTop: "9 0px",
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

export default FacilityParameter;
