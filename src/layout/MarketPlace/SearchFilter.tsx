import { Divider, styled } from "@mui/material";
import { Paper, Typography } from "@mui/material";

interface SearchFilterProps {
  children: React.ReactNode | React.ReactNode[] | JSX.Element | JSX.Element[];
}

export const StyledPaper = styled(Paper)(({ theme }) => ({
  "&.MuiPaper-root": {
    borderRadius: "0px",
    padding: "16px 12px",
  },
}));
const SearchFilter = ({ children }: SearchFilterProps) => {
  function handleRest() {}

  return (
    <>
      <StyledPaper
        elevation={3}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "600",
          }}
        >
          Search Filter
        </Typography>
        <Typography
          onClick={handleRest}
          variant="caption"
          sx={{ color: "blue", cursor: "pointer", fontSize: "14px" }}
        >
          Reset
        </Typography>
      </StyledPaper>
      <Divider />
      <StyledPaper
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {children}
      </StyledPaper>
    </>
  );
};

export default SearchFilter;
