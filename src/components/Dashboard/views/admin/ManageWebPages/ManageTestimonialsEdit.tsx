import React, { useState } from "react";
import { Avatar, Box, Button, IconButton, TextField, Typography } from "@mui/material";
import { flex, flexBetween, flexColumn } from "../../../../../styles/styles";

import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TempTable from "../../../ults/TempTable";

const testimonialData = [
  {
    name: "John Doe",
    designation: "General Manager",
    src: "https://via.placeholder.com/150",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
  },
  {
    name: "John Doe",
    designation: "Engineer",
    src: "https://via.placeholder.com/150",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
  },
  {
    name: "John Doe",
    designation: "CEO",
    src: "https://via.placeholder.com/150",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
  },
  {
    name: "John Doe",
    designation: "CEO",
    src: "https://via.placeholder.com/150",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
  },
  {
    name: "John Doe",
    designation: "Engineer",
    src: "https://via.placeholder.com/150",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
  },
  {
    name: "John Doe",
    designation: "CEO",
    src: "https://via.placeholder.com/150",
    feedback:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!",
  },
];

const ManageTestimonialsEdit = () => {
  const [view, setView] = useState("main");
  const [indexToUpdate, setIndexToUpdate] = useState(0);

  const [testimonialsData, setTestimonialsData] = useState([...testimonialData]);
  const [newTestimonialData, setNewTestimonialData] = useState({
    name: "",
    designation: "",
    feedback: "",
  });
  const [updateTestimonialData, setUpdateTestimonialData] = useState({
    name: "",
    designation: "",
    feedback: "",
  });

  const tableData = {
    headings: ["S.No", "Image", "Username", "Content", "Designation", "Edit", "Delete"],
    rowsData: [
      {
        no: "1",
        image: <Avatar>JD</Avatar>,
        name: "John Doe",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing...",
        designation: "General Manager",
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
        image: <Avatar>JD</Avatar>,
        name: "John Doe",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing...",
        designation: "Engineer",
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
        image: <Avatar>JD</Avatar>,
        name: "John Doe",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing...",
        designation: "CEO",
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
        image: <Avatar>JD</Avatar>,
        name: "John Doe",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing...",
        designation: "CEO",
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
        image: <Avatar>JD</Avatar>,
        name: "John Doe",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing...",
        designation: "Engineer",
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
      {
        no: "6",
        image: <Avatar>JD</Avatar>,
        name: "John Doe",
        feedback: "Lorem ipsum dolor sit amet consectetur adipisicing...",
        designation: "CEO",
        edit: (
          <IconButton onClick={() => handleUpdate(5)}>
            <ModeEditIcon />
          </IconButton>
        ),
        delete: (
          <IconButton onClick={() => handleDelete(5)}>
            <DeleteIcon />
          </IconButton>
        ),
      },
    ],
    width: 900,
  };

  function handleDelete(index: number) {
    let tempArr = testimonialsData;
    tempArr.splice(index, 1);
    setTestimonialsData([...tempArr]);
  }

  function handleUpdate(index: number) {
    setIndexToUpdate(index);
    setView("edit");
    setUpdateTestimonialData({ ...testimonialsData[index] });
  }
  function handleSave() {
    let tempArr = testimonialsData;
    tempArr[indexToUpdate] = { ...updateTestimonialData, src: "" };
    setTestimonialsData([...tempArr]);
    setView("main");
  }

  function handleCancle() {
    setView("main");
    setUpdateTestimonialData({
      name: "",
      designation: "",
      feedback: "",
    });
  }

  function handleAdd() {
    let tempArr = testimonialsData;
    tempArr.push({ ...newTestimonialData, src: "" });
    setTestimonialsData([...tempArr]);
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
                Edit Testimonials
              </Typography>

              <TempTable hideFilters={true} tableData={tableData} />
            </Box>
          </>
        ) : (
          <>
            <Box>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
              >
                Edit Testimonial
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
                    value={updateTestimonialData.name}
                    onChange={(e) =>
                      setUpdateTestimonialData({ ...updateTestimonialData, name: e.target.value })
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
                    designation -
                  </Typography>
                  <TextField
                    value={updateTestimonialData.designation}
                    onChange={(e) =>
                      setUpdateTestimonialData({
                        ...updateTestimonialData,
                        designation: e.target.value,
                      })
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
                    Content -
                  </Typography>
                  <TextField
                    value={updateTestimonialData.feedback}
                    onChange={(e) =>
                      setUpdateTestimonialData({
                        ...updateTestimonialData,
                        feedback: e.target.value,
                      })
                    }
                    multiline
                    rows={"5"}
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
        )}
      </Box>
    </>
  );
};

export default ManageTestimonialsEdit;
