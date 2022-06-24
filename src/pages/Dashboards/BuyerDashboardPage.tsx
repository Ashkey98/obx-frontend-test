import React, { useEffect, useState } from "react";
import Header from "../../layout/Generic/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../layout/Generic/Footer";
import BuyerViews from "../../components/Dashboard/views/buyer/BuyerViews";

// Buyer Imports
<<<<<<< HEAD
import { buyerColor, buyerMenuOptions } from "../../components/Dashboard/dashboardImports";

const BuyerDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [buyerMenuOptions, buyerColor];
=======
import {
  buyerColor,
  buyerMenuIcons,
  buyerMenuItems,
} from "../../components/Dashboard/dashboardImports";

const BuyerDashboardPage = () => {
  const [view, setView] = useState("Dashboard");
  const data = [buyerMenuIcons, buyerMenuItems, buyerColor];
>>>>>>> initial commit

  useEffect(() => {
    localStorage.setItem("color", "#2f80ed");
  }, []);

  return (
    <>
      <Header />
      <Dashboard data={data} dashboard={<BuyerViews view={view} />} view={view} setView={setView} />
      <Footer />
    </>
  );
};

export default BuyerDashboardPage;
