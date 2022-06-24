import { useState } from "react";
import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ContainerWrapper from "../../../components/ContainerWrapper";
import Link from "next/link";

const LandingPage = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: "#a9c8f6",
      }}
    >
      <ContainerWrapper>
        <Grid
          container
          alignItems={"center"}
          sx={{
            minHeight: "700px",
            padding: "100px 0",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h1" sx={{ fontSize: "50px", fontWeight: "700", color: "#1c4273" }}>
              Welcome to{" "}
              <Box component={"span"} sx={{ color: "#e94545" }}>
                OBX
              </Box>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "20px",
                marginBottom: "30px",
              }}
            >
              Outcome Based Contracts - A Better Model for Security Operations
            </Typography>

            <Box sx={{ display: "flex", alignItems: "stretch" }}>
              <TextField
                variant="outlined"
                color="primary"
                placeholder="Keywords"
                sx={{
                  backgroundColor: "white",
                  flexGrow: "1",
                  maxWidth: "200px",
                  color: "black",
                  height: "100%",
                }}
              />
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                sx={{
                  backgroundColor: "white",
                  flexGrow: "1",
                  maxWidth: "200px",
                  color: "gray",
                }}
              >
                <MenuItem value="">Select Category</MenuItem>
                <MenuItem value={"Category1"}>Select Category</MenuItem>
                <MenuItem value={"Category2"}>Select Category</MenuItem>
                <MenuItem value={"Category3"}>Select Category</MenuItem>
              </Select>
              <Link href="/marketplace">
                <Button
                  sx={{
                    fontSize: "18px",
                    backgroundColor: "#0765c5",
                    padding: "13px 40px",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#0a6ecb",
                    },
                  }}
                >
                  Search
                </Button>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} overflow={"hidden"}>
            <Box
              sx={{
                maxWidth: "100%",
                height: "auto",
              }}
            >
              <img src="banner.png" alt="" width={"100%"} height={"auto"} />
            </Box>
          </Grid>
        </Grid>
      </ContainerWrapper>
    </Box>
  );
};

export default LandingPage;
