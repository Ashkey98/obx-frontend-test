import { Box } from "@mui/system";
import React from "react";

interface TPBoxProps {
  children: React.ReactNode;
  styles?: object;
}

const TPBox = ({ children, styles }: TPBoxProps) => {
  return (
    <Box
      sx={{
        boxShadow: 1,
        padding: "20px",
        backgroundColor: "white",
        border: "1px solid lightgray",
        ...styles,
      }}
    >
      {children}
    </Box>
  );
};

export default TPBox;
