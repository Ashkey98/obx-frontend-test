import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { flex, flexBetween, flexColumn } from "../../../styles/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import TempTable from "./TempTable";

const tableData = {
  headings: [
    "Bidder Name",
    "Company Name",
    "Submitted Date",
    "Bid Price (SGD)",
    "Status",
    "Award/Reject",
  ],
  rowsData: [
    {
      bidderName: "John Doe",
      companyName: "ABC Tenders",
      dateOfSubmission: "23/12/2021",
      value: "$10Mn",
      status: "Verified",
      award: "Pending Awarded",
    },
    {
      bidderName: "John Doe",
      companyName: "ABC Tenders",
      dateOfSubmission: "23/12/2021",
      value: "$10Mn",
      status: "Verified",
      award: "Pending Awarded",
    },
    {
      bidderName: "John Doe",
      companyName: "ABC Tenders",
      dateOfSubmission: "23/12/2021",
      value: "$10Mn",
      status: "Verified",
      award: "Pending Awarded",
    },
    {
      bidderName: "John Doe",
      companyName: "ABC Tenders",
      dateOfSubmission: "23/12/2021",
      value: "$10Mn",
      status: "Verified",
      award: "Pending Awarded",
    },
    {
      bidderName: "John Doe",
      companyName: "ABC Tenders",
      dateOfSubmission: "23/12/2021",
      value: "$10Mn",
      status: "Verified",
      award: "Pending Awarded",
    },
    {
      bidderName: "John Doe",
      companyName: "ABC Tenders",
      dateOfSubmission: "23/12/2021",
      value: "$10Mn",
      status: "Verified",
      award: "Pending Awarded",
    },
    {
      bidderName: "John Doe",
      companyName: "ABC Tenders",
      dateOfSubmission: "23/12/2021",
      value: "$10Mn",
      status: "Verified",
      award: "Pending Awarded",
    },
  ],
};

interface ListProps {
  heading: string;
  value: string;
}
interface ViewTenderProps {
  setView: any;
}

const List = ({ heading, value }: ListProps) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Typography
        sx={{
          color: "#4338CA",
        }}
      >
        {heading}
      </Typography>
      <Typography>{value}</Typography>
    </Box>
  );
};

const ViewTender = ({ setView }: ViewTenderProps) => {
  return (
    <>
      <Box
        sx={{
          ...flexColumn,
          gap: "20px",
        }}
      >
        <Box
          sx={{
            boxShadow: 1,
          }}
        >
          <Box
            sx={{
              ...flexBetween,
              backgroundColor: "white",
              padding: "12px 24px",
              borderBottom: "1px solid lightgray",
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Tender Details
            </Typography>

            <Typography
              sx={{
                color: "#4338CA",
                ...flex,
                cursor: "pointer",
              }}
            >
              <Button onClick={() => setView("main")}>
                <KeyboardBackspaceIcon /> Back
              </Button>
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "24px",
              margin: "0 auto",
            }}
          >
            <List heading="Tender Id : " value="R3743654" />
            <List heading="Tender Title : " value="ABC Tenders" />
            <List heading="Tender Value : " value="20Mn SGD" />
            <List heading="Bid Closing Date and Time : " value="Bid Closing Date and Time " />
            <List heading="No of Bid Openers : " value="4" />
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              backgroundColor: "white",
              padding: "12px 24px",
              borderBottom: "1px solid rgb(209, 213, 219",
              ...flexBetween,
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "20px",
              }}
            >
              Tenders List
            </Typography>
          </Box>
          <TempTable tableData={tableData} />
        </Box>
      </Box>
    </>
  );
};

export default ViewTender;
