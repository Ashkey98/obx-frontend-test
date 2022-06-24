import { Box, Button, IconButton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { flex, flexBetween, flexColumn } from "../../../../../styles/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TempTable from "../../../ults/TempTable";

const ManagePartners = () => {
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

  const tableData = {
    headings: ["S.No", "Image", "Partner", "Url", "Edit", "Delete"],
    rowsData: [
      {
        no: "1",
        image: <img width={50} src="/singpass.png" />,
        name: "SingPass",
        url: "https://www.singpass.gov.sg/main",
        edit: (
          <IconButton onClick={() => handleUpdate(0)}>
            <ModeEditIcon />
          </IconButton>
        ),
        delete: (
          <IconButton onClick={() => handleDelete(0)}>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        no: "2",
        image: <img width={50} src="/singpass.png" />,
        name: "SingPass",
        url: "https://www.singpass.gov.sg/main",
        edit: (
          <IconButton onClick={() => handleUpdate(1)}>
            <ModeEditIcon />
          </IconButton>
        ),
        delete: (
          <IconButton onClick={() => handleDelete(1)}>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        no: "3",
        image: <img width={50} src="/singpass.png" />,
        name: "SingPass",
        url: "https://www.singpass.gov.sg/main",
        edit: (
          <IconButton onClick={() => handleUpdate(2)}>
            <ModeEditIcon />
          </IconButton>
        ),
        delete: (
          <IconButton onClick={() => handleDelete(2)}>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        no: "4",
        image: <img width={50} src="/singpass.png" />,
        name: "SingPass",
        url: "https://www.singpass.gov.sg/main",
        edit: (
          <IconButton onClick={() => handleUpdate(3)}>
            <ModeEditIcon />
          </IconButton>
        ),
        delete: (
          <IconButton onClick={() => handleDelete(3)}>
            <DeleteIcon />
          </IconButton>
        ),
      },
      {
        no: "5",
        image: <img width={50} src="/singpass.png" />,
        name: "SingPass",
        url: "https://www.singpass.gov.sg/main",
        edit: (
          <IconButton onClick={() => handleUpdate(4)}>
            <ModeEditIcon />
          </IconButton>
        ),
        delete: (
          <IconButton onClick={() => handleDelete(4)}>
            <DeleteIcon />
          </IconButton>
        ),
      },
    ],
    width: 900,
  };

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
  function handleSave() {
    let tempArr = partnersData;
    tempArr[indexToUpdate] = { ...updatePartnerData, img: "" };
    setPartnersData([...tempArr]);
    setView("main");
  }

  function handleCancle() {
    setView("main");
    setUpdatePartnerData({
      name: "",
      url: "",
    });
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
                Partners
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

            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                List of Partners
              </Typography>
              <TempTable tableData={tableData} />
              {/* <ul>
                {partnersData.map((x, index) => {
                  return (
                    <li>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          ...flex,
                        }}
                      >
                        {x.name}
                        <IconButton onClick={() => handleUpdate(index)}>
                          <ModeEditIcon color="success" />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(index)}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Typography>
                    </li>
                  );
                })}
              </ul> */}
            </Box>
          </>
        ) : view === "edit" ? (
          <>
            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                Partners
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
                    value={updatePartnerData.name}
                    onChange={(e) =>
                      setUpdatePartnerData({ ...updatePartnerData, name: e.target.value })
                    }
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
                    value={updatePartnerData.url}
                    onChange={(e) =>
                      setUpdatePartnerData({ ...updatePartnerData, url: e.target.value })
                    }
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
                    gap: "20px",
                  }}
                >
                  <Button
                    onClick={handleSave}
                    variant="contained"
                    sx={{
                      padding: "4px 24px",
                    }}
                  >
                    <Typography>Edit</Typography>
                  </Button>
                  <Button
                    onClick={handleCancle}
                    variant="contained"
                    sx={{
                      padding: "4px 24px",
                    }}
                  >
                    <Typography>Cancle</Typography>
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

export default ManagePartners;
