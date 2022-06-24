import React from "react";
import ContainerWrapper from "../../../components/ContainerWrapper";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Testimonials = () => {
  const testimonialsData = [
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

  return (
    <Box
      sx={{
        background: "#eff2f9",
      }}
    >
      <ContainerWrapper>
        <>
          <Typography variant="h2" sx={{ marginBottom: "40px", textAlign: "center" }}>
            What people are saying
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: {
                xs: "20px",
                lg: "0",
              },
              flexDirection: {
                xs: "column",
                lg: "row",
              },
            }}
          >
            <Swiper
              style={{ width: "100%", height: "100%", padding: "30px 0" }}
              loop={true}
              slidesPerView={1}
              spaceBetween={10}
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >
              {testimonialsData.map((testimonial, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Paper
                      elevation={3}
                      sx={{
                        display: "flex",
                        padding: "28px 20px",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        borderRadius: "20px",
                        alignItems: "center",
                        background: "white",
                        gap: "20px",
                        margin: "0px 20px",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: "80px",
                          height: "80px",
                        }}
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "22px",
                            color: "#131313",
                            textAlign: "center",
                          }}
                        >
                          {testimonial.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "16px",
                            color: "#e94545",
                            fontWeight: "600",
                            textAlign: "center",
                          }}
                        >
                          {testimonial.designation}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          color: "grey",
                          textAlign: "center",
                          fontWeight: "400",
                        }}
                      >
                        {testimonial.feedback}
                      </Typography>
                    </Paper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </>
      </ContainerWrapper>
    </Box>
  );
};

export default Testimonials;
