import React, { useState } from "react";
import BidForItems from "./BidForItems";
import ItemsToParticipate from "./ItemsToParticipate";
import StepsToParticipate from "./StepsToParticipate";
import TenderComplete from "./TenderComplete";
import TenderDetailsFull from "./TenderDetailsFull";
import TenderInstructions from "./TenderInstructions";
import TenderPreviewDetails from "./TenderPreviewDetails";
import UploadDocs from "./UploadDocs";

const TenderParticipation = () => {
  const [view, setView] = useState("TenderDetailsFull");

  return (
    <>
      {view === "TenderDetailsFull" ? (
        <TenderDetailsFull setView={setView} />
      ) : view === "StepsToParticipate" ? (
        <StepsToParticipate setView={setView} />
      ) : view === "ItemsToParticipate" ? (
        <ItemsToParticipate setView={setView} />
      ) : view === "BidForItems" ? (
        <BidForItems setView={setView} />
      ) : view === "UploadDocs" ? (
        <UploadDocs setView={setView} />
      ) : view === "TenderPreviewDetails" ? (
        <TenderPreviewDetails setView={setView} />
      ) : view === "TenderInstructions" ? (
        <TenderInstructions setView={setView} />
      ) : view === "TenderComplete" ? (
        <TenderComplete setView={setView} />
      ) : null}
    </>
  );
};

export default TenderParticipation;
