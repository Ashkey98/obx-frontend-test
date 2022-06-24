import { Box, Typography } from "@mui/material";
import React from "react";
import TempTable from "../../ults/TempTable";

const tableData = {
  headings: [
    "Tender Id",
    "Tender Name",
    "Tender Type",
    "Company",
    "Bid Price (SGD)",
    "Status",
    "Award/Reject",
  ],
  rowsData: [
    {
      tenderId: "984574",
      tenderName: "Renewal of new Bids",
      type: "Closed",
      company: "RRTenders",
      value: "$ 30Mn",
      status: "Verified",
      award: "Awarded",
    },
    {
      tenderId: "984574",
      tenderName: "Renewal of new Bids",
      type: "Closed",
      company: "RRTenders",
      value: "$ 30Mn",
      status: "Verified",
      award: "Awarded",
    },
    {
      tenderId: "984574",
      tenderName: "Renewal of new Bids",
      type: "Closed",
      company: "RRTenders",
      value: "$ 30Mn",
      status: "Verified",
      award: "Awarded",
    },
    {
      tenderId: "984574",
      tenderName: "Renewal of new Bids",
      type: "Closed",
      company: "RRTenders",
      value: "$ 30Mn",
      status: "Verified",
      award: "Awarded",
    },
    {
      tenderId: "984574",
      tenderName: "Renewal of new Bids",
      type: "Closed",
      company: "RRTenders",
      value: "$ 30Mn",
      status: "Verified",
      award: "Awarded",
    },
    {
      tenderId: "984574",
      tenderName: "Renewal of new Bids",
      type: "Closed",
      company: "RRTenders",
      value: "$ 30Mn",
      status: "Verified",
      award: "Awarded",
    },
    {
      tenderId: "984574",
      tenderName: "Renewal of new Bids",
      type: "Closed",
      company: "RRTenders",
      value: "$ 30Mn",
      status: "Verified",
      award: "Awarded",
    },
    {
      tenderId: "984574",
      tenderName: "Renewal of new Bids",
      type: "Closed",
      company: "RRTenders",
      value: "$ 30Mn",
      status: "Verified",
      award: "Awarded",
    },
  ],
};

const AwardTenders = () => {
  return (
    <>
      <>
        <Box
          sx={{
            padding: "24px 40px",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: "28px",
              marginBottom: "30px",
            }}
          >
            Award Tenders
          </Typography>
          <TempTable tableData={tableData} />
        </Box>
      </>
    </>
  );
};

export default AwardTenders;
