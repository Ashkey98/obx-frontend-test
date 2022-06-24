import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContainerWrapper from "../../../components/ContainerWrapper";
import { flexColumn } from "../../../styles/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Partners = () => {
  const partners = ["singpass.png", "singpass.png", "singpass.png", "singpass.png", "singpass.png"];

  return (
    <Box>
      <ContainerWrapper>
        <Box>
          <Typography variant="h2" sx={{ marginBottom: "24px", textAlign: "center" }}>
            Our Partners
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Swiper
              style={{ width: "100%", height: "100%", padding: "30px 0" }}
              loop={true}
              slidesPerView={2}
              spaceBetween={2}
              navigation={true}
              modules={[Navigation, Autoplay]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
            >
              {partners.map((data, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Box
                      sx={{
                        ...flexColumn,
                        alignItems: "center",
                      }}
                    >
                      <img key={index} src={data} alt={data} width={80} />
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "14px",
                            md: "18px",
                          },
                          textAlign: "center",
                          fontWeight: "600",
                          marginTop: "5px",
                        }}
                      >
                        Lorem ipsum.
                      </Typography>
                    </Box>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Box>
        </Box>
      </ContainerWrapper>
    </Box>
  );
};

export default Partners;
