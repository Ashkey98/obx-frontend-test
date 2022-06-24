import * as React from "react";
import type { NextPage } from "next";
import ContainerWrapper from "../src/components/ContainerWrapper";
import AgentTest1 from "../src/pages/Dashboards/AgentTest1";

const setView = () => {
  alert("test");
};
const FAQ: NextPage = () => {
  return (
    <ContainerWrapper>
      <AgentTest1 />
    </ContainerWrapper>
  );
};

export default FAQ;
