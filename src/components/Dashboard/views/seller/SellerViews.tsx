import React from "react";
import { Box } from "@mui/system";
import ManageAccount from "../../ults/ManageAccount";
import MyProfile from "../../ults/MyProfile";
import SellerHome from "./SellerHome";
import Subscription from "./Subscription";
import MyTenders from "./MyTenders";
<<<<<<< HEAD
=======
import AddDocuments from "../../ults/AddDocuments";
>>>>>>> initial commit
import ActiveBids from "./ActiveBids";
import RequestForInformation from "./RequestForInformation";
import SaveForLater from "./SaveForLater";
import Chat from "../../ults/Chat";
<<<<<<< HEAD
import OBXSypplyHead from "./OBXSypplyHead";
=======
>>>>>>> initial commit

interface SellerViewsProps {
  view: String;
}

const SellerViews = ({ view }: SellerViewsProps) => {
  return (
    <>
      <Box sx={{ background: "white", alignSelf: "stretch" }}>
        {view === "Dashboard" ? (
          <SellerHome />
        ) : view === "My Chat" ? (
          <Chat />
        ) : view === "Manage Accounts" ? (
          <ManageAccount />
        ) : view === "Subscription" ? (
          <Subscription />
        ) : view === "My Tenders" ? (
          <MyTenders />
<<<<<<< HEAD
        ) : view === "OBX Supply Head" ? (
          <OBXSypplyHead />
=======
        ) : view === "Add Documents" ? (
          <AddDocuments />
>>>>>>> initial commit
        ) : view === "Active Bids" ? (
          <ActiveBids />
        ) : view === "Request for Information" ? (
          <RequestForInformation />
        ) : view === "Save for Later" ? (
          <SaveForLater />
        ) : view === "My Profile" ? (
          <MyProfile />
        ) : null}
      </Box>
    </>
  );
};

export default SellerViews;
