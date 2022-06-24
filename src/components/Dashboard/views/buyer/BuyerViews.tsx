import React from "react";
import { Box } from "@mui/system";
import BuyerHome from "../buyer/BuyerHome";
import Chat from "../../ults/Chat";
import ManageAccount from "../../ults/ManageAccount";
import AddDocuments from "../../ults/AddDocuments";
import AddTenders from "./AddTenders";
import TendersHistory from "./TendersHistory";
import AwardTenders from "./AwardTenders";
import MyProfile from "../../ults/MyProfile";

interface BuyerViewsProps {
  view: String;
}

const BuyerViews = ({ view }: BuyerViewsProps) => {
  return (
    <>
      <Box sx={{ height: "100%", background: "white", alignSelf: "stretch" }}>
        {view === "Dashboard" ? (
          <BuyerHome />
        ) : view === "My Chat" ? (
          <Chat />
        ) : view === "Manage Accounts" ? (
          <ManageAccount />
        ) : view === "Add Documents" ? (
          <AddDocuments />
        ) : view === "Add Tenders" ? (
          <AddTenders />
        ) : view === "Tenders History" ? (
          <TendersHistory />
        ) : view === "Awards Tenders" ? (
          <AwardTenders />
        ) : view === "My Profile" ? (
          <MyProfile />
        ) : null}
      </Box>
    </>
  );
};

export default BuyerViews;
