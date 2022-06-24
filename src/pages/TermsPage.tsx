import React from "react";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";
import Footer from "../layout/Generic/Footer";
import Terms from "../layout/Terms";

const TermsPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Terms and Conditions" />
      <Terms />
      <Footer />
    </>
  );
};

export default TermsPage;
