import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import ConatinerWrapper from "../../components/ContainerWrapper";

const AboutUsLayout = () => {
  return (
    <Box>
      <ConatinerWrapper>
        <Grid container sx={{ display: "flex" }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" sx={{ marginBottom: "30px" }}>
              OBX Generating Engine
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              voluptatem molestiae ducimus ipsam modi quasi, accusantium
              quisquam qui nulla recusandae impedit, repellendus cum rerum
              earum, animi iste. Illo excepturi quis enim nihil eos consectetur
              omnis. Enim ut minus nobis impedit ex reprehenderit nemo? Neque
              provident veniam eligendi, maxime hic voluptate.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              architecto itaque quam, hic dolorum reprehenderit! Exercitationem
              nam dignissimos distinctio et eum veritatis asperiores, cupiditate
              alias obcaecati, amet fuga corrupti vitae nisi deleniti
              reprehenderit iste voluptates. Voluptates accusamus, dolorem
              delectus veritatis similique magni ratione, libero totam omnis
              saepe, pariatur explicabo nesciunt iure sint aut praesentium
              blanditiis! Odit nostrum dolor dicta totam?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              voluptatem molestiae ducimus ipsam modi quasi, accusantium
              quisquam qui nulla recusandae impedit, repellendus cum rerum
              earum, animi iste. Illo excepturi quis enim nihil eos consectetur
              omnis. Enim ut minus nobis impedit ex reprehenderit nemo? Neque
              provident veniam eligendi, maxime hic voluptate.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src="20943572.jpg" width={"100%"} height={"auto"} />
          </Grid>
        </Grid>
      </ConatinerWrapper>
    </Box>
  );
};

export default AboutUsLayout;
