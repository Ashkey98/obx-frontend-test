import React from "react";
import NextLink from "next/link";

// MUI
import { colors, Link as MUILink } from "@mui/material";
import { styled } from "@mui/system";

const StyledLogo = styled("div")({
  fontFamily: "Montserrat, sans-serif",
  fontSize: "30px",
  border: "1px solid #e94545",
  borderRadius: "60%",
  padding: "5px 12px",
  fontWeight: "500",
  display: "inline-block",
  "&:hover": {
    color: "#131313",
  },
});

const Logo = () => {
  return (
    <>
      <NextLink href={"/"} passHref>
        <MUILink variant="body2" sx={{ padding: "0 10px", fontWeight: "600" }}>
          <StyledLogo>OBX</StyledLogo>
        </MUILink>
      </NextLink>
    </>
  );
};

export default Logo;
