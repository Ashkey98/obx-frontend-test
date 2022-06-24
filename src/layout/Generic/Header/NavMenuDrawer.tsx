import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavLink from "../../../components/NavLink";
import { StyledListItem } from "../../../styles/styles";

import HomeIcon from "@mui/icons-material/Home";
import ViewListIcon from "@mui/icons-material/ViewList";
import FolderIcon from "@mui/icons-material/Folder";
import CampaignIcon from "@mui/icons-material/Campaign";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

type Anchor = "left";

const NavMenuDrawer = function () {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { title: "Home", link: "/", icon: <HomeIcon /> },
          { title: "Marketplace", link: "/marketplace", icon: <ViewListIcon /> },
          { title: "Directory", link: "/directorychoose", icon: <FolderIcon /> },
          { title: "Announcments", link: "/announcements", icon: <CampaignIcon /> },
          { title: "FAQ", link: "/faq", icon: <LiveHelpIcon /> },
          { title: "Contact Us", link: "/contactus", icon: <ContactMailIcon /> },
        ].map((data, index) => (
          <StyledListItem key={index}>
            <NavLink styles={{ width: "100%" }} linkPath={data.link}>
              {data.icon} {data.title}
            </NavLink>
          </StyledListItem>
        ))}
      </List>
      <Divider />
      <List>
        <StyledListItem>
          <NavLink styles={{ width: "100%" }} linkPath="/login">
            <LoginIcon /> Login
          </NavLink>
        </StyledListItem>
        <StyledListItem>
          <NavLink styles={{ width: "100%" }} linkPath="/register">
            <AppRegistrationIcon /> Register
          </NavLink>
        </StyledListItem>
      </List>
    </Box>
  );

  return (
    <>
      {(["left"] as const).map((anchor, index) => (
        <React.Fragment key={index}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={toggleDrawer(anchor, true)}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default NavMenuDrawer;
