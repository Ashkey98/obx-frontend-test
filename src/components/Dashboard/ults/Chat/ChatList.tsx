import React from "react";
import { Avatar, Typography } from "@mui/material";
import { Box } from "@mui/system";

interface ChatListProps {
  setView: React.Dispatch<React.SetStateAction<string>>;
}

const ChatList = ({ setView }: ChatListProps) => {
  function handleChatChange() {
    setView("mobileConversation");
  }

  return (
    <>
      {[1, 2, 3, 4].map(() => {
        return (
          <Box
            onClick={handleChatChange}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "12px 20px",
              borderBottom: "1px solid lightgrey",
              cursor: "pointer",
            }}
          >
            <Avatar sx={{ width: "40px", height: "40px" }} />
            <Typography sx={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: "16px",
                }}
              >
                John Doe
              </span>
              <span
                style={{
                  fontSize: "12px",
                }}
              >
                Hey, There I am avaliable
              </span>
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >
              13:40 PM
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

export default ChatList;
