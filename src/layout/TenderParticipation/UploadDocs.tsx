import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { flex, flexBetween, flexColumn } from "../../styles/styles";
import TPBox from "./utls/TPBox";
import TPButtons from "./utls/TPButtons";
import TPContainer from "./utls/TPContainer";
import TPtitle from "./utls/TPtitle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ClearIcon from "@mui/icons-material/Clear";

interface UploadDocsProps {
  setView: any;
}

const UploadDocs = ({ setView }: UploadDocsProps) => {
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
              <TPtitle title="Upload Documents" />
              <TPBox>
                <Box>
                  <Typography>Attach your documents to complement your response.</Typography>
                  <ul>
                    {[...Array(5)].map((x, index) => {
                      return (
                        <li key={index}>
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam,
                          explicabo!
                        </li>
                      );
                    })}
                  </ul>
                </Box>
              </TPBox>
            </Box>
            <br />
            <br />
            <br />
            <Box>
              <TPtitle title="Attachments" />
              <TPBox>
                <Box
                  sx={{
                    padding: "10px",
                  }}
                >
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
                            backgroundColor: "lightgray",
                            ...flexBetween,
                            padding: "2px 6px",
                          }}
                        >
                          <Typography>Tender_proposal.pdf (100.23 kB)</Typography>
                          <ClearIcon />
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </TPBox>
            </Box>

            <br />
            <TPButtons
              setView={setView}
              data={["Prev", "Next", "BidForItems", "TenderPreviewDetails"]}
            />
          </Grid>
        </Grid>
      </Box>
    </TPContainer>
  );
};

export default UploadDocs;
