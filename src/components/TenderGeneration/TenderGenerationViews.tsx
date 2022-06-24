import React, { useState } from "react";
import { Box } from "@mui/system";
import ChooseTemplate from "./ChooseTemplate";
import FacilityParameter from "./FacilityParameter";
import FilteringVendors from "./FilteringVendors";
import InputSchedule from "./InputSchedule";
import Invite from "./Invite";
import Outcomes from "./Outcomes";
import PerformanceManagement from "./PerformanceManagement";
import PricingModel from "./PricingModel";
import ScopeOfWork from "./ScopeOfWork";
import TenderEvaluation from "./TenderEvaluation";
import TenderTypes from "./TenderType";
import Validity from "./Validity";

interface TenderGenerationViewProps {
  view: String;
}

const TenderGenerationViews = ({ view }: TenderGenerationViewProps) => {

  return (
    <>
      <Box sx={{ background: "white", alignSelf: "stretch" }}>

      {view === "Tender Types" ? (
        <TenderTypes  />
      ) : view === "Invite" ? (
        <Invite  />
      ) : view === "Validity" ? (
        <Validity  />
      ) : view === "Facility Parameter" ? (
        <FacilityParameter  />
      ) : view === "Scope Of Work" ? (
        <ScopeOfWork  />
      ) : view === "Outcomes" ? (
        <Outcomes  />
      ) : view === "PerformanceManagement" ? (
        <PerformanceManagement  />
      // ) : view === "Input Schedule" ? (
      //   <InputSchedule  />
      ) 
      //   : view === "Pricing Model" ? (
      //   <PricingModel  />
      // ): view === "Filtering Vendors" ? (
      //   <FilteringVendors  />
      // )
      // : view === "Tender Evaluation" ? (
      //   <TenderEvaluation  />
      // )
      : view === "Choose Template" ? (
        <ChooseTemplate  />
      )
       : null}
      
      </Box>
    </>

  );
};

export default TenderGenerationViews;
