import React, { useEffect, useState } from "react";
import Header from "../../layout/Generic/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../layout/Generic/Footer";
import ManagerViews from "../../components/Dashboard/views/manager/ManagerViews";

// Buyer Imports
<<<<<<< HEAD
import { facilityMenuOptions, managerColor } from "../../components/Dashboard/dashboardImports";

const FacilityDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [facilityMenuOptions, managerColor];
=======
import {
  facilityMenuIcons,
  facilityMenuItems,
  managerColor,
} from "../../components/Dashboard/dashboardImports";

const FacilityDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [facilityMenuIcons, facilityMenuItems, managerColor];
>>>>>>> initial commit

  useEffect(() => {
    localStorage.setItem("color", "#002a5f");
  }, []);

  return (
    <>
      <Header />
      <Dashboard
        data={data}
        dashboard={<ManagerViews view={view} />}
        view={view}
        setView={setView}
      />
      <Footer />
    </>
  );
};

export default FacilityDashboardPage;
