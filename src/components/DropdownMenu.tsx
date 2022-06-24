import React from "react";
import { Button, Collapse, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import useChecked from "../customHooks/useChecked";
import InnerDropdownMenu from "./Dashboard/InnerDropdownMenu";
import { object } from "prop-types";

interface DropdownMenuProps {
  textColor: string;
  textActiveColor: string;
  menuOptions: any;
  view?: String;
  setView: any;
  activeBg: string;
  borderColor?: string;
  checked: boolean;
}

const DropdownMenu = ({
  menuOptions,
  view,
  setView,
  textColor,
  textActiveColor,
  activeBg,
  borderColor,
  checked,
}: DropdownMenuProps) => {
  const { toggle, toggleCheck } = useChecked();

  const handleChange = () => {
    toggleCheck();
  };

  const handleMenuItemClick = (view: string) => {
    setView(view);
  };

  return (
    <>
      <Collapse in={checked}>
        {menuOptions.length === 3
          ? menuOptions[2].map((data: any, index: React.Key) => {
              return (
                <React.Fragment key={index}>
                  <Button
                    key={index}
                    onClick={() => {
                      data.length === 2 ? handleMenuItemClick(data[0]) : handleChange();
                    }}
                    sx={{
                      "&.MuiButton-root": {
                        gap: "0px",
                      },
                      color: view === data[0] ? textColor : textActiveColor,
                      width: "100%",
                      padding: "14px 20px",
                      justifyContent: "left",
                      gap: "5px",
                      backgroundColor: view === data[0] ? activeBg : "none",
                      ":hover": {
                        backgroundColor:
                          view === data[0] ? "rgba(41, 68, 193, 1)" : "rgba(41, 68, 193, 0.3)",
                      },
                    }}
                  >
                    {data[1]}&nbsp;
                    <Typography>{data[0]}</Typography>
                    {data.length === 3 ? (
                      toggle ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <KeyboardArrowRightIcon />
                      )
                    ) : null}
                  </Button>
                  {data.length === 3 ? (
                    <InnerDropdownMenu
                      toggle={toggle}
                      checked={checked}
                      textActiveColor={textActiveColor}
                      textColor={textColor}
                      view={view}
                      setView={setView}
                      menuOptions={data}
                      activeBg={activeBg}
                    />
                  ) : null}
                </React.Fragment>
              );
            })
          : null}
      </Collapse>
    </>
  );
};

export default DropdownMenu;
