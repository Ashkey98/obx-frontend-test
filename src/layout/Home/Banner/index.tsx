import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#e94545",
      }}
    >
      <Box
        sx={{
          display: "flex",
          margin: "0 auto",
          maxWidth: "1600px",
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            flex: 1,
            flexBasis: "0",
            backgroundColor: "#e94545",
            padding: "10px 20px",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: {
                xs: "left",
              },
              fontSize: "18px",
            }}
          >
            SCHEDULE MAINTENANCE
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 3,
            backgroundColor: "#2944c1",
            padding: "10px 20px",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
            }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui tempore corrupti vitae?
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
