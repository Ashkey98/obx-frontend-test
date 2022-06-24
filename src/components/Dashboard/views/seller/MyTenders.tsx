import React, { useState } from "react";
import { Box } from "@mui/system";
import TempTable from "../../ults/TempTable";
import { IconButton, Typography } from "@mui/material";
import TenderSearch from "../../ults/TenderSearch";
import ViewTender from "../../ults/ViewTender";

const MyTenders = () => {
  const [view, setView] = useState("main");

  const tableData = {
    headings: [
      "S.no",
      "Tender Id",
      "Tender Name",
      "Publish Date",
      "End Date",
      "Value(SGD)",
      "View",
    ],
    rowsData: [
      {
        serial: "01",
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
      },
      {
        serial: "01",
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
      },
      {
        serial: "02",
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
      },
      {
        serial: "03",
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
      },
      {
        serial: "04",
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
      },
      {
        serial: "05",
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
      },
      {
        serial: "06",
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
      },
    ],
  };
  return (
    <Box
      sx={{
        padding: "24px 40px",
      }}
    >
      <TenderSearch />

      {view === "main" ? (
        <TempTable tableData={tableData} />
      ) : view === "viewTender" ? (
        <ViewTender setView={setView} />
      ) : null}
    </Box>
  );
};
export default MyTenders;
