import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import TempTable from "../../ults/TempTable";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const tableData = {
  headings: [
    "Status",
    "Tender Id",
    "Company Name",
    "End Date",
    "Value(SGD)",
    "No of Views",
    "Delete",
  ],
  rowsData: [
    {
      status: "NotAwarded",
      tenderId: "984574",
      tenderName: "ABC Tenders",
      endDate: "22-12-2022",
      value: "$ 30Mn",
      views: "87293",
      delete: (
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
    {
      tenderId: "984574",
      tenderName: "RRR Tenders",
      endDate: "22-12-2022",
      value: "$ 30Mn",
      status: "Awarded",
      views: "87293",
      delete: (
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
    {
      status: "NotAwarded",
      tenderId: "984574",
      tenderName: "ABC Tenders",
      endDate: "22-12-2022",
      value: "$ 30Mn",
      views: "87293",
      delete: (
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
    {
      tenderId: "984574",
      tenderName: "RRR Tenders",
      endDate: "22-12-2022",
      value: "$ 30Mn",
      status: "Awarded",
      views: "87293",
      delete: (
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
    {
      status: "NotAwarded",
      tenderId: "984574",
      tenderName: "ABC Tenders",
      endDate: "22-12-2022",
      value: "$ 30Mn",
      views: "87293",
      delete: (
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
    {
      tenderId: "984574",
      tenderName: "RRR Tenders",
      endDate: "22-12-2022",
      value: "$ 30Mn",
      status: "Awarded",
      views: "87293",
      delete: (
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
    {
      status: "NotAwarded",
      tenderId: "984574",
      tenderName: "ABC Tenders",
      endDate: "22-12-2022",
      value: "$ 30Mn",
      views: "87293",
      delete: (
        <IconButton>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      ),
    },
  ],
};

const ActiveBids = () => {
  return (
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
          Active Bids
        </Typography>
        <TempTable tableData={tableData} />
      </Box>
    </>
  );
};

export default ActiveBids;
