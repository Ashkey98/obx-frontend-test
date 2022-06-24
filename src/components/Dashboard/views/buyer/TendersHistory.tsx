import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import TempTable from "../../ults/TempTable";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ViewTender from "../../ults/ViewTender";

const TendersHistory = () => {
  const [view, setView] = useState("main");
  const tableData = {
    headings: [
      "Tender Id",
      "Tender Name",
      "Publish Date",
      "End Date",
      "Value(SGD)",
      "View",
      "Status",
      "Delete",
    ],
    rowsData: [
      {
        tenderId: "984574",
        tenderName: "Renewal of new Bids",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        value: "$ 30Mn",
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "blue",
              }}
            >
              View
            </Typography>
          </IconButton>
        ),
        status: "NotAwarded",
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
      {
        tenderId: "984574",
        tenderName: "New Tender for CCTV Installations",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        value: "$ 30Mn",
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "blue",
              }}
            >
              View
            </Typography>
          </IconButton>
        ),
        status: "Awarded",
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
      {
        tenderId: "984574",
        tenderName: "Renewal of new Bids",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        value: "$ 30Mn",
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "blue",
              }}
            >
              View
            </Typography>
          </IconButton>
        ),
        status: "NotAwarded",
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
      {
        tenderId: "984574",
        tenderName: "New Tender for CCTV Installations",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        value: "$ 30Mn",
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "blue",
              }}
            >
              View
            </Typography>
          </IconButton>
        ),
        status: "Awarded",
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
      {
        tenderId: "984574",
        tenderName: "Renewal of new Bids",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        value: "$ 30Mn",
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "blue",
              }}
            >
              View
            </Typography>
          </IconButton>
        ),
        status: "NotAwarded",
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
      {
        tenderId: "984574",
        tenderName: "New Tender for CCTV Installations",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        value: "$ 30Mn",
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "blue",
              }}
            >
              View
            </Typography>
          </IconButton>
        ),
        status: "Awarded",
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
    ],
    width: 900,
  };
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
          Tender History
        </Typography>
        {view === "main" ? (
          <TempTable tableData={tableData} />
        ) : view === "viewTender" ? (
          <ViewTender setView={setView} />
        ) : null}
      </Box>
    </>
  );
};

export default TendersHistory;
