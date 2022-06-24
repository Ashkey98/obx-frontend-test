import { Typography, Box, FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";
import { ArrowBack } from "@mui/icons-material";

const PerformanceManagement = () => {

  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    // 👇️ toggle
    setIsActive(current => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
 

  return (
    <>
    <Box
        sx={{
          padding: "20px 30px",
        height: "600px",
          overflowY: "scroll",
          " ::-webkit-scrollbar-thumb": {
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
            Performance Management
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
        paddingTop: "30px",

       }}>
        <Box
        sx={{
          backgroundColor: "white",
          border: "2px solid #2a43c2",
         height:"40px",
          borderRadius: "28px",
          display:"flex",
          flexDirection: "row",
          alignItems: "center",
          width:'100%'

        }}>
        <Box onClick={onClick}
        sx={{
        backgroundColor: isActive ?"blue" : "white",
        borderColor: '#FF3D00',
        borderWidth: 5,
        height:"38px",
        width:"200px",
          borderRadius: "25px",
         
                  }}>
<Typography  
sx={{
  color: isActive ?"white" : "blue",
  fontWeight: "bold",
  paddingLeft:"50px",
  paddingTop:"6px"

}}>
  Metrics/KPI
</Typography>
        </Box>
        <Box onClick={onClick}
        sx={{
          backgroundColor: isActive ?"blue" : "white",
          borderColor: '#FF3D00',
        borderWidth: 5,
        height:"38px",
        width:"200px",
          borderRadius: "25px",
          alignItems: "center",
          justifyContent: "center",
                  }}>
<Typography
sx={{
  color: isActive ?"white" : "blue",
  paddingLeft:"34px",
  fontWeight: "bold",
  paddingTop:"6px"

}}>
Evaluation Matrix
</Typography>
        </Box>
        <Box
        sx={{
          backgroundColor: isActive ?"blue" : "white",
          borderColor: '#FF3D00',
        borderWidth: 5,
        height:"38px",
        width:"280px",
          borderRadius: "25px",
         
          alignItems: "center",
                  }}>
<Typography 
sx={{
  paddingTop:"6px",

  color: isActive ?"white" : "blue",
  fontWeight: "bold",
  paddingLeft:"26px"

}}>
 Incentive for Good Performance
</Typography>
        </Box>
        <Box onClick={onClick}
        sx={{
          backgroundColor: isActive ?"blue" : "white",
          borderColor: '#FF3D00',
        borderWidth: 5,
        height:"38px",
        width:"212px",
          borderRadius: "25px",
          alignItems: "center",
                  }}>
<Typography onClick={onClick}
sx={{
  color: isActive ?"white" : "blue",
  fontWeight: "bold",
  paddingLeft:"50px",
  paddingTop:"6px"
}}>
Security Failure
</Typography>
        </Box>
        </Box>

  <Box onClick={onClick}
  sx={{
    paddingTop: "100px"
  }}>   
<Typography  
sx={{
  
fontSize: "20px",
fontWeight: "bold"
}}>
Incentives for Good Performance
</Typography>

        <FormControlLabel value="monetary" control={<Radio />} label="Monetary (Recommended)" />
        <FormControlLabel value="nonMonetary" control={<Radio />} label="Non - Monetary" />
        
</Box> </Box>  
      </Box>
    </>
  );
};

export default PerformanceManagement;
