import React, { useState } from "react";
import Header from "../../layout/Generic/Header";
import Dashboard from "../../components/Dashboard";
import Footer from "../../layout/Generic/Footer";

// Buyer Imports
import {
  agentColor,
  agentMenuIcons,
  agentMenuItems,
  agentTest1,
  agentTest2,
  agentTest3,
  facilityMenuIcons,
  facilityMenuItems,
  managerTest1,
  managerTest2,
  managerTest3,
} from "../../components/Dashboard/dashboardImports";
import AgentViews from "../../components/Dashboard/views/agent/AgentViews";
import ManagerViews from "../../components/Dashboard/views/manager/ManagerViews";

const AgentTest1 = () => {
  const [view, setView] = useState("Dashboard");
  const data1 = [agentMenuIcons, agentMenuItems, agentTest1];
  const data2 = [agentMenuIcons, agentMenuItems, agentTest2];
  const data3 = [agentMenuIcons, agentMenuItems, agentTest3];
  const data4 = [facilityMenuIcons, facilityMenuItems, managerTest1];
  const data5 = [facilityMenuIcons, facilityMenuItems, managerTest2];
  const data6 = [facilityMenuIcons, facilityMenuItems, managerTest3];

  return (
    <>
      <Dashboard
        data={data1}
        dashboard={<AgentViews view={view} />}
        view={view}
        setView={setView}
      />
      <Dashboard
        data={data2}
        dashboard={<AgentViews view={view} />}
        view={view}
        setView={setView}
      />
      <Dashboard
        data={data3}
        dashboard={<AgentViews view={view} />}
        view={view}
        setView={setView}
      />
      <Dashboard
        data={data4}
        dashboard={<ManagerViews view={view} />}
        view={view}
        setView={setView}
      />
      <Dashboard
        data={data5}
        dashboard={<ManagerViews view={view} />}
        view={view}
        setView={setView}
      />
      <Dashboard
        data={data6}
        dashboard={<ManagerViews view={view} />}
        view={view}
        setView={setView}
      />
    </>
  );
};

export default AgentTest1;
