import React from "react";
import { Box } from "@mui/system";
import AgentHome from "./AgentHome";
import ManageAccount from "../../ults/ManageAccount";
import MyProfile from "../../ults/MyProfile";
import CreateUsers from "./CreateUsers";
import UserGroups from "./UserGroups";
import ReviewTenders from "../../ults/ReviewTenders";
import AddBuilding from "./AddBuilding";

interface AgentViewsProps {
  view: String;
}

const AgentViews = ({ view }: AgentViewsProps) => {
  return (
    <>
      <Box sx={{ background: "white", alignSelf: "stretch" }}>
        {view === "Dashboard" ? (
          <AgentHome />
        ) : view === "Manage Accounts" ? (
          <ManageAccount />
        ) : view === "Create Users" ? (
          <CreateUsers />
        ) : view === "User Groups" ? (
          <UserGroups />
        ) : view === "Review Tenders" ? (
          <ReviewTenders />
        ) : view === "Add Building" ? (
          <AddBuilding />
        ) : view === "My Profile" ? (
          <MyProfile />
        ) : null}
      </Box>
    </>
  );
};

export default AgentViews;
