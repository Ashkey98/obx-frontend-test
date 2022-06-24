import NextLink from "next/link";

// MUI
import { Link as MUILink, styled } from "@mui/material";

interface NextLinkProps {
  children: JSX.Element | JSX.Element[] | React.ReactNode;
  linkPath: string;
  styles?: object;
}

export const StyledMuiLink = styled(MUILink)(({ theme }) => ({
  "&.MuiLink-root": {
    "&:hover": {
      color: theme.palette.secondary.main,
    },
  },
}));

const NavLink = ({ linkPath, styles, children }: NextLinkProps) => {
  return (
    <>
      <NextLink href={linkPath} passHref>
        <StyledMuiLink variant="body2" sx={styles}>
          {children}
        </StyledMuiLink>
      </NextLink>
    </>
  );
};

export default NavLink;
