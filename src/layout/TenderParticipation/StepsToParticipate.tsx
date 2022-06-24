import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import TPContainer from "./utls/TPContainer";
import TPtitle from "./utls/TPtitle";
import TPBox from "./utls/TPBox";
import TPButtons from "./utls/TPButtons";
import { flexCenter, flexColumn } from "../../styles/styles";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface StepsToParticipateProps {
  setView: any;
}

const StepsToParticipate = ({ setView }: StepsToParticipateProps) => {
  return (
    <TPContainer>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box>
              <TPBox>
                <Box
                  sx={{
                    ...flexColumn,
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <Typography>You are participating to</Typography>
                  <Typography>
                    Tender Id- 3982749823
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, culpa?
                  </Typography>
                  <Typography>
                    <b>ABC Tenders</b>
                  </Typography>
                </Box>
              </TPBox>
              <TPBox>
                <Box
                  sx={{
                    ...flexColumn,
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    Closing Date
                  </Typography>
                  <CalendarMonthIcon
                    sx={{
                      fontSize: "120px",
                    }}
                    color="primary"
                  />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                    }}
                  >
                    13 Dec 2022, 21.00
                  </Typography>
                </Box>
              </TPBox>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <TPtitle title="Steps to Participate" />
              <TPBox>
                <Box
                  sx={{
                    ...flexColumn,
                    gap: "30px",
                    padding: "10px",
                  }}
                >
                  <Box
                    sx={{
                      ...flexColumn,
                      gap: "30px",
                    }}
                  >
                    <Box
                      sx={{
                        ...flexCenter,
                        gap: "20px",
                      }}
                    >
                      <Avatar
                        sx={{ boxShadow: 3, backgroundColor: "#2a43c2", width: 70, height: 70 }}
                      >
                        <Typography
                          sx={{
                            fontSize: "38px",
                            fontWeight: "600",
                          }}
                        >
                          1
                        </Typography>
                      </Avatar>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Enter your bid
                        </Typography>
                        <Typography>
                          Enter your bid for mandatory items and selected optional items. You may
                          submit no quote for mandatory items.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        ...flexCenter,
                        gap: "20px",
                      }}
                    >
                      <Avatar
                        sx={{ boxShadow: 3, backgroundColor: "#2a43c2", width: 70, height: 70 }}
                      >
                        <Typography
                          sx={{
                            fontSize: "38px",
                            fontWeight: "600",
                          }}
                        >
                          2
                        </Typography>
                      </Avatar>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Enter your bid
                        </Typography>
                        <Typography>
                          Enter your bid for mandatory items and selected optional items. You may
                          submit no quote for mandatory items.
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        ...flexCenter,
                        gap: "20px",
                      }}
                    >
                      <Avatar
                        sx={{ boxShadow: 3, backgroundColor: "#2a43c2", width: 70, height: 70 }}
                      >
                        <Typography
                          sx={{
                            fontSize: "38px",
                            fontWeight: "600",
                          }}
                        >
                          3
                        </Typography>
                      </Avatar>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                          }}
                        >
                          Enter your bid
                        </Typography>
                        <Typography>
                          Enter your bid for mandatory items and selected optional items. You may
                          submit no quote for mandatory items.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <TPButtons
                    setView={setView}
                    data={["Cancle", "Continue", "TenderDetailsFull", "ItemsToParticipate"]}
                  />
                </Box>
              </TPBox>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </TPContainer>
  );
};

export default StepsToParticipate;
