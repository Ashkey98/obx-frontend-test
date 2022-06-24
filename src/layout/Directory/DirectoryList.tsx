import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  Typography,
  SelectChangeEvent,
  Paper,
  Button,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";

const DirectoryList = () => {
  const [sort, setSort] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };

  const x = new Array(1, 1, 1, 1, 1, 1, 1, 1);

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "4px 16px",
          marginBottom: "20px",
        }}
      >
        <Typography>32 Items found</Typography>
        <FormControl sx={{ m: 1, minWidth: 150 }}>
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            value={sort}
            onChange={handleChange}
            sx={{
              "& .MuiSelect-select": {
                padding: "4px 8px",
              },
            }}
          >
            <MenuItem value="">Recent Items</MenuItem>
            <MenuItem value={20}>Views</MenuItem>
            <MenuItem value={30}>Old</MenuItem>
            <MenuItem value={30}>A-Z</MenuItem>
          </Select>
        </FormControl>
      </Paper>
      <Box>
        <Grid container spacing={2}>
          {x.map((item, index) => {
            return (
              <Grid key={index} item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    padding: "24px",
                    marginBottom: "20px",
                  }}
                >
                  <img src="google.png" alt="" />
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                      margin: "12px 0",
                    }}
                  >
                    First tenders and contacts
                  </Typography>
                  <Box
                    sx={{
                      margin: "12px 0",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <EmailIcon
                        sx={{
                          color: "gray",
                        }}
                      />
                      firsttender@gmail.com
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <PinDropIcon
                        sx={{
                          color: "gray",
                        }}
                      />
                      No.2, Steelway down road, Woodlands, Singapore -2
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <SettingsIcon
                        sx={{
                          color: "gray",
                        }}
                      />
                      Documentn Preparation, Bidding, Dealing Contracts,
                      Financial Dealings, Other services
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    sx={{
                      borderWidth: "1px",
                      "&:hover": {
                        borderWidth: "1px",
                      },
                    }}
                  >
                    <ChatIcon
                      sx={{
                        fontSize: "16px",
                        marginRight: "4px",
                      }}
                    />
                    <Typography
                      sx={{
                        fontSize: "16px",
                      }}
                    >
                      Chat
                    </Typography>
                  </Button>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default DirectoryList;
