import React from "react";
import { Box } from "@mui/system";
import ManageAccount from "../../ults/ManageAccount";
import MyProfile from "../../ults/MyProfile";
import ManagerHome from "./ManagerHome";
import ReviewTenders from "../../ults/ReviewTenders";

interface ManagerViewsProps {
  view: String;
}

const ManagerViews = ({ view }: ManagerViewsProps) => {
  return (
    <>
      <Box sx={{ background: "white", alignSelf: "stretch" }}>
        {view === "Dashboard" ? (
          <ManagerHome />
        ) : view === "Manage Accounts" ? (
          <ManageAccount />
        ) : view === "Review Tenders" ? (
          <ReviewTenders />
        ) : view === "My Profile" ? (
          <MyProfile />
        ) : null}
      </Box>
    </>
  );
};

export default ManagerViews;
