import React from "react";
import FAQ from "../layout/FAQ";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";

const FAQPage = () => {
  return (
    <div>
      <Header />
      <SectionHeading title="FAQ" />
      <FAQ />
      <Footer />
    </div>
  );
};

export default FAQPage;
