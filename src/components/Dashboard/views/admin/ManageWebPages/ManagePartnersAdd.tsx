import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { flex, flexBetween, flexColumn } from "../../../../../styles/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TempTable from "../../../ults/TempTable";

const ManagePartnersAdd = () => {
  let partnerData = [
    { name: "SingPass", url: "https://www.singpass.gov.sg/main", img: "" },
    { name: "SingPass", url: "https://www.singpass.gov.sg/main", img: "" },
    { name: "SingPass", url: "https://www.singpass.gov.sg/main", img: "" },
    { name: "SingPass", url: "https://www.singpass.gov.sg/main", img: "" },
    { name: "SingPass", url: "https://www.singpass.gov.sg/main", img: "" },
  ];
  const [view, setView] = useState("main");
  const [indexToUpdate, setIndexToUpdate] = useState(0);
  const [partnersData, setPartnersData] = useState([...partnerData]);
  const [newPartnerData, setNewPartnerData] = useState({
    name: "",
    url: "",
  });
  const [updatePartnerData, setUpdatePartnerData] = useState({
    name: "",
    url: "",
  });

  function handleDelete(index: number) {
    let tempArr = partnersData;
    tempArr.splice(index, 1);
    setPartnersData([...tempArr]);
  }

  function handleUpdate(index: number) {
    setIndexToUpdate(index);
    setView("edit");
    setUpdatePartnerData({ ...partnersData[index] });
  }

  function handleAdd() {
    let tempArr = partnersData;
    tempArr.push({ ...newPartnerData, img: "" });
    setPartnersData([...tempArr]);
  }

  return (
    <>
      <Box
        sx={{
          padding: "20px 30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflow: "hidden",
        }}
      >
        {view === "main" ? (
          <>
            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                Add Partners
              </Typography>

              <Box
                sx={{
                  ...flexColumn,
                  gap: "15px",
                }}
              >
                <Box
                  sx={{
                    ...flexBetween,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      minWidth: "140px",
                    }}
                  >
                    Name -
                  </Typography>
                  <TextField
                    value={newPartnerData.name}
                    onChange={(e) => setNewPartnerData({ ...newPartnerData, name: e.target.value })}
                    fullWidth
                  />
                </Box>
                <Box
                  sx={{
                    ...flexBetween,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      minWidth: "140px",
                    }}
                  >
                    Url -
                  </Typography>
                  <TextField
                    value={newPartnerData.url}
                    onChange={(e) => setNewPartnerData({ ...newPartnerData, url: e.target.value })}
                    fullWidth
                  />
                </Box>
                <Box
                  sx={{
                    ...flexBetween,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      minWidth: "140px",
                    }}
                  >
                    Image -
                  </Typography>
                  <TextField type={"file"} fullWidth />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    onClick={handleAdd}
                    variant="contained"
                    sx={{
                      padding: "4px 24px",
                    }}
                  >
                    <Typography>Add</Typography>
                  </Button>
                </Box>
              </Box>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  );
};

export default ManagePartnersAdd;
