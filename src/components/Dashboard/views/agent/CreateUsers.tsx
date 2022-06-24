import {
  Box,
  Button,
  IconButton,
  Typography,
  Grid,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import Title from "../../ults/Title";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TempTable from "../../ults/TempTable";
import TenderSearch from "../../ults/TenderSearch";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { flexColumn, StyledTextField } from "../../../../styles/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const CreateUsers = () => {
  const [view, setView] = useState("main");
  const [userGroup, setUserGroup] = useState("admin1");

  const [currentUser, setCurrentUser] = useState({
    name: "ABC Tenders",
    group: "admin1",
    building: [true, false, false, true, false],
    firstName: "ABC",
    lastName: "Tenders",
    email: "abctenders@gmail.com",
    phone: "6593827239",
  });

  const tableData = {
    headings: ["Username", "User Group", "Email", "Edit", "View", "Delete"],
    rowsData: [
      {
        userName: "ABC Tenders",
        userGroup: "admin1",
        email: "abctenders@gmail.com",
        edit: (
          <IconButton onClick={() => setView("edit")}>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "ABC Tenders",
        userGroup: "admin1",
        email: "abctenders@gmail.com",
        edit: (
          <IconButton onClick={() => setView("edit")}>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "ABC Tenders",
        userGroup: "admin1",
        email: "abctenders@gmail.com",
        edit: (
          <IconButton onClick={() => setView("edit")}>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "ABC Tenders",
        userGroup: "admin1",
        email: "abctenders@gmail.com",
        edit: (
          <IconButton onClick={() => setView("edit")}>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "ABC Tenders",
        userGroup: "admin1",
        email: "abctenders@gmail.com",
        edit: (
          <IconButton onClick={() => setView("edit")}>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "ABC Tenders",
        userGroup: "admin1",
        email: "abctenders@gmail.com",
        edit: (
          <IconButton onClick={() => setView("edit")}>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "ABC Tenders",
        userGroup: "admin1",
        email: "abctenders@gmail.com",
        edit: (
          <IconButton onClick={() => setView("edit")}>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        userName: "ABC Tenders",
        userGroup: "admin1",
        email: "abctenders@gmail.com",
        edit: (
          <IconButton onClick={() => setView("edit")}>
            <ModeEditIcon />
          </IconButton>
        ),
        view: (
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        ),
        delet: (
          <IconButton>
            <DeleteIcon />
          </IconButton>
        ),
      },
    ],
  };

  return (
    <>
      <Box>
        {view === "main" ? (
          <>
            <Box>
              <Title title={"User List"}>
                <Button onClick={() => setView("create")} variant="outlined">
                  <PersonAddIcon />
                  <Typography>Create New User</Typography>
                </Button>
              </Title>
            </Box>
            <TenderSearch hide={true} />
            <Box
              sx={{
                padding: "24px 40px",
              }}
            >
              <TempTable tableData={tableData} />
            </Box>
          </>
        ) : view === "create" ? (
          <>
            <Box>
              <Title title={"Create New User"}>
                <Button onClick={() => setView("main")}>
                  <KeyboardBackspaceIcon /> <Typography>Back</Typography>
                </Button>
              </Title>
            </Box>
            <Box
              sx={{
                padding: "30px 36px",
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="User Name"
                    label="User Name"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="userGroupId">User Group</InputLabel>
                    <Select
                      size="small"
                      labelId="userGroupId"
                      id="userGroup"
                      value={userGroup}
                      label="userGroup"
                      onChange={(e) => setUserGroup(e.target.value)}
                    >
                      <MenuItem value={"admin1"}>Admim 1</MenuItem>
                      <MenuItem value={"admin2"}>Admim 2</MenuItem>
                      <MenuItem value={"admin3"}>Admim 3</MenuItem>
                      <MenuItem value={"admin4"}>Admim 4</MenuItem>
                      <MenuItem value={"admin5"}>Admim 5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="userGroupId">
                    <Typography>Select Building</Typography>
                  </InputLabel>

                  <Box
                    sx={{
                      backgroundColor: "#e5e7eb",
                      padding: "12px 20px",
                      maxHeight: "190px",
                      overflowY: "scroll",
                      marginTop: "10px",
                      ...flexColumn,
                    }}
                  >
                    {[...Array(5)].map((x, index) => {
                      return (
                        <FormControlLabel control={<Checkbox />} label={`property ${index + 1}`} />
                      );
                    })}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="First Name"
                    label="First Name"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="Last Name"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="Email"
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="Phone Number"
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="Password"
                    label="Password"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="Confirm Password"
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  margin: "50px auto 0 auto",
                  textAlign: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    padding: "8px 30px",
                  }}
                >
                  <Typography>Invite</Typography>
                </Button>
              </Box>
            </Box>
          </>
        ) : view === "edit" ? (
          <>
            <Box>
              <Title title={"Create New User"}>
                <Button onClick={() => setView("main")}>
                  <KeyboardBackspaceIcon /> <Typography>Back</Typography>
                </Button>
              </Title>
            </Box>
            <Box
              sx={{
                padding: "30px 36px",
              }}
            >
              <Grid container spacing={5}>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="User Name"
                    label="User Name"
                    type="text"
                    variant="outlined"
                    value={currentUser.name}
                    onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel id="userGroupId">User Group</InputLabel>
                    <Select
                      size="small"
                      labelId="userGroupId"
                      id="userGroup"
                      value={currentUser.group}
                      label="userGroup"
                      onChange={(e) => setCurrentUser({ ...currentUser, group: e.target.value })}
                    >
                      <MenuItem value={"admin1"}>Admim 1</MenuItem>
                      <MenuItem value={"admin2"}>Admim 2</MenuItem>
                      <MenuItem value={"admin3"}>Admim 3</MenuItem>
                      <MenuItem value={"admin4"}>Admim 4</MenuItem>
                      <MenuItem value={"admin5"}>Admim 5</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="userGroupId">
                    <Typography>Select Building</Typography>
                  </InputLabel>

                  <Box
                    sx={{
                      backgroundColor: "#e5e7eb",
                      padding: "12px 20px",
                      maxHeight: "190px",
                      overflowY: "scroll",
                      marginTop: "10px",
                      ...flexColumn,
                    }}
                  >
                    {[...Array(5)].map((x, index) => {
                      return (
                        <FormControlLabel control={<Checkbox />} label={`property ${index + 1}`} />
                      );
                    })}
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="First Name"
                    label="First Name"
                    type="text"
                    variant="outlined"
                    value={currentUser.firstName}
                    onChange={(e) => setCurrentUser({ ...currentUser, firstName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="Last Name"
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    value={currentUser.lastName}
                    onChange={(e) => setCurrentUser({ ...currentUser, lastName: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="Email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={currentUser.email}
                    onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <StyledTextField
                    size="small"
                    id="Phone Number"
                    label="Phone Number"
                    type="tel"
                    variant="outlined"
                    value={currentUser.phone}
                    onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
                  />
                </Grid>
              </Grid>
              <Box
                sx={{
                  margin: "50px auto 0 auto",
                  textAlign: "center",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    padding: "8px 30px",
                  }}
                >
                  <Typography>Update</Typography>
                </Button>
              </Box>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default CreateUsers;
