import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import TPContainer from "./utls/TPContainer";
import { flex, flexBetween, flexColumn } from "../../styles/styles";
import TPtitle from "./utls/TPtitle";
import TPBox from "./utls/TPBox";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

interface ItemsToParticipateProps {
  setView: any;
}

const ItemsToParticipate = ({ setView }: ItemsToParticipateProps) => {
  return (
    <TPContainer>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box>
              <Box>
                <TPtitle title={"Site Briefing"} />
                <TPBox>
                  <Box
                    sx={{
                      ...flexColumn,
                      justifyContent: "space-between",
                      gap: "20px",
                    }}
                  >
                    <Box
                      sx={{
                        ...flexBetween,
                      }}
                    >
                      <Typography>Attendance Compulsory</Typography>
                      <Typography>Yes</Typography>
                    </Box>
                    <Box
                      sx={{
                        ...flexBetween,
                      }}
                    >
                      <Typography>Briefing Date</Typography>
                      <Typography>26 Nov 2022</Typography>
                    </Box>
                    <Box
                      sx={{
                        ...flexBetween,
                      }}
                    >
                      <Typography>Briefing Time</Typography>
                      <Typography>14:00</Typography>
                    </Box>
                    <Box
                      sx={{
                        ...flexBetween,
                      }}
                    >
                      <Typography>Venue</Typography>
                      <Typography>ABC Venue</Typography>
                    </Box>
                    <Box
                      sx={{
                        ...flexBetween,
                      }}
                    >
                      <Typography>Remarks</Typography>
                      <Typography
                        sx={{
                          width: {
                            xs: "100%",
                            md: "220px",
                          },
                        }}
                      >
                        Please refer to the covering letter for details
                      </Typography>
                    </Box>
                  </Box>
                </TPBox>
              </Box>
              <br />
              <br />
              <br />
              <br />
              <Box>
                <TPtitle title={"Contact Personal Details"} />
                <TPBox>
                  <Box
                    sx={{
                      ...flexColumn,
                      gap: "20px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      John Doe
                    </Typography>
                    <Box
                      sx={{
                        ...flexColumn,
                        gap: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          ...flex,
                        }}
                      >
                        <EmailIcon /> &nbsp; johndoe@gmail.com
                      </Typography>
                      <Typography
                        sx={{
                          ...flex,
                        }}
                      >
                        <CallIcon /> &nbsp; +653767209
                      </Typography>
                      <Typography
                        sx={{
                          ...flex,
                        }}
                      >
                        <LocationOnIcon /> &nbsp; 9, woodiands Avenue 59
                      </Typography>
                    </Box>
                  </Box>
                </TPBox>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <TPtitle title="Items to Participate" />
              <TPBox>
                <Box>
                  <Box
                    sx={{
                      border: "1px solid #0765c5",
                      padding: "10px 14px",
                    }}
                  >
                    <Typography>
                      <b>Item No.1</b>
                    </Typography>
                    <Typography>
                      <b>Mandatoryto Bid: Yes</b>
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit
                      consequatur, quod aperiam consectetur commodi atque officiis libero voluptate
                      consequuntur obcaecati quae laudantium quasi labore minima similique
                      voluptatem expedita blanditiis.
                    </Typography>
                    <Box
                      sx={{
                        ...flexColumn,
                        gap: "14px",
                        padding: "10px 0",
                      }}
                    >
                      <Box
                        sx={{
                          ...flex,
                        }}
                      >
                        <Typography
                          sx={{
                            maxWidth: "240px",
                            width: "100%",
                          }}
                        >
                          <b
                            style={{
                              ...flex,
                            }}
                          >
                            <KeyboardDoubleArrowRightIcon /> &nbsp;Units of Management
                          </b>
                        </Typography>
                        <Typography>Each</Typography>
                      </Box>
                      <Box
                        sx={{
                          ...flex,
                        }}
                      >
                        <Typography
                          sx={{
                            maxWidth: "240px",
                            width: "100%",
                          }}
                        >
                          <b
                            style={{
                              ...flex,
                            }}
                          >
                            <KeyboardDoubleArrowRightIcon /> &nbsp;Required Quantity
                          </b>
                        </Typography>
                        <Typography>190,000</Typography>
                      </Box>
                      <Box
                        sx={{
                          ...flex,
                        }}
                      >
                        <Typography
                          sx={{
                            maxWidth: "240px",
                            width: "100%",
                          }}
                        >
                          <b
                            style={{
                              ...flex,
                            }}
                          >
                            <KeyboardDoubleArrowRightIcon /> &nbsp;Remarks
                          </b>
                        </Typography>
                        <Typography>Please refer to the attached details</Typography>
                      </Box>
                    </Box>

                    <Button
                      onClick={() => {
                        setView("BidForItems");
                      }}
                      sx={{
                        padding: "10px 14px",
                      }}
                      variant="contained"
                    >
                      <Typography>Participate</Typography>
                    </Button>
                  </Box>
                  <br />
                  <br />
                  <Box
                    sx={{
                      border: "1px solid #0765c5",
                      padding: "10px 14px",
                    }}
                  >
                    <Typography>
                      <b>Item No.1</b>
                    </Typography>
                    <Typography>
                      <b>Mandatoryto Bid: Yes</b>
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit
                      consequatur, quod aperiam consectetur commodi atque officiis libero voluptate
                      consequuntur obcaecati quae laudantium quasi labore minima similique
                      voluptatem expedita blanditiis.
                    </Typography>
                    <Box
                      sx={{
                        ...flexColumn,
                        gap: "14px",
                        padding: "10px 0",
                      }}
                    >
                      <Box
                        sx={{
                          ...flex,
                        }}
                      >
                        <Typography
                          sx={{
                            maxWidth: "240px",
                            width: "100%",
                          }}
                        >
                          <b
                            style={{
                              ...flex,
                            }}
                          >
                            <KeyboardDoubleArrowRightIcon /> &nbsp;Units of Management
                          </b>
                        </Typography>
                        <Typography>Each</Typography>
                      </Box>
                      <Box
                        sx={{
                          ...flex,
                        }}
                      >
                        <Typography
                          sx={{
                            maxWidth: "240px",
                            width: "100%",
                          }}
                        >
                          <b
                            style={{
                              ...flex,
                            }}
                          >
                            <KeyboardDoubleArrowRightIcon /> &nbsp;Required Quantity
                          </b>
                        </Typography>
                        <Typography>190,000</Typography>
                      </Box>
                      <Box
                        sx={{
                          ...flex,
                        }}
                      >
                        <Typography
                          sx={{
                            maxWidth: "240px",
                            width: "100%",
                          }}
                        >
                          <b
                            style={{
                              ...flex,
                            }}
                          >
                            <KeyboardDoubleArrowRightIcon /> &nbsp;Remarks
                          </b>
                        </Typography>
                        <Typography>Please refer to the attached details</Typography>
                      </Box>
                    </Box>

                    <Button
                      onClick={() => {
                        setView("BidForItems");
                      }}
                      sx={{
                        padding: "10px 14px",
                      }}
                      variant="contained"
                    >
                      <Typography>Participate</Typography>
                    </Button>
                  </Box>
                </Box>
              </TPBox>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </TPContainer>
  );
};

export default ItemsToParticipate;
