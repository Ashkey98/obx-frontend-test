import React, { useEffect, useState } from "react";
import Header from "../../layout/Generic/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../layout/Generic/Footer";
import AdminViews from "../../components/Dashboard/views/admin/AdminViews";

// Buyer Imports
<<<<<<< HEAD
import { adminColor, adminMenuOptions } from "../../components/Dashboard/dashboardImports";

const AdminDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [adminMenuOptions, adminColor];
=======
import {
  adminColor,
  adminMenuIcons,
  adminMenuItems,
} from "../../components/Dashboard/dashboardImports";

const AdminDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [adminMenuIcons, adminMenuItems, adminColor];
>>>>>>> initial commit

  useEffect(() => {
    localStorage.setItem("color", "#222f3e");
  }, []);

  return (
    <>
      <Header />
      <Dashboard data={data} dashboard={<AdminViews view={view} />} view={view} setView={setView} />
      <Footer />
    </>
  );
};

export default AdminDashboardPage;
