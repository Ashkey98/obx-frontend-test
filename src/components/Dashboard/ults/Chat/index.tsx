import React, { useEffect, useState } from "react";
import { Avatar, Button, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import { flex, flexCenter } from "../../../../styles/styles";
import ChatList from "./ChatList";
import ChatConversation from "./ChatConversation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Chat = () => {
  const [view, setView] = useState("mobileConversation");

  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [color, setColor] = useState("");

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);

    if (window.innerWidth < 900) {
      setView("mobileList");
    }
    if (window.innerWidth > 900) {
      setView("desktop");
    }
  };

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  function handleBackToChatList() {
    setView("mobileList");
  }

  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            md: "space-between",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              lineHeight: 2,
              fontSize: {
                xs: "12px",
                md: "16px",
              },
            }}
          >
            Search:
          </Typography>

          <TextField
            size="small"
            sx={{
              alignSelf: "stretch",
            }}
          />

          <Button
            sx={{ padding: "4px 24px", backgroundColor: color ? color : "inherit" }}
            variant="contained"
          >
            Search
          </Button>
        </Box>

        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              display: {
                xs: "none",
                md: "flex",
              },
              visibility: {
                xs: "hidden",
                md: "visible",
              },
              alignItems: "center",
              color: "gray",
            }}
          >
            <DeleteIcon />
            Delete Conversations
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        {view === "desktop" ? (
          <>
            <Grid container>
              <Grid
                xs={12}
                md={5}
                sx={{
                  border: "1px solid lightgrey",
                  height: "100%",
                }}
              >
                <ChatList setView={setView} />
              </Grid>
              <Grid
                sx={{
                  borderLeft: "1px solid lightgrey",
                  height: "100%",
                }}
                item
                xs={12}
                md={7}
              >
                <ChatConversation color={color} />
              </Grid>
            </Grid>
          </>
        ) : view === "mobileList" ? (
          <>
            <Grid container>
              <Grid
                xs={12}
                md={5}
                sx={{
                  border: "1px solid lightgrey",
                  height: "100%",
                }}
              >
                <ChatList setView={setView} />
              </Grid>
            </Grid>
          </>
        ) : view === "mobileConversation" ? (
          <>
            <Grid container>
              <Grid
                sx={{
                  borderLeft: "1px solid lightgrey",
                  height: "100%",
                }}
                item
                xs={12}
                md={7}
              >
                <Box
                  sx={{
                    ...flex,
                    padding: "10px",
                    borderBottom: "1px solid gray",
                  }}
                >
                  <IconButton onClick={handleBackToChatList}>
                    <ArrowBackIcon />
                  </IconButton>
                  <Box
                    sx={{
                      ...flexCenter,
                      gap: "10px",
                    }}
                  >
                    <Avatar />
                    <Typography>John Doe</Typography>
                  </Box>
                </Box>
                <ChatConversation color={color} />
              </Grid>
            </Grid>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default Chat;
