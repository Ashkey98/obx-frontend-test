import React from "react";
import AdminLogin from "../layout/AdminLogin";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";

const AdminLoginPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Admin Login" />
      <AdminLogin />
      <Footer />
    </>
  );
};

export default AdminLoginPage;
