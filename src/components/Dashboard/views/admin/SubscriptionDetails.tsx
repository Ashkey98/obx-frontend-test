import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { flex, flexBetween, flexCenter } from "../../../../styles/styles";
import TempTable from "../../ults/TempTable";
import TableView from "../../../TableView";

const tableData = {
  headings: ["S.No", "Username", "Plan validity", "Expirey date", "Registered date", "View"],

  rowsData: [
    {
      sno: "01",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "02",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "03",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "04",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "05",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "06",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "07",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "08",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "09",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
    {
      sno: "10",
      userName: "John Deo",
      validity: "6 Months",
      expieryDate: "20-05-2022",
      register: "20-11-2021",
      view: <TableView>View</TableView>,
    },
  ],
};

const SubscriptionDetails = () => {
  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflow: "hidden",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "28px",
          }}
        >
          Subscription List
        </Typography>
        <Box
          sx={{
            margin: "30px 0",
            boxShadow: 3,
            padding: "20px 40px",
          }}
        >
          <Box sx={{ ...flexBetween, marginTop: "10px" }}>
            <Typography variant="subtitle2">Total Users - 150 </Typography>
            <Typography variant="subtitle2">Subscription Paid - 120</Typography>
          </Box>
          <Box sx={{ ...flexBetween, marginTop: "10px" }}>
            <Typography variant="subtitle2">Total Revenue - 9328 SGD</Typography>
            <Typography variant="subtitle2">Subscription Unpaid - 30</Typography>
          </Box>
        </Box>
<<<<<<< HEAD
=======
        <Box
          sx={{
            ...flex,
            justifyContent: "flex-end",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Filter : &nbsp;
          </Typography>
          <Box
            sx={{
              ...flex,
              gap: "20px",
            }}
          >
            <TextField
              InputLabelProps={{ shrink: true }}
              type="date"
              label="from"
              variant="outlined"
            />
            <TextField
              InputLabelProps={{ shrink: true }}
              type="date"
              label="to"
              variant="outlined"
            />
            <Button
              sx={{
                alignSelf: "stretch",
                padding: "0 20px",
              }}
              variant="contained"
            >
              <Typography
                sx={{
                  fontWeight: "600",
                }}
              >
                Search
              </Typography>
            </Button>
          </Box>
        </Box>
>>>>>>> initial commit

        <TempTable tableData={tableData} />
      </Box>
    </>
  );
};

export default SubscriptionDetails;
