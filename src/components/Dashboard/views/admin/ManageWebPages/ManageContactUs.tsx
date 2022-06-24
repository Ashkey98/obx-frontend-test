import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { flexBetween, flexCenter, flexColumn } from "../../../../../styles/styles";

const ManageContactUs = () => {
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
          Change Contact Info
        </Typography>

        <Box
          sx={{
            ...flexColumn,
            gap: "15px",
          }}
        >
          <Box
            sx={{
              ...flexBetween,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                minWidth: "120px",
              }}
            >
              Address -
            </Typography>
            <TextField fullWidth />
          </Box>
          <Box
            sx={{
              ...flexBetween,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                minWidth: "120px",
              }}
            >
              Email -
            </Typography>
            <TextField fullWidth />
          </Box>
          <Box
            sx={{
              ...flexBetween,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                minWidth: "120px",
              }}
            >
              Phone No -
            </Typography>
            <TextField fullWidth />
          </Box>
          <Box
            sx={{
              ...flexColumn,
              gap: "30px",
              margin: "20px 0",
            }}
          >
            <Box sx={{ ...flexBetween, alignItems: "flex-start", gap: "10px" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  minWidth: "120px",
                }}
              >
                Facebook
              </Typography>
              <Box sx={{ ...flexColumn }}>
                Change Icon
                <Box sx={{ ...flexCenter }}>
                  <TextField type="file" />
                  <Button
                    sx={{
                      alignSelf: "stretch",
                    }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
              <Box>
                Change URL
                <TextField type="text" fullWidth />
              </Box>
            </Box>
            <Box sx={{ ...flexBetween, alignItems: "flex-start", gap: "10px" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  minWidth: "120px",
                }}
              >
                Instagram
              </Typography>
              <Box sx={{ ...flexColumn }}>
                Change Icon
                <Box sx={{ ...flexCenter }}>
                  <TextField type="file" />
                  <Button
                    sx={{
                      alignSelf: "stretch",
                    }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
              <Box>
                Change URL
                <TextField type="text" fullWidth />
              </Box>
            </Box>
            <Box sx={{ ...flexBetween, alignItems: "flex-start", gap: "10px" }}>
              <Typography
                sx={{
                  fontSize: "20px",
                  minWidth: "120px",
                }}
              >
                Twitter
              </Typography>
              <Box sx={{ ...flexColumn }}>
                Change Icon
                <Box sx={{ ...flexCenter }}>
                  <TextField type="file" />
                  <Button
                    sx={{
                      alignSelf: "stretch",
                    }}
                    variant="contained"
                  >
                    Delete
                  </Button>
                </Box>
              </Box>
              <Box>
                Change URL
                <TextField type="text" fullWidth />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              ...flexBetween,
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                minWidth: "120px",
              }}
            >
              Map -
            </Typography>
            <TextField fullWidth />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{
            padding: "8px 24px",
          }}
          variant="contained"
        >
          <Typography>Save Changes</Typography>
        </Button>
        &nbsp;&nbsp;&nbsp;
        <Button
          sx={{
            padding: "8px 24px",
          }}
          variant="contained"
        >
          <Typography>Cancel</Typography>
        </Button>
      </Box>
    </>
  );
};

export default ManageContactUs;
