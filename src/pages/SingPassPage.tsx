import React from "react";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";
import SingPass from "../layout/SingPass";

const SingPassPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Sigin with SingPass" />
      <SingPass />
      <Footer />
    </>
  );
};

export default SingPassPage;
