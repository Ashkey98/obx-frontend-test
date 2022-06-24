import React from "react";
import { Grid, Pagination, TextField, styled } from "@mui/material";
import { Box } from "@mui/system";
import ContainerWrapper from "../../components/ContainerWrapper";
import SeachResultTender from "./SeachResultTender";

import SearchFilter from "./SearchFilter";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "14px",
    padding: "0px",
  },
}));

const MarketPlace = () => {
  return (
    <>
      <ContainerWrapper>
        <Box>
          <Grid container spacing={6}>
            <Grid item xs={12} md={3}>
              <SearchFilter>
                <StyledTextField
                  variant="outlined"
                  id="outlined-basic"
                  label="Text ID"
                  type="text"
                  color="primary"
                />
                <StyledTextField
                  id="outlined-basic"
                  label="Due Date"
                  type="date"
                  defaultValue="2022-03-19"
                  color="primary"
                />

                <StyledTextField
                  id="outlined-basic"
                  label="Publised Date"
                  type="date"
                  defaultValue="2022-02-18"
                  color="primary"
                />
                <StyledTextField
                  id="outlined-basic"
                  label="Tender Value"
                  type="number"
                  color="primary"
                />
                <StyledTextField
                  id="outlined-basic"
                  label="Organization"
                  type="text"
                  color="primary"
                />
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      md: "block",
                    },
                    visibility: {
                      xs: "hidden",
                      md: "visible",
                    },
                  }}
                >
                  <img width="100%" src="ad.jpg" alt="" />
                </Box>
              </SearchFilter>
            </Grid>
            <Grid item xs={12} md={9}>
              <SeachResultTender />
              <Pagination count={10} color="primary" />
            </Grid>
          </Grid>
        </Box>
      </ContainerWrapper>
    </>
  );
};

export default MarketPlace;
