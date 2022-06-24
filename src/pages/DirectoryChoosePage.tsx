import React from "react";
import DirectoryChoose from "../layout/DirectoryChoose";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";

const DirectoryChoosePage = () => {
  return (
    <>
      <Header />
      <SectionHeading title={"Directory"} />
      <DirectoryChoose />
      <Footer />
    </>
  );
};

export default DirectoryChoosePage;
