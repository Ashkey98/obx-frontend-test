import React from "react";
import Login from "../layout/Login";
import SectionHeading from "../layout/Generic/SectionHeading";
import Header from "../layout/Generic/Header";
import Footer from "../layout/Generic/Footer";

const LoginPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Login" />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
