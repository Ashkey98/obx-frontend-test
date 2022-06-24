import React from "react";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";
import MarketPlace from "../layout/MarketPlace";

const MarketPlacePage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="MarketPlace" />
      <MarketPlace />
      <Footer />
    </>
  );
};

export default MarketPlacePage;
