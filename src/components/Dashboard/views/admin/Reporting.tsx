import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import TempTable from "../../ults/TempTable";
import { flexCenter, flexColumn } from "../../../../styles/styles";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = [2019, 2020, 2021, 2022];

const tableData = {
  headings: ["S.No", "Seller Name", "Total Tenders", "Tenders Awarded", "Status", "Register"],

  rowsData: [
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
    {
      sno: "01",
      userName: "John Deo",
      totalTenders: "79",
      tendersAwarded: "21",
      status: "Verified",
      register: "20-11-2021",
    },
  ],
};

const Reporting = () => {
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleMonth = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
  };
  const handleYear = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };

  const handleClear = () => {
    setMonth("");
    setYear("");
  };

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
          Sales Report
        </Typography>
        <Box
          sx={{
            padding: "20px 30px",
            fontSize: "22px",
            ...flexColumn,
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              ...flexCenter,
              width: "100%",
              gap: "20px",
            }}
          >
            <Typography>Select Month - </Typography>
            <FormControl
              sx={{
                width: "100%",
                maxWidth: "300px",
              }}
              size="small"
            >
              <InputLabel id="month-label">Month</InputLabel>
              <Select
                labelId="month-label"
                id="month"
                value={month}
                label="Month"
                onChange={handleMonth}
              >
                {months.map((month, index) => (
                  <MenuItem value={month}>{month}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box
            sx={{
              ...flexCenter,
              width: "100%",
              gap: "20px",
            }}
          >
            <Typography>Select Year - </Typography>
            <FormControl
              sx={{
                width: "100%",
                maxWidth: "300px",
              }}
              size="small"
            >
              <InputLabel id="year-label">Year</InputLabel>
              <Select
                labelId="year-label"
                id="year"
                value={year}
                label="Year"
                onChange={handleYear}
              >
                {years.map((year, index) => (
                  <MenuItem value={year}>{year}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Button
              sx={{
                padding: "10px 20px",
                fontWeight: "600",
                marginRight: "20px",
              }}
              variant="contained"
            >
              <Typography>Submit</Typography>
            </Button>
            <Button
              onClick={handleClear}
              sx={{
                padding: "10px 20px",
                fontWeight: "600",
              }}
              variant="contained"
            >
              <Typography>Clear</Typography>
            </Button>
          </Box>
        </Box>
        <TempTable tableData={tableData} />
      </Box>
    </>
  );
};

export default Reporting;
