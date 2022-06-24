import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../ults/Title";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { flexBetween, flexCenter, flexColumn, StyledTextField } from "../../../../styles/styles";
import EditIcon from "@mui/icons-material/Edit";

import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const UserGroups = () => {
  const [view, setView] = useState("main");
  const [groupName, setGroupName] = useState({
    name: "Adminstrator",
    properties: [true, false, true, false, false],
  });
  const [color, setColor] = useState("");

  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  return (
    <>
      {view === "main" ? (
        <Box>
          <Box>
            <Title title={"User Groups"}>
              <Box>
                <Icon
                  onClick={() => setView("create")}
                  sx={{
                    background: "#3b82f6",
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                >
                  <AddIcon sx={{ color: "white" }} />
                </Icon>
                <Icon
                  sx={{
                    background: "#ef4444",
                    width: "30px",
                    height: "30px",
                  }}
                >
                  <DeleteIcon sx={{ color: "white" }} />
                </Icon>
              </Box>
            </Title>
          </Box>
          <Box>
            <Box
              sx={{
                ...flexBetween,
                color: "white",
                padding: "6px 30px",
                backgroundColor: color ? color : "inherit",
                margin: "30px 30px 0 30px",
              }}
            >
              <Typography>User Group Name</Typography>
              <Typography>Action</Typography>
            </Box>
            {[...Array(8)].map((x, index) => {
              return (
                <Box
                  sx={{
                    ...flexBetween,
                    padding: "6px 10px",
                    border: "1px solid lightgrey",
                    borderCollapse: "collapse",
                    margin: "0 30px",
                    borderBottom: index === 7 ? "1px solid lightgrey" : "0",
                  }}
                >
                  <Box sx={{ ...flexCenter }}>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label={`Administartion`}
                    />
                  </Box>
                  <EditIcon
                    onClick={() => setView("edit")}
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                </Box>
              );
            })}
            <br />
            <br />
          </Box>
        </Box>
      ) : view === "create" ? (
        <>
          <Box>
            <Title title={"Add User Groups"}>
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
              <Grid item xs={12} md={8}>
                <StyledTextField
                  size="small"
                  id="User Group Name"
                  label="User Group Name"
                  type="text"
                  variant="outlined"
                />
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
                      <FormControlLabel
                        control={<Checkbox color="success" />}
                        label={`property ${index + 1}`}
                      />
                    );
                  })}
                </Box>
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
                <Typography>Add</Typography>
              </Button>
            </Box>
          </Box>
        </>
      ) : view === "edit" ? (
        <>
          <Box>
            <Title title={"Edit User Group"}>
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
              <Grid item xs={12} md={8}>
                <StyledTextField
                  size="small"
                  id="User Group Name"
                  label="User Group Name"
                  type="text"
                  variant="outlined"
                  value={groupName.name}
                  onChange={(e) => setGroupName({ ...groupName, name: e.target.value })}
                />
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
                <Typography>Add</Typography>
              </Button>
            </Box>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default UserGroups;
