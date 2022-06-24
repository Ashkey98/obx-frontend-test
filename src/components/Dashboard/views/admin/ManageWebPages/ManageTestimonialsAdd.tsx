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

const ManageTestimonialsAdd = () => {
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
                Add Testimonials
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
                    value={newTestimonialData.name}
                    onChange={(e) =>
                      setNewTestimonialData({ ...newTestimonialData, name: e.target.value })
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
                    value={newTestimonialData.designation}
                    onChange={(e) =>
                      setNewTestimonialData({ ...newTestimonialData, designation: e.target.value })
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
                    value={newTestimonialData.feedback}
                    onChange={(e) =>
                      setNewTestimonialData({ ...newTestimonialData, feedback: e.target.value })
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

export default ManageTestimonialsAdd;
