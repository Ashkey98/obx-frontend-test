import React, { useState } from "react";
import { Button, Collapse, Typography } from "@mui/material";
<<<<<<< HEAD
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DropdownMenu from "../DropdownMenu";
=======
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
>>>>>>> initial commit

interface MenuItemProps {
  textColor: string;
  textActiveColor: string;
<<<<<<< HEAD
  menuOptions: any;
=======
  title: any;
  icon: any;
>>>>>>> initial commit
  view?: String;
  setView: any;
  activeBg: string;
  borderColor: string;
<<<<<<< HEAD
  checked: boolean;
  setChecked: any;
}

const MenuItem = ({
  menuOptions,
=======
}

const MenuItem = ({
  title,
  icon,
>>>>>>> initial commit
  view,
  setView,
  textColor,
  textActiveColor,
  activeBg,
  borderColor,
<<<<<<< HEAD
  checked,
  setChecked,
}: MenuItemProps) => {
  const title = menuOptions[0];

  const handleChange = () => {
    setChecked(!checked);
=======
}: MenuItemProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
>>>>>>> initial commit
  };
  const handleMenuItemClick = () => {
    setView(title);
    setChecked(false);
  };

  return (
    <>
      <Button
        onClick={() => {
<<<<<<< HEAD
          menuOptions.length === 2 ? handleMenuItemClick() : handleChange();
        }}
        sx={{
          "&.MuiButton-root": {
            gap: "5px",
=======
          typeof title === "object" ? handleChange() : handleMenuItemClick();
        }}
        sx={{
          "&.MuiButton-root": {
            gap: typeof title === "object" ? "0" : "5px",
>>>>>>> initial commit
          },
          color: view === title ? textColor : textActiveColor,
          borderBottom: `1px solid ${borderColor}`,
          width: "100%",
          padding: "14px 20px",
          justifyContent: "left",
          gap: "5px",
          backgroundColor: view === title ? activeBg : "none",
          ":hover": {
            borderBottom: `1px solid ${borderColor}`,
            backgroundColor: view === title ? activeBg : "rgba(41, 68, 193, 0.3)",
          },
        }}
      >
<<<<<<< HEAD
        {menuOptions[1]}
        <Typography>{menuOptions[0]}</Typography>
        {menuOptions.length === 3 ? (
=======
        {icon.length > 1 ? <>{icon[0]}&nbsp;</> : icon}
        <Typography>{typeof title === "object" ? title.name : title}</Typography>
        {typeof title === "object" ? (
>>>>>>> initial commit
          checked ? (
            <KeyboardArrowDownIcon />
          ) : (
            <KeyboardArrowRightIcon />
          )
        ) : null}
      </Button>
<<<<<<< HEAD
      {menuOptions.length === 3 ? (
        <DropdownMenu
          checked={checked}
          textActiveColor={textActiveColor}
          textColor={textColor}
          view={view}
          setView={setView}
          menuOptions={menuOptions}
          activeBg={activeBg}
        />
      ) : null}
=======
      <Collapse in={checked}>
        {typeof title === "object"
          ? title.options.map((data: string, index: React.Key) => {
              return (
                <Button
                  key={index}
                  onClick={() => {
                    setView(data);
                  }}
                  sx={{
                    "&.MuiButton-root": {
                      gap: typeof title === "object" ? "0" : "5px",
                    },
                    color: view === data ? textColor : textActiveColor,
                    width: "100%",
                    padding: "14px 20px",
                    justifyContent: "left",
                    gap: "5px",
                    backgroundColor: view === data ? activeBg : "none",
                    ":hover": {
                      backgroundColor:
                        view === data ? "rgba(41, 68, 193, 1)" : "rgba(41, 68, 193, 0.3)",
                    },
                  }}
                >
                  {icon[1][index]} &nbsp;
                  <Typography>{data}</Typography>
                </Button>
              );
            })
          : null}
      </Collapse>
>>>>>>> initial commit
    </>
  );
};

export default MenuItem;
