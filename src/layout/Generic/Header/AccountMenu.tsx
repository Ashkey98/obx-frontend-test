import React from "react";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Divider, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import NavLink from "../../../components/NavLink";
import { Box } from "@mui/system";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const AccountMenu = () => {
  // account menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          alignItems: "center",
          gap: "10px",
          flexGrow: 1,
        }}
      >
        <Tooltip title="Login">
          <>
            <Button
              onClick={handleOpenUserMenu}
              sx={{
                border: "2px solid #2944c1",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccountCircleIcon />
              <Typography variant="subtitle1">Login</Typography>
            </Button>
          </>
        </Tooltip>
        <Tooltip title="Register">
          <>
            <NavLink linkPath="/register">
              <Button
                sx={{
                  border: "2px solid #2944c1",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <HowToRegIcon />
                <Typography variant="subtitle1">Register</Typography>
              </Button>
            </NavLink>
          </>
        </Tooltip>
      </Box>

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <LoginIcon /> &nbsp;&nbsp;&nbsp;{" "}
          <NavLink styles={{ width: "100%" }} linkPath="/login">
            Login
          </NavLink>
        </MenuItem>
        <MenuItem>
          <QrCode2Icon /> &nbsp;&nbsp;&nbsp;
          <NavLink styles={{ width: "100%" }} linkPath="/singpass">
            Login with SingPass
          </NavLink>
        </MenuItem>
        <MenuItem>
          <AdminPanelSettingsIcon /> &nbsp;&nbsp;&nbsp;
          <NavLink styles={{ width: "100%" }} linkPath="/adminlogin">
            Admin Login
          </NavLink>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon fontSize="small" />
          </ListItemIcon>
          My Profile
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
