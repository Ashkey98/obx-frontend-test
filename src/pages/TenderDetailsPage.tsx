import React from "react";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";
import TenderDetails from "../../src/layout/TenderDetails";
import Footer from "../layout/Generic/Footer";

const TenderDetailsPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Tender Details" />
      <TenderDetails />
      <Footer />
    </>
  );
};

export default TenderDetailsPage;
