import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { flexColumn } from "../../styles/styles";
import TPBox from "./utls/TPBox";
import TPContainer from "./utls/TPContainer";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
interface props {
  setView: any;
}

const TenderComplete = ({ setView }: props) => {
  return (
    <TPContainer>
      <TPBox>
        <Box
          sx={{
            ...flexColumn,
            textAlign: "center",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              fontSize: "24px",
            }}
          >
            Congrulations
          </Typography>
          <Box>
            <CheckCircleOutlineIcon sx={{ fontSize: "100px" }} />
          </Box>
          <Typography>
            You have successfully submitted your Bid <br />
            on tender Id:238927389
          </Typography>
          <Box>
            <Link href={"/"}>
              <Button
                variant="contained"
                sx={{
                  padding: "10px 26px",
                  alignSelf: "flex-start",
                }}
              >
                Home
              </Button>
            </Link>
          </Box>
        </Box>
      </TPBox>
    </TPContainer>
  );
};

export default TenderComplete;
