import { ArrowBack } from "@mui/icons-material";
import { Box, FormControlLabel, RadioGroup, Typography } from "@mui/material";
import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox"; 
import classes from './TenderType.css';

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TenderTypes = () => {
  const [isActive, setIsActive] = useState({});
    
  function onClick (e){
      // 👇️ toggledat
      const data={
        id:e.target.id,
        check:e.target.checked
      }
      setIsActive(data);
      
      // 👇️ or set to true
      // setIsActive(true);
    };

  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          minHeight: "600px",
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
            height: "200",
            marginBottom: "20px"
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
            }}
          >
            Select Tender Types
          </Typography>
          <Typography
            sx={{
              color: "blue",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <ArrowBack /> Back
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "100%",
            gap: "30px 20px"

          }}
        >
          <Box
            sx={{
              width: "80%",
              minWidth: "280px",
              padding: 1,
              // height: "100px",
              backgroundColor: isActive?.id == "1" && isActive?.check == true  ? "#3453f3" : "#e6eaef",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Checkbox
                {...label}
                onClick={(e)=>onClick(e)}
                id="1"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 40 },
                  paddingTop: "30px",
                  color: isActive?.id == "1" && isActive?.check == true  ? "blue" : "",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: isActive?.id == "1" && isActive?.check == true  ? "white" : "black",
                  }}
                >
                 Open Tender
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: isActive?.id == "1" && isActive?.check == true  ? "white" : "black",
                  }}
                >
                 Open Tendering allows anyone to submit a tender to supply the goods or services required and offers an equal oppurtunity to any organisation to submit a tender.
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "80%",
              minWidth: "280px",

              backgroundColor: isActive?.id == "2" && isActive?.check == true  ? "#3453f3" : "#e6eaef",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Checkbox
                {...label}
                onClick={(e)=>onClick(e)}
                id="2"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 40 },
                  paddingTop: "30px",
                  color: isActive?.id == "2" && isActive?.check == true  ? "blue" : "",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: isActive?.id == "2" && isActive?.check == true  ? "white" : "black",
                  }}
                >
                  Direct Contract
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: isActive?.id == "2" && isActive?.check == true  ? "white" : "black",
                  }}
                >
                  Selective Tendering only allows suppliers to submit tenders by
                  invitation.S
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              width: "80%",
              minWidth: "280px",

              backgroundColor: isActive?.id == "3" && isActive?.check == true  ? "#3453f3" : "#e6eaef",
                  zIndex: 1

            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Checkbox
                {...label}
                onClick={(e)=>onClick(e)}
                id="3"
                sx={{
                  "& .MuiSvgIcon-root": { fontSize: 40 },
                  paddingTop: "30px",
                  color: isActive?.id == "3" && isActive?.check == true  ? "white" : "",
                  zIndex: 1
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  onClick={onClick}
                  sx={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    color: isActive?.id == "3" && isActive?.check == true  ? "white" : "black",
                  }}
                >
                  Limited Tender
                </Typography>
                <Typography
               onClick={()=>onClick("3")}
                  sx={{
                    fontSize: "13px",
                    fontWeight: "bold",
                    color: isActive?.id == "3" && isActive?.check == true  ? "white" : "black",
                  }}
                >
                  In a limited Tendering procedure, tenders are invited from
                  only a few supplier, or from one pre-identified supplier.
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  );
};

export default TenderTypes;
