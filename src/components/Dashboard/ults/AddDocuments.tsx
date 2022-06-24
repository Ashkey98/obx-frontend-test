import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import Title from "./Title";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { WhiteIcon, flexCenter } from "../../../styles/styles";

const AddDocuments = () => {
  const [files, setFiles] = useState([""]);
  const [color, setColor] = useState("");

  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  function addFileld() {
    setFiles([...files, ""]);
  }

  function removeField(index: number) {
    let tempArr = files;
    tempArr.splice(index, 1);
    setFiles([...tempArr]);
  }

  function addFileName(event: any, index: number) {
    let tempArr = files;
    if (event.target.files[0]) {
      tempArr[index] = event.target.files[0].name;
      setFiles([...tempArr]);
    }
  }

  function removeFileName(index: number) {
    let tempArr = files;
    tempArr[index] = "";
    setFiles(tempArr);
  }

  return (
    <>
      <Box
        sx={{
          paddingBottom: "30px",
        }}
      >
        <Title title={"Add Documents"}>
          <Button
            onClick={addFileld}
            sx={{
              ...flexCenter,
            }}
            variant="outlined"
          >
            <AddIcon />
            <Typography>Add file</Typography>
          </Button>
        </Title>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            margin: "50px 0",
            gap: "16px",
          }}
        >
          <>
            {files.map((file, index) => {
              return (
                <Box key={index} sx={{ ...flexCenter, "& > div": { alignSelf: "stretch" } }}>
                  <TextField
                    type="file"
                    label={file}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    onChange={() => addFileName(event, index)}
                  />
                  <Box
                    sx={{
                      background: file === "" ? "green" : "red",
                      padding: "0 10px",
                      cursor: "pointer",
                      ...flexCenter,
                    }}
                  >
                    <WhiteIcon>
                      {file === "" ? (
                        <AddIcon />
                      ) : (
                        <DeleteIcon onClick={() => removeFileName(index)} />
                      )}
                    </WhiteIcon>
                  </Box>
                  <IconButton
                    onClick={() => {
                      removeField(index);
                    }}
                  >
                    <DeleteIcon
                      sx={{
                        color: "gray",
                      }}
                    />
                  </IconButton>
                </Box>
              );
            })}
          </>
        </Box>
        <Box
          sx={{
            ...flexCenter,
          }}
        >
          <Button
            sx={{
              backgroundColor: color ? color : "inherit",
            }}
            variant="contained"
          >
            <Typography variant="subtitle2">Upload Documents</Typography>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AddDocuments;
