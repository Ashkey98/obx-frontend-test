import React from "react";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";
import WhyChooseUs from "../layout/WhyChooseUs";

const WhyChooseUsPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="OBX Features" />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default WhyChooseUsPage;
