import React, { useState } from "react";
import { Box } from "@mui/system";
import { IconButton } from "@mui/material";
import TempTable from "./TempTable";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import TenderSearch from "./TenderSearch";
import ViewTender from "./ViewTender";

const ReviewTenders = () => {
  const [view, setView] = useState("main");
  const tableData = {
    headings: [
      "Tender Id",
      "Tender Title",
      "Created Date",
      "Expiry Date",
      "Edit",
      "View",
      "Delete",
    ],
    rowsData: [
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "984574",
        userGroup: "ABC Tenders",
        publishDate: "22-10-2021",
        endDate: "22-12-2022",
        edit: (
          <IconButton>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton onClick={() => setView("viewTender")}>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
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
export default ReviewTenders;
