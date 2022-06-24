import React from "react";
import Announcments from "../layout/Announcments";
import Footer from "../layout/Generic/Footer";
import Header from "../layout/Generic/Header";
import SectionHeading from "../layout/Generic/SectionHeading";

const AnnouncementsPage = () => {
  return (
    <>
      <Header />
      <SectionHeading title="Announcements" />
      <Announcments />
      <Footer />
    </>
  );
};

export default AnnouncementsPage;
