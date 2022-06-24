import { styled } from "@mui/system";
import { Icon, ListItem, TextField, Typography } from "@mui/material";

export const StyledTextField = styled(TextField)({
  "&.MuiTextField-root": {
    width: "100%",
  },
});

export const StyledListItem = styled(ListItem)({
  "&.MuiListItem-root > a": {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
});

export const StyledTypography = styled(Typography)({
  "&.MuiTypography-root": {
    marginBottom: "14px",
  },
});

export const TPTypography = styled(Typography)({
  "&.MuiTypography-root": {
    marginBottom: "10px",
    fontWeight: "600",
  },
});

export const WhiteIcon = styled(Icon)({
  "&.MuiIcon-root > svg": {
    color: "white",
    lineHeight: "1",
  },
});

export const BlueIcon = styled(Icon)({
  "&.MuiIcon-root > svg": {
    color: "#2944c1",
    lineHeight: "1",
  },
});

export const StyledIcon = styled(Icon)({
  "&.MuiIcon-root > svg": {
    lineHeight: "1",
  },
});

export const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const flex = {
  display: "flex",
  alignItems: "center",
};

export const flexColumn = {
  display: "flex",
  flexDirection: "column",
};

export const flexBetween = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const flexEvenly = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

export const hidden = {
  display: "none",
  visibility: "hidden",
};
