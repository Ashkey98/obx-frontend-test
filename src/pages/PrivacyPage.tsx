import React from "react";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";
import Footer from "../layout/Generic/Footer";
import Privacy from "../layout/Privacy";

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Privacy Policy" />
      <Privacy />
      <Footer />
    </>
  );
};

export default PrivacyPage;
