// MUI
import { Link as MUILink, styled } from "@mui/material";

interface NextLinkProps {
  children: React.ReactNode;
}

export const StyledMuiLink = styled(MUILink)(({ theme }) => ({
  "&.MuiLink-root": {
    fontWeight: "400",
    fontSize: "14px",
    cursor: "pointer",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const TableView = ({ children }: NextLinkProps) => {
  return <StyledMuiLink>{children}</StyledMuiLink>;
};

export default TableView;
