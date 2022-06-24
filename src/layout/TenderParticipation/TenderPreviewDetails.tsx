import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { flex, flexBetween, flexColumn } from "../../styles/styles";
import TPBox from "./utls/TPBox";
import TPButtons from "./utls/TPButtons";
import TPContainer from "./utls/TPContainer";
import TPtitle from "./utls/TPtitle";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import DownloadIcon from "@mui/icons-material/Download";

interface props {
  setView: any;
}

const TenderPreviewDetails = ({ setView }: props) => {
  return (
    <TPContainer>
      <Box>
        <Box>
          <TPtitle title={"Uploaded Documents"} />
          <TPBox>
            <Box
              sx={{
                ...flexColumn,
                gap: "10px",
              }}
            >
              {[...Array(3)].map((x, index) => {
                return (
                  <Box
                    sx={{
                      padding: "2px 6px",
                    }}
                  >
                    <Typography
                      sx={{
                        ...flex,
                      }}
                    >
                      <FilePresentIcon />
                      &nbsp;Tender_proposal.pdf (100.23 kB)
                    </Typography>
                  </Box>
                );
              })}
              <Button
                sx={{
                  alignSelf: "flex-start",
                }}
                variant="contained"
              >
                <Typography
                  sx={{
                    ...flex,
                  }}
                >
                  <DownloadIcon /> &nbsp;Download All
                </Typography>
              </Button>
            </Box>
          </TPBox>
        </Box>
        <br />
        <br />
        <Box>
          <TPtitle title={"Contact Details"} />
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
        <br />
        <br />
        {/* <Box>
          <TPtitle title={"Awarding Agency"} />
          <TPBox>skjdha</TPBox>
        </Box>
        <br />
        <br /> */}
        <Box>
          <TPtitle title={"Bid for Items"} />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit consequatur,
                  quod aperiam consectetur commodi atque officiis libero voluptate consequuntur
                  obcaecati quae laudantium quasi labore minima similique voluptatem expedita
                  blanditiis.
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
        <Box>
          <TPtitle title={"Base Bid"} />
          <TPBox>
            <Box
              sx={{
                ...flexColumn,
                gap: "20px",
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
                <Typography>Nil</Typography>
              </Box>
            </Box>
          </TPBox>
        </Box>
        <br />
        <br />
        <TPButtons setView={setView} data={["Prev", "Next", "UploadDocs", "TenderInstructions"]} />
      </Box>
    </TPContainer>
  );
};

export default TenderPreviewDetails;
