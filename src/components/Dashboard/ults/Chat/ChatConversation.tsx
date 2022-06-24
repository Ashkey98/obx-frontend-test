import React from "react";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { flexColumn } from "../../../../styles/styles";

interface props {
  color?: string;
}

const ChatConversation = ({ color }: props) => {
  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          maxHeight: "360px",
          overflowY: "scroll",
          " ::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: "lightgray",
          },
          "::-webkit-scrollbar": {
            width: "4px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            margin: "15px 0",
          }}
        >
          <Avatar sx={{ width: "40px", height: "40px" }} />

          <Box
            sx={{
              backgroundColor: "#f3f4f6",
              padding: "10px 14px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam explicabo enim
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "row-reverse",
            gap: "10px",
            margin: "15px 0",
          }}
        >
          <Avatar sx={{ width: "40px", height: "40px" }} />

          <Box
            sx={{
              backgroundColor: " #dbeafe",
              padding: "10px 14px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam explicabo enim
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            margin: "15px 0",
          }}
        >
          <Avatar sx={{ width: "40px", height: "40px" }} />

          <Box
            sx={{
              backgroundColor: "#f3f4f6",
              padding: "10px 14px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam explicabo enim
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "row-reverse",
            gap: "10px",
            margin: "15px 0",
          }}
        >
          <Avatar sx={{ width: "40px", height: "40px" }} />

          <Box
            sx={{
              backgroundColor: " #dbeafe",
              padding: "10px 14px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam explicabo enim
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            margin: "15px 0",
          }}
        >
          <Avatar sx={{ width: "40px", height: "40px" }} />

          <Box
            sx={{
              backgroundColor: "#f3f4f6",
              padding: "10px 14px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam explicabo enim
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "30px",
          ...flexColumn,
          gap: "20px",
        }}
      >
        <TextField multiline minRows={5} sx={{ backgroundColor: "#eff2f9" }} />
        <Button
          variant="contained"
          sx={{
            padding: "4px 30px",
            alignSelf: "center",
            backgroundColor: color ? color : "inherit",
          }}
        >
          <Typography>Send</Typography>
        </Button>
      </Box>
    </>
  );
};

export default ChatConversation;
