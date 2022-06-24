import React from "react";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import Directory from "../layout/Directory";
import SectionHeading from "../layout/Generic/SectionHeading";

const DirectoryPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Directory Results" />
      <Directory />
      <Footer />
    </>
  );
};

export default DirectoryPage;
