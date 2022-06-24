import React from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import TPBox from "./utls/TPBox";
import TPContainer from "./utls/TPContainer";
import TPtitle from "./utls/TPtitle";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { flex, flexColumn } from "../../styles/styles";
import TPButtons from "./utls/TPButtons";

interface BidForItemsProps {
  setView: any;
}
const BidForItems = ({ setView }: BidForItemsProps) => {
  return (
    <TPContainer>
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Box>
              <Box>
                <TPtitle title={"List of Items"} />
                <TPBox>
                  <Typography
                    sx={{
                      fontWeight: "300",
                    }}
                  >
                    Item No.2 -Mandatory Items
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae pariatur, eaque
                    sint eum cupiditate doloremque, nobis temporibus quaerat.
                  </Typography>
                </TPBox>
                <TPBox>
                  <Typography
                    sx={{
                      fontWeight: "300",
                    }}
                  >
                    Item No.3 -Mandatory Items
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae pariatur, eaque
                    sint eum cupiditate doloremque, nobis temporibus quaerat.
                  </Typography>
                </TPBox>
                <TPBox>
                  <Typography
                    sx={{
                      fontWeight: "300",
                    }}
                  >
                    Item No.4 -Mandatory Items
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae pariatur, eaque
                    sint eum cupiditate doloremque, nobis temporibus quaerat.
                  </Typography>
                </TPBox>
                <TPBox>
                  <Typography
                    sx={{
                      fontWeight: "300",
                    }}
                  >
                    Item No.5 -Mandatory Items
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae pariatur, eaque
                    sint eum cupiditate doloremque, nobis temporibus quaerat.
                  </Typography>
                </TPBox>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box>
              <TPtitle title="Items to Participate" />
              <TPBox>
                <Box
                  sx={{
                    padding: "10px",
                  }}
                >
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
                  </Box>
                </Box>
              </TPBox>
            </Box>
            <br />
            <br />
            <br />
            <Box>
              <TPtitle title="Base Bid" />
              <TPBox>
                <Box
                  sx={{
                    ...flexColumn,
                    gap: "10px",
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
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      <b>Tender Validity</b>
                    </Typography>
                    <Typography>12 Apr 2022</Typography>
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
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      <b>Unit of Measurement</b>
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
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      <b>Quantity</b>
                    </Typography>
                    <TextField size="small" />
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
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      <b>Unit Price</b>
                    </Typography>
                    <TextField size="small" />
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
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      <b>Total</b>
                    </Typography>
                    <Typography>15,299.000</Typography>
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
                        fontWeight: "600",
                        fontSize: "18px",
                      }}
                    >
                      <b>Remarks</b>
                    </Typography>
                    <TextField fullWidth size="small" multiline rows={10} />
                  </Box>
                </Box>
                <br />
                <br />
                <TPButtons
                  setView={setView}
                  data={["Prev", "Next", "ItemsToParticipate", "UploadDocs"]}
                />
              </TPBox>
            </Box>

            <br />
          </Grid>
        </Grid>
      </Box>
    </TPContainer>
  );
};

export default BidForItems;
