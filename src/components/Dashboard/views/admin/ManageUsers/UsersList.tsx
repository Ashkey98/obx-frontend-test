import { Box, Button, IconButton, Switch, Typography } from "@mui/material";
import React from "react";
import { flex, flexBetween, flexColumn } from "../../../../../styles/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TempTable from "../../../ults/TempTable";

interface UsersListProps {
  setView: any;
}
const UsersList = ({ setView }: UsersListProps) => {
  const tableData = {
    headings: [
      "S.No",
      "Tender Id",
      "Tender Title",
      "Tender Value",
      "Tender Publish Date",
      "Tender Award Date",
      "Awarded",
    ],

    rowsData: [
      {
        sno: "01",
        tenderId: "94837593",
        tenderTitle: "ABC Tenders",
        tenderValue: "24Mn SGD",
        publishDate: "20-11-2021",
        awardedDate: "20-11-2021",
        awarded: "Pending",
      },
      {
        sno: "02",
        tenderId: "94837593",
        tenderTitle: "ABC Tenders",
        tenderValue: "24Mn SGD",
        publishDate: "20-11-2021",
        awardedDate: "20-11-2021",
        awarded: "Pending",
      },
      {
        sno: "03",
        tenderId: "94837593",
        tenderTitle: "ABC Tenders",
        tenderValue: "24Mn SGD",
        publishDate: "20-11-2021",
        awardedDate: "20-11-2021",
        awarded: "Pending",
      },
      {
        sno: "04",
        tenderId: "94837593",
        tenderTitle: "ABC Tenders",
        tenderValue: "24Mn SGD",
        publishDate: "20-11-2021",
        awardedDate: "20-11-2021",
        awarded: "Pending",
      },
      {
        sno: "05",
        tenderId: "94837593",
        tenderTitle: "ABC Tenders",
        tenderValue: "24Mn SGD",
        publishDate: "20-11-2021",
        awardedDate: "20-11-2021",
        awarded: "Pending",
      },
      {
        sno: "06",
        tenderId: "94837593",
        tenderTitle: "ABC Tenders",
        tenderValue: "24Mn SGD",
        publishDate: "20-11-2021",
        awardedDate: "20-11-2021",
        awarded: "Pending",
      },
      {
        sno: "07",
        tenderId: "94837593",
        tenderTitle: "ABC Tenders",
        tenderValue: "24Mn SGD",
        publishDate: "20-11-2021",
        awardedDate: "20-11-2021",
        awarded: "Pending",
      },
      {
        sno: "08",
        tenderId: "94837593",
        tenderTitle: "ABC Tenders",
        tenderValue: "24Mn SGD",
        publishDate: "20-11-2021",
        awardedDate: "20-11-2021",
        awarded: "Pending",
      },
    ],
  };
  return (
    <Box
      sx={{
        padding: "20px 30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button onClick={() => setView("profile")}>
          <Typography
            sx={{
              ...flex,
            }}
          >
            <KeyboardBackspaceIcon /> Back
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          boxShadow: 2,
          padding: "20px 30px",
          fontSize: "22px",
          ...flexBetween,
          marginBottom: "40px",
        }}
      >
        <Box sx={{ ...flexColumn, marginTop: "10px" }}>
          <Typography>Total Users - John Doe </Typography>
          <Typography>Subscription Paid - 120</Typography>
        </Box>
        <Box sx={{ ...flexColumn, marginTop: "10px" }}>
          <Typography>Total Revenue - 9328 SGD</Typography>
          <Typography>Subscription Unpaid - 30</Typography>
        </Box>
      </Box>

      <TempTable tableData={tableData} />
    </Box>
  );
};

export default UsersList;
