import React from "react";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";
import Footer from "../layout/Generic/Footer";
import Cookies from "../layout/Cookies";

const CookiesPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Cookies Policy" />
      <Cookies />
      <Footer />
    </>
  );
};

export default CookiesPage;
