import React from "react";
import { Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { flexBetween } from "../../../styles/styles";

interface TitleProps {
  title: String;
  children?: React.ReactNode | JSX.Element;
  divider?: Boolean;
}

const Title = ({ title, children, divider }: TitleProps) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          padding: "18px 36px",
          ...flexBetween,
          flex: 1,
        }}
      >
        <Typography
          sx={{
            color: "#493fcb",
            fontSize: "24px",
          }}
        >
          {title}
        </Typography>
        {children}
      </Box>
      {!divider ? <Divider /> : null}
    </>
  );
};

export default Title;
