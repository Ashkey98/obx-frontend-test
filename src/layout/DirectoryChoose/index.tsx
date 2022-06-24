import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ContainerWrapper from "../../components/ContainerWrapper";
import { flex } from "../../styles/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import LayersIcon from "@mui/icons-material/Layers";
import Link from "next/link";

const DirectoryChoose = () => {
  const [activeDir, setActiveDir] = useState("seller");

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
      }}
    >
      <ContainerWrapper>
        <Box
          sx={{
            ...flex,
            gap: {
              xs: "10px",
              md: "80px",
            },
          }}
        >
          <Box
            onClick={() => setActiveDir("seller")}
            sx={{
              padding: "14px 0",
              border: "1px solid lightgray",
              width: "100%",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: activeDir === "seller" ? "#4338CA" : "transparent",
              color: activeDir === "seller" ? "white" : "black",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  md: "24px",
                },
                fontWeight: "600",
              }}
            >
              Seller Directory
            </Typography>
          </Box>
          <Box
            onClick={() => setActiveDir("buyer")}
            sx={{
              padding: "14px 0",
              border: "1px solid lightgray",
              width: "100%",
              textAlign: "center",
              cursor: "pointer",
              backgroundColor: activeDir === "buyer" ? "#4338CA" : "transparent",
              color: activeDir === "buyer" ? "white" : "black",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  md: "24px",
                },
                fontWeight: "600",
              }}
            >
              Buyer Directory
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            ...flex,
            justifyContent: "space-evenly",
            margin: "120px 0",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            gap: {
              xs: "100px",
              md: "0",
            },
          }}
        >
          <Link href={"/directory"}>
            <Box
              sx={{
                borderBottom: "3px solid #34D399",
                padding: {
                  xs: "50px 70px",
                  md: "50px 120px",
                },
                paddingTop: "80px",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                backgroundColor: "white",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#34D399",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px 20px",
                  borderRadius: "3px",
                  position: "absolute",
                  top: "-1px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <LayersIcon
                  sx={{
                    width: "48px",
                    height: "48px",
                    color: "white",
                    display: "inline",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                Facility
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#4338ca",
                }}
              >
                24 Directories
              </Typography>
            </Box>
          </Link>
          <Link href={"/directory"}>
            <Box
              sx={{
                borderBottom: "3px solid rgb(139, 92, 246)",
                padding: {
                  xs: "50px 70px",
                  md: "50px 120px",
                },
                paddingTop: "80px",
                boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
                backgroundColor: "white",
                position: "relative",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "rgb(139, 92, 246)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px 20px",
                  borderRadius: "3px",
                  position: "absolute",
                  top: "-1px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <SettingsIcon
                  sx={{
                    width: "48px",
                    height: "48px",
                    color: "white",
                    display: "inline",
                  }}
                />
              </Box>
              <Typography
                sx={{
                  fontSize: "30px",
                  fontWeight: "600",
                }}
              >
                Service
              </Typography>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "#4338ca",
                }}
              >
                34 Directories
              </Typography>
            </Box>
          </Link>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};

export default DirectoryChoose;
