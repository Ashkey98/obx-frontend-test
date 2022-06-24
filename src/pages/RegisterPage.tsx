import React from "react";
import Register from "../layout/Register";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";

const RegisterPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Register" />
      <Register />
      <Footer />
    </>
  );
};

export default RegisterPage;
