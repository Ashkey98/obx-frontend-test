import React from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { flex, flexBetween, flexColumn } from "../../../../../styles/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const myProfileData = {
  headings: [
    "Full Name",
    "Email",
    "Company Name",
    "UEN No",
    "Address",
    "City",
    "Country",
    "Postcode",
    "Phone Number",
  ],
  data: [
    "Buyer",
    "buyer@gmail.com",
    "ABC Tenders",
    "ABC Tenders",
    "RTR837584983983",
    "street no 23, Bakerys Road",
    "Jurong",
    "Singapore",
    "250147",
    "+65 2222 1111",
  ],
};

interface UsersProfileProps {
  setView: any;
}

const UsersProfile = ({ setView }: UsersProfileProps) => {
  return (
    <>
      <Box
        sx={{
          padding: "40px 36px",
          ...flexColumn,
        }}
      >
        <Box
          sx={{
            ...flexBetween,
          }}
        >
          <Avatar
            sx={{
              width: "96px",
              height: "96px",
            }}
          />
          <Button onClick={() => setView("main")}>
            <Typography
              sx={{
                ...flex,
              }}
            >
              <KeyboardBackspaceIcon /> Back
            </Typography>
          </Button>
        </Box>
        <br />
        {myProfileData.headings.map((data, index) => {
          return (
            <>
              <Box
                key={index}
                sx={{
                  ...flex,
                  margin: "7px 0",
                }}
              >
                <Box
                  sx={{
                    ...flexBetween,
                    width: "180px",
                  }}
                >
                  <Typography sx={{ color: "black", fontWeight: "600" }} variant="subtitle1">
                    {data}
                  </Typography>
                  <Typography sx={{ color: "black", fontWeight: "600" }} variant="subtitle1">
                    :
                  </Typography>
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    marginLeft: "10px",
                    color: "black",
                    fontWeight: "600",
                  }}
                >
                  {myProfileData.data[index]}
                </Typography>
              </Box>
            </>
          );
        })}
        <Box
          sx={{
            ...flex,
            justifyContent: "center",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <Button
            onClick={() => setView("list")}
            variant="contained"
            sx={{
              padding: "8px 24px",
            }}
          >
            <Typography>View Tenders</Typography>
          </Button>

          <Button
            variant="contained"
            sx={{
              padding: "8px 24px",
            }}
          >
            <Typography>Delete Account</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UsersProfile;
