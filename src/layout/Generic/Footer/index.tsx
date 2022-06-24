import React from "react";
import NextLink from "next/link";

// MUI
import { Grid, IconButton, Link as MUILink, List, Typography } from "@mui/material";
import ContainerWrapper from "../../../components/ContainerWrapper";
import Logo from "../../../components/Logo";
import { Box } from "@mui/material";
import NavLink from "../../../components/NavLink";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { flexBetween } from "../../../styles/styles";

const Footer = () => {
  const addressLinks: Array<{ link: string; text: React.ReactNode; icon: React.ReactNode }> = [
    {
      link: "/",
      text: "234, Monteral, Singpore -20",
      icon: <LocationOnIcon />,
    },
    {
      link: "mailto:obx@gmail.com",
      text: "obx@gmail.com",
      icon: <EmailIcon />,
    },
    {
      link: "tel:+65-1234-5678",
      text: "+65-1234-5678",
      icon: <CallIcon />,
    },
  ];
  const usefulLinks: Array<{ link: string; text: React.ReactNode }> = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/about",
      text: "About",
    },
    {
      link: "/features",
      text: "Obx Features",
    },
    {
      link: "/directory",
      text: "Directory",
    },
    {
      link: "/announcments",
      text: "Announcements",
    },
    {
      link: "/faq",
      text: "FAQ",
    },
    {
      link: "/login",
      text: "Login",
    },
    {
      link: "/register",
      text: "Register",
    },
  ];

  const contactLinks: Array<{ link: string; text: React.ReactNode }> = [
    {
      link: "/contactus",
      text: "Contact Us",
    },
    {
      link: "/terms",
      text: "Terms & Conditions",
    },
    {
      link: "/privacy",
      text: "Privacy Policy",
    },
    {
      link: "/cookies",
      text: "Cookies Policy",
    },
  ];

  return (
    <footer>
      <Box
        sx={{
          backgroundColor: "#eff2f9",
        }}
      >
        <ContainerWrapper>
          <Grid container>
            <Grid item xs={12} md={3.5}>
              <Logo />
              {addressLinks.map((link, index) => {
                return (
                  <NavLink
                    key={index}
                    linkPath={link.link}
                    styles={{
                      padding: "0 10px",
                      fontWeight: "600",
                      marginTop: "16px",
                      display: "flex",
                    }}
                  >
                    {link.icon} &nbsp;&nbsp; {link.text}
                  </NavLink>
                );
              })}
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  margin: "10px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} md={3.5}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "22px",
                  borderBottom: "2px solid #2944c1",
                  width: "max-content",
                }}
              >
                Userful Links
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  fontSize: "20px",
                }}
              >
                <List
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {usefulLinks.slice(0, 4).map((link, index) => {
                    return (
                      <NavLink
                        key={index}
                        linkPath={link.link}
                        styles={{
                          padding: "0 10px",
                          fontWeight: "600",
                          marginTop: "16px",
                        }}
                      >
                        {link.text}
                      </NavLink>
                    );
                  })}
                </List>
                <List
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {usefulLinks.slice(4, usefulLinks.length).map((link, index) => {
                    return (
                      <NavLink
                        key={index}
                        linkPath={link.link}
                        styles={{
                          padding: "0 10px",
                          fontWeight: "600",
                          marginTop: "16px",
                        }}
                      >
                        {link.text}
                      </NavLink>
                    );
                  })}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "22px",
                  borderBottom: "2px solid #2944c1",
                  width: "min-content",
                }}
              >
                Contact
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  fontSize: "20px",
                  flexDirection: "column",
                }}
              >
                <List
                  sx={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {contactLinks.slice(0, 4).map((link, index) => {
                    return (
                      <NavLink
                        key={index}
                        linkPath={link.link}
                        styles={{
                          padding: "0 10px",
                          fontWeight: "600",
                          marginTop: "16px",
                        }}
                      >
                        {link.text}
                      </NavLink>
                    );
                  })}
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "22px",
                  borderBottom: "2px solid #2944c1",
                  width: "max-content",
                }}
              >
                Follow us on
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  margin: "10px",
                }}
              >
                <IconButton>
                  <FacebookIcon sx={{ color: "#1c4273" }} />
                </IconButton>
                <IconButton>
                  <TwitterIcon sx={{ color: "#1c4273" }} />
                </IconButton>
                <IconButton>
                  <InstagramIcon sx={{ color: "#1c4273" }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </ContainerWrapper>
        <Box
          sx={{
            backgroundColor: "#2944c1",
            color: "white",
            padding: "14px 0",
            textAlign: "center",
          }}
        >
          <Typography>&copy;Copyright 2021 OBX. All Rights Reserved</Typography>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
