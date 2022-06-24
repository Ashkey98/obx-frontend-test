import Banner from "../layout/Home/Banner";
import CTA from "../layout/Home/CTA";
import Features from "../layout/Home/Features";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import LandingPage from "../layout/Home/LandinPage";
import MileStones from "../layout/Home/MileStones";
import Partners from "../layout/Home/Partners";
import Testimonials from "../layout/Home/Testimonials";
import Works from "../layout/Home/Works";
import { Avatar, Box } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Header />
        <LandingPage />
        <Banner />
        <Works />
        <Features />
        <MileStones />
        <Testimonials />
        <Partners />
        <CTA />
        <Footer />
        <Box
          sx={{
            position: "fixed",
            bottom: "25px",
            left: "50px",
            cursor: "pointer",
          }}
        >
          <Avatar
            sx={{
              backgroundColor: "#2944c1",
              boxShadow: 3,
              padding: "24px",
            }}
          >
            <ChatIcon />
          </Avatar>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
