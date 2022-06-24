import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import theme from "../theme";
import { Divider } from "@mui/material";

interface AccordionProps {
  title: string;
  children: JSX.Element | JSX.Element[] | React.ReactNode;
}

const Accordions = ({ title, children }: AccordionProps) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: "white",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon htmlColor="white" />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          sx={{
            ".MuiAccordionSummary-content > p": {
              flex: "1",
            },
          }}
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            backgroundColor: "white",
            color: "black",
          }}
        >
          {children}
        </AccordionDetails>
      </Accordion>
      <Divider />
    </>
  );
};

export default Accordions;
