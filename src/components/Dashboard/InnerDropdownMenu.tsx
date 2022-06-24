import React from "react";
import { Button, Collapse, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface InnerDropdownMenuProps {
  textColor: string;
  textActiveColor: string;
  menuOptions: any;
  view?: String;
  setView: any;
  activeBg: string;
  borderColor?: string;
  checked: boolean;
  toggle: boolean;
}

const InnerDropdownMenu = ({
  menuOptions,
  view,
  setView,
  textColor,
  textActiveColor,
  activeBg,
  borderColor,
  checked,
  toggle,
}: InnerDropdownMenuProps) => {
  return (
    <>
      <Collapse in={toggle}>
        {menuOptions.length === 3
          ? menuOptions[2].map((data: any, index: React.Key) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setView(data[0]);
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
                  {data[1]} &nbsp;
                  <Typography>{data[0]}</Typography>
                </Button>
              );
            })
          : null}
      </Collapse>
    </>
  );
};

export default InnerDropdownMenu;
