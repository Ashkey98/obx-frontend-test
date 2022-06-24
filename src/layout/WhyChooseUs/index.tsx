import { Button, Grid, List, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import ContainerWrapper from "../../components/ContainerWrapper";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/system";
import theme from "../../theme";

const WhyChooseUs = () => {
  const listData = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos corporis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos corporis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos corporis.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos corporis.",
  ];
  return (
    <>
      <ContainerWrapper>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h2">
              Why Buyer and Seller joined in OBX
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
              harum molestiae dolores earum! Vel quisquam laboriosam eveniet,
              est adipisci placeat voluptatibus delectus eaque dolor architecto
              nesciunt eos totam quidem hic earum! Error ipsam quaerat dolor,
              nam minus eaque, possimus repellat laboriosam iure suscipit in
              earum blanditiis ad voluptas expedita eligendi, quam tenetur dicta
              rerum dolore animi tempora quia quas eos. Voluptatem laboriosam
              neque delectus voluptas a maxime eligendi laborum voluptates, et
              perferendis veritatis dolore blanditiis aliquam doloremque
              reiciendis porro iure, distinctio culpa repellendus ad. Cum quam
              odio consequatur sunt repellat, quod, doloremque fugiat, velit sit
              nobis maxime modi id a?
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            padding: "64px 0",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h2">Buyer Benefits</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              iusto delectus iure pariatur dolore cum laudantium optio veniam?
              Sed neque aspernatur impedit non magni aliquam id nobis, quas
              inventore quam!
            </Typography>
            <List>
              {listData.map((data, index) => {
                return (
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      padding: "0",
                      marginBottom: "16px",
                    }}
                    key={index}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "36px",
                      }}
                    />
                    <Typography variant="body1">{data}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="why_choose.jpg" alt="" width={"100%"} />
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            backgroundColor: "#4338ca",
            color: "white",
            display: "flex",
            alignItems: "center",
            padding: "40px",
            borderRadius: "20px",
          }}
        >
          <Grid
            item
            xs={12}
            md={9}
            sx={{
              flexGrow: "2",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "500",
                fontSize: "24px",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              praesentium deleniti, minima impedit necessitatibus adipisci cum
              culpa omnis corrupti aperiam quasi suscipit eaque illum ad cumque
              nam asperiores id perferendis eum! Nostrum, debitis assumenda
              earum aliquam eaque ea non in!
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              columnGap: "20px",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                padding: "12px 40px",

                ":hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                Login
              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                backgroundColor: "white",
                color: theme.palette.primary.main,
                padding: "12px 40px",
                fontSize: "22px",
                ":hover": {
                  backgroundColor: "white",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: "20px",
                  color: theme.palette.primary.main,
                }}
              >
                Register
              </Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            padding: "64px 0",
          }}
        >
          <Grid item xs={12} md={6}>
            <img src="seller_benefits.jpg" alt="" width={"100%"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2">Seller Benefits</Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
              iusto delectus iure pariatur dolore cum laudantium optio veniam?
              Sed neque aspernatur impedit non magni aliquam id nobis, quas
              inventore quam!
            </Typography>
            <List>
              {listData.map((data, index) => {
                return (
                  <ListItem
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      padding: "0",
                      marginBottom: "16px",
                    }}
                    key={index}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "36px",
                      }}
                    />
                    <Typography variant="body1">{data}</Typography>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
        <Box>
          <Typography variant="h2">
            Fast Growth in OBX with more Advantages
          </Typography>
          <img src="timeline.jpg" alt="" width={`100%`} />
        </Box>
      </ContainerWrapper>
    </>
  );
};

export default WhyChooseUs;
