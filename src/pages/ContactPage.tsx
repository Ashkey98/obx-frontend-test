import React from "react";
import Contact from "../layout/Contact";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";

const ContactPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Contact Us" />
      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;
