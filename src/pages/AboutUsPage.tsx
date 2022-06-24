import React from "react";
import AboutUsLayout from "../layout/About/index";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";

const AboutUsPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="About Us" />
      <AboutUsLayout />
      <Footer />
    </>
  );
};

export default AboutUsPage;
