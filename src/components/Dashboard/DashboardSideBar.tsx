<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> initial commit
import { Box } from "@mui/system";
import MenuItem from "./MenuItem";

interface DashboardSideBarProps {
  data: Array<any>;
  view: String;
  setView: any;
}

const DashboardSideBar = ({ data, view, setView }: DashboardSideBarProps) => {
<<<<<<< HEAD
  const menuOptions = data[0];
  const bgColor = data[1][0];
  const activeBg = data[1][1];
  const textColor = data[1][2];
  const textActiveColor = data[1][3];
  const borderColor = data[1][4];
  const [checked, setChecked] = useState(false);
=======
  const buyerMenuIcons = data[0];
  const buyerMenuItems = data[1];
  const bgColor = data[2][0];
  const activeBg = data[2][1];
  const textColor = data[2][2];
  const textActiveColor = data[2][3];
  const borderColor = data[2][4];
>>>>>>> initial commit

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          lg: "flex",
        },
        visibility: {
          xs: "hidden",
          lg: "visible",
        },
      }}
    >
      <Box
        sx={{
          width: "246px",
          boxShadow: 1,
          flexDirection: "column",
          background: bgColor,
          display: {
            xs: "none",
            lg: "flex",
          },
          visibility: {
            xs: "hidden",
            lg: "visible",
          },
        }}
      >
<<<<<<< HEAD
        {menuOptions.map((data: any, index: React.Key) => {
=======
        {buyerMenuIcons.map((icon: any, index: React.Key) => {
>>>>>>> initial commit
          return (
            <Box key={index}>
              <MenuItem
                view={view}
                setView={setView}
<<<<<<< HEAD
                menuOptions={data}
=======
                title={buyerMenuItems[index]}
                icon={icon}
>>>>>>> initial commit
                activeBg={activeBg}
                textColor={textColor}
                textActiveColor={textActiveColor}
                borderColor={borderColor}
<<<<<<< HEAD
                checked={checked}
                setChecked={setChecked}
=======
>>>>>>> initial commit
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default DashboardSideBar;
