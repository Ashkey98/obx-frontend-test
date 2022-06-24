import React, { useEffect, useState } from "react";
import Header from "../../layout/Generic/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../layout/Generic/Footer";
import SellerViews from "../../components/Dashboard/views/seller/SellerViews";

// Buyer Imports
import {
  
  tenderGenerationMenuItems,
} from "../../components/Dashboard/dashboardImports";
import TenderGenerationViews from "../../components/TenderGeneration/TenderGenerationViews";
import {
  buyerColor,
  buyerMenuIcons,
  buyerMenuItems,
} from "../../components/Dashboard/dashboardImports";
const TenderGenerationDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [ buyerMenuIcons,tenderGenerationMenuItems,buyerColor];

  useEffect(() => {
    localStorage.setItem("color", "#2e86de");
  }, []);

  return (
    <>
      <Header />
      <Dashboard
        data={data}
        dashboard={<TenderGenerationViews view={view} />}
        view={view}
        setView={setView}
      />
      <Footer />
    </>
  );
};

export default TenderGenerationDashboardPage;
