import React from "react";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";
import TenderParticipation from "../layout/TenderParticipation";

const TenderParticipationPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title={"Tender Participation"} />
      <TenderParticipation />
      <Footer />
    </>
  );
};

export default TenderParticipationPage;
