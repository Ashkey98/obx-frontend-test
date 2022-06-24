import React, { useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import TempTable from "../../ults/TempTable";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ViewTender from "../../ults/ViewTender";

const SaveForLater = () => {
  const [view, setView] = useState("main");

  const tableData = {
    headings: ["Tender Id", "Company Name", "End Date", "Tender Value", "View", "Delete"],
    rowsData: [
      {
        tenderId: "984574",
        tenderName: "ABC Tenders",
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
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
      {
        tenderId: "984574",
        tenderName: "ABC Tenders",
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
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
      {
        tenderId: "984574",
        tenderName: "ABC Tenders",
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
        delete: (
          <IconButton>
            <DeleteOutlineOutlinedIcon />
          </IconButton>
        ),
      },
    ],
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
          Save for Later
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

export default SaveForLater;
