import { Box, Button, Icon, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Title from "../../ults/Title";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { flexBetween, flexCenter, StyledTextField } from "../../../../styles/styles";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const AddBuilding = () => {
  const [view, setView] = useState("main");
  const [currentBuilding, setCurrentBuilding] = useState({
    MCSTNumber: "2031",
    UENNumber: "54578HSSD8",
    date: "2022-05-18",
    devName: "The Anchorage & Anchorpoint",
    devLocation: "3832 Singapore",
    MCAddress: "3832 dshfdihf jdfhksdhf",
    phone: "659837249",
    nameOfAgent: "Savills Property Management Pte Ltd",
    contactOfAgent: "659837249",
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
            <Title title={"Property List"}>
              <Box>
                <Icon
                  onClick={() => setView("add")}
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
              <Typography>Development Name</Typography>
              <Typography>Name of the Managing Agent</Typography>
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
                  <Typography>The Anchorage & Anchorpoint</Typography>
                  <Typography>Savills Property Management Agent</Typography>
                  <Icon onClick={() => setView("edit")} sx={{ cursor: "pointer" }}>
                    <EditIcon />
                  </Icon>
                </Box>
              );
            })}
            <br />
            <br />
          </Box>
        </Box>
      ) : view === "add" ? (
        <>
          <Box>
            <Title title={"Create Property"}>
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
                  id="MCST Number"
                  label="MCST Number"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="UEN Number"
                  label="UEN Number"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Date of MC Constitution"
                  label="Date of MC Constitution"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Development Name"
                  label="Development Name"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Development Location"
                  label="Development Location"
                  type="text"
                  variant="outlined"
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="MC Address"
                  label="MC Address"
                  type="text"
                  variant="outlined"
                  multiline
                  rows={6}
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
                  id="Name of Managing Agent"
                  label="Name of Managing Agent"
                  type="text"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Managing Agent Contact no"
                  label="Managing Agent Contact no"
                  type="tel"
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
                <Typography>Create</Typography>
              </Button>
            </Box>
          </Box>
        </>
      ) : view === "edit" ? (
        <>
          <Box>
            <Title title={"Edit Property"}>
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
                  id="MCST Number"
                  label="MCST Number"
                  type="text"
                  variant="outlined"
                  value={currentBuilding.MCSTNumber}
                  onChange={(e) =>
                    setCurrentBuilding({ ...currentBuilding, MCSTNumber: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="UEN Number"
                  label="UEN Number"
                  type="text"
                  variant="outlined"
                  value={currentBuilding.UENNumber}
                  onChange={(e) =>
                    setCurrentBuilding({ ...currentBuilding, UENNumber: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Date of MC Constitution"
                  label="Date of MC Constitution"
                  type="date"
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                  value={currentBuilding.date}
                  onChange={(e) => setCurrentBuilding({ ...currentBuilding, date: e.target.value })}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Development Name"
                  label="Development Name"
                  type="text"
                  variant="outlined"
                  value={currentBuilding.devName}
                  onChange={(e) =>
                    setCurrentBuilding({ ...currentBuilding, devName: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Development Location"
                  label="Development Location"
                  type="text"
                  variant="outlined"
                  multiline
                  rows={6}
                  value={currentBuilding.devLocation}
                  onChange={(e) =>
                    setCurrentBuilding({ ...currentBuilding, devLocation: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="MC Address"
                  label="MC Address"
                  type="text"
                  variant="outlined"
                  multiline
                  rows={6}
                  value={currentBuilding.MCAddress}
                  onChange={(e) =>
                    setCurrentBuilding({ ...currentBuilding, MCAddress: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Phone Number"
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  value={currentBuilding.phone}
                  onChange={(e) =>
                    setCurrentBuilding({ ...currentBuilding, phone: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Name of Managing Agent"
                  label="Name of Managing Agent"
                  type="text"
                  variant="outlined"
                  value={currentBuilding.nameOfAgent}
                  onChange={(e) =>
                    setCurrentBuilding({ ...currentBuilding, nameOfAgent: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <StyledTextField
                  size="small"
                  id="Managing Agent Contact no"
                  label="Managing Agent Contact no"
                  type="tel"
                  variant="outlined"
                  value={currentBuilding.contactOfAgent}
                  onChange={(e) =>
                    setCurrentBuilding({ ...currentBuilding, contactOfAgent: e.target.value })
                  }
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
                <Typography>Edit</Typography>
              </Button>
            </Box>
          </Box>
        </>
      ) : null}
    </>
  );
};

export default AddBuilding;
