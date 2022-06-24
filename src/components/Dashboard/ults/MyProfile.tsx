import React, { useRef } from "react";
import { Avatar, Box, Button, Typography } from "@mui/material";
import Title from "./Title";
import { flex, flexBetween, flexColumn } from "../../../styles/styles";

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
    "RTR837584983983",
    "street no 23, Bakerys Road",
    "Jurong",
    "Singapore",
    "250147",
    "+65 2222 1111",
  ],
};

const MyProfile = () => {
  const uploadRef = useRef<HTMLInputElement>(null);

  function handleUpload() {
    if (uploadRef.current !== null) {
      uploadRef.current.click();
    }
  }
  function handleRemove() {
    alert("removed");
  }

  return (
    <>
      <Box>
        <Title title={"My Profile"} />
        <Box
          sx={{
            padding: "18px 36px",
            ...flexColumn,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "15px",
              height: "60",
            }}
          >
            <Box>
              <Avatar sx={{ width: 80, height: 80 }} />
              <small>
                <em>(max 200kb)</em>
              </small>
            </Box>
            <Button
              onClick={handleUpload}
              variant="outlined"
              sx={{
                alignSelf: "center",
                padding: "4px 20px",
                border: "1px solid blue",
                ":hover": {
                  border: "1px solid blue",
                },
              }}
            >
              Upload
            </Button>
            <input
              style={{
                display: "none",
                visibility: "hidden",
              }}
              type="file"
              ref={uploadRef}
            />
            <Button
              onClick={handleRemove}
              variant="outlined"
              sx={{
                alignSelf: "center",
                padding: "4px 20px",
                border: "1px solid blue",
                ":hover": {
                  border: "1px solid blue",
                },
              }}
            >
              Remove
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
        </Box>
      </Box>
    </>
  );
};

export default MyProfile;
