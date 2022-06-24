import React from "react";
import {
  Grid,
  Pagination,
  TextField,
  styled,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import { Box } from "@mui/system";
import ContainerWrapper from "../../components/ContainerWrapper";
import SearchFilter from "../MarketPlace/SearchFilter";
import DirectoryList from "./DirectoryList";

export const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputLabel-root": {
    fontSize: "14px",
    padding: "0px",
  },
}));

const Directory = () => {
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
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-seller">
                    Seller
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-seller"
                    id="seller"
                    label="Seller"
                  >
                    <MenuItem value={"seller"}>Seller</MenuItem>
                    <MenuItem value={"buyer"}>Buyer</MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="demo-simple-select-helper-type">
                    Category Type
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-type"
                    id="category"
                    label="Category Type"
                  >
                    <MenuItem value={10}>Type 1</MenuItem>
                    <MenuItem value={20}>Type 2</MenuItem>
                    <MenuItem value={30}>Type 3</MenuItem>
                  </Select>
                </FormControl>
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
                <img width="100%" src="ad.jpg" alt="" />
              </SearchFilter>
            </Grid>
            <Grid item xs={12} md={9}>
              <DirectoryList />
              <Pagination count={10} color="primary" />
            </Grid>
          </Grid>
        </Box>
      </ContainerWrapper>
    </>
  );
};

export default Directory;
