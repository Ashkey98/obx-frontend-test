import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import Title from "../../ults/Title";
import { flexColumn } from "../../../../styles/styles";
import TempTable from "../../ults/TempTable";

const OBXSypplyHead = () => {
  const [color, setColor] = useState("");

  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  const tempData = {
    headings: ["S.no", "Supply Head", "Date Acquired", "Date Expired", "Supporting Docs", "Apply"],
    rowsData: [{}],
    width: 900,
  };

  const supplyHeads = [
    "Manned Guarding",
    "Surveillance systems",
    "Access control",
    "Robotics",
    "Cybersecurity",
    "Integrated services",
    "Video analytics",
    "Roving security",
    "Event security",
    "Security consultation",
    "Robotics and AI",
    "Concierge",
  ];

  const [supplyHead, setSupplyHead] = useState("Manned Guarding");
  const [category, setCategory] = useState("All");
  const [tableData, setTableData] = useState({ ...tempData });

  const handleSupplyHeadChange = (event: SelectChangeEvent) => {
    setSupplyHead(event.target.value as string);
  };
  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  function searchSupplyHead() {
    let data = [
      {
        s_no: "1",
        supplyHead: supplyHead,
        dateAcquired: "01/01/2020",
        dateExpired: "01/01/2021",
        supportingDoc: "doc.txt",
        Apply: (
          <>
            <Button
              variant="contained"
              sx={{
                backgroundColor: color ? color : "inherit",
              }}
            >
              Apply
            </Button>
          </>
        ),
      },
    ];
    setTableData({ ...tableData, rowsData: data });
  }

  return (
    <>
      <Box>
        <Title title={"OBX Supply Head"} />
        <Box
          sx={{
            padding: "18px 36px",
            ...flexColumn,
            gap: "30px",
          }}
        >
          <Box
            sx={{
              padding: "40px 20px",
            }}
          >
            <Grid container alignItems={"center"} spacing={2.5}>
              <Grid item xs={12} md={6} textAlign={"right"}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Supplier Name/ Trading Partner Ref. No. -
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth size="small"></TextField>
              </Grid>
              <Grid item xs={12} md={6} textAlign={"right"}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Supply Head -
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Select size="small" fullWidth value={supplyHead} onChange={handleSupplyHeadChange}>
                  {supplyHeads.map((head, index) => (
                    <MenuItem key={index} value={head}>
                      {head}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12} md={6} textAlign={"right"}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "500",
                  }}
                >
                  Category -
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Select size="small" fullWidth value={category} onChange={handleCategoryChange}>
                  <MenuItem value={"All"}>All</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Grid
              item
              xs={12}
              textAlign="center"
              sx={{
                padding: "40px 0px",
              }}
            >
              <Button
                onClick={searchSupplyHead}
                sx={{
                  padding: "6px 20px",
                  backgroundColor: color ? color : "inherit",
                }}
                variant="contained"
              >
                <Typography>Search</Typography>
              </Button>
            </Grid>

            <Box
              sx={{
                margin: "40px 0px",
              }}
            >
              <TempTable hideFilters={true} hidePagination={true} tableData={tableData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default OBXSypplyHead;
