import React from "react";
import { Button, Chip, Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavLink from "../../components/NavLink";
import Link from "next/link";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";

const SeachResultTender = () => {
  const tenderSearchResult = [
    {
      tenderName: "Tender Id",
      tenderId: "5445433",
      date: "2022-03-19",
      value: "SGD 30Mn",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore doloremque necessitatibus, praesentium commodi eligendi, obcaecati rem totam fugiat ad ut consequatur animi adipisci nostrum accusamus a eaque aspernatur. Minus odit nemo quibusdam, fugit error quis quasi dolor ducimus ipsa...",
      awarded: true,
      type: "HBC",
    },
    {
      tenderName: "Tender Id",
      tenderId: "5445433",
      date: "2022-03-19",
      value: "SGD 30Mn",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore doloremque necessitatibus, praesentium commodi eligendi, obcaecati rem totam fugiat ad ut consequatur animi adipisci nostrum accusamus a eaque aspernatur. Minus odit nemo quibusdam, fugit error quis quasi dolor ducimus ipsa...",
      awarded: false,
      type: "OBC",
    },
    {
      tenderName: "Tender Id",
      tenderId: "5445433",
      date: "2022-03-19",
      value: "SGD 30Mn",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore doloremque necessitatibus, praesentium commodi eligendi, obcaecati rem totam fugiat ad ut consequatur animi adipisci nostrum accusamus a eaque aspernatur. Minus odit nemo quibusdam, fugit error quis quasi dolor ducimus ipsa...",
      awarded: true,
      type: "HBC",
    },
    {
      tenderName: "Tender Id",
      tenderId: "5445433",
      date: "2022-03-19",
      value: "SGD 30Mn",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore doloremque necessitatibus, praesentium commodi eligendi, obcaecati rem totam fugiat ad ut consequatur animi adipisci nostrum accusamus a eaque aspernatur. Minus odit nemo quibusdam, fugit error quis quasi dolor ducimus ipsa...",
      awarded: false,
      type: "OBC",
    },
    {
      tenderName: "Tender Id",
      tenderId: "5445433",
      date: "2022-03-19",
      value: "SGD 30Mn",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore doloremque necessitatibus, praesentium commodi eligendi, obcaecati rem totam fugiat ad ut consequatur animi adipisci nostrum accusamus a eaque aspernatur. Minus odit nemo quibusdam, fugit error quis quasi dolor ducimus ipsa...",
      awarded: true,
      type: "HBC",
    },
    {
      tenderName: "Tender Id",
      tenderId: "5445433",
      date: "2022-03-19",
      value: "SGD 30Mn",
      info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio labore doloremque necessitatibus, praesentium commodi eligendi, obcaecati rem totam fugiat ad ut consequatur animi adipisci nostrum accusamus a eaque aspernatur. Minus odit nemo quibusdam, fugit error quis quasi dolor ducimus ipsa...",
      awarded: false,
      type: "OBC",
    },
  ];

  return (
    <>
      {tenderSearchResult.map((tender, index) => {
        return (
          <Paper
            elevation={3}
            sx={{
              marginBottom: "20px",
            }}
            key={index}
          >
            <Box
              sx={{
                padding: "20px",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Box>
<<<<<<< HEAD
                <Typography
                  sx={{
                    marginBottom: "4px",
                    fontSize: {
                      xs: "28px",
                      md: "28px",
                    },
                    fontWeight: "bold",
                  }}
                >
=======
                <Typography marginBottom={"4px"} variant="h4">
>>>>>>> initial commit
                  {tender.tenderName}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
<<<<<<< HEAD
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
=======
>>>>>>> initial commit
                  gap: "10px",
                }}
              >
                <CalendarTodayIcon
                  color="primary"
                  sx={{
                    fontSize: "48px",
                  }}
                />
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography>{tender.date}</Typography>
                  <Typography>Bid Before</Typography>
                </Box>
                <Link href="/tenderdetails">
                  <Button sx={{ padding: "10px 24px" }} variant="contained">
                    <Typography>View Tender</Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ padding: "20px" }}>
<<<<<<< HEAD
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: {
                    xs: "15px",
                    lg: "30px",
                  },
                  marginBottom: "10px",
                }}
              >
=======
              <Box sx={{ display: "flex", gap: "30px", marginBottom: "10px" }}>
>>>>>>> initial commit
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <InsertDriveFileOutlinedIcon color="primary" /> Tender Id :{tender.tenderId}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <PaidOutlinedIcon color="primary" /> Estimated budget : {tender.value}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <EmojiEventsOutlinedIcon color="primary" /> Status :&nbsp;
                  {tender.awarded === true ? "Awarded" : "Processing"}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <ArticleOutlinedIcon color="primary" />
                  Contract Type :&nbsp;
                  {tender.type}
                </Typography>
              </Box>
<<<<<<< HEAD

=======
>>>>>>> initial commit
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                }}
              >
                {tender.info}
                <NavLink linkPath="/marketplace" styles={{ fontSize: "inherit", color: "red" }}>
                  Read more
                </NavLink>
              </Typography>
            </Box>
          </Paper>
        );
      })}
    </>
  );
};

export default SeachResultTender;
