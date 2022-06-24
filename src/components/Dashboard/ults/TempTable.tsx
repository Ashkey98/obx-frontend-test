import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Divider, IconButton, MenuItem, TextField, Typography } from "@mui/material";

import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";

import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { flex } from "../../../styles/styles";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

interface TempTableProps {
  tableData: {
    headings: Array<any>;
    rowsData: Array<any>;
    width?: number;
  };
<<<<<<< HEAD
  hideFilters?: boolean;
  hidePagination?: boolean;
}

export default function TempTable({ tableData, hideFilters, hidePagination }: TempTableProps) {
=======
}

export default function TempTable({ tableData }: TempTableProps) {
>>>>>>> initial commit
  const [color, setColor] = useState("");
  useEffect(() => {
    let color = localStorage.getItem("color");
    if (color) {
      setColor(color);
    }
  }, []);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: color ? color : "inherit",
      color: "white",
      padding: "10px 14px",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      padding: "10px 14px",
      width: "10px",
    },
  }));
  const { headings, rowsData, width } = tableData;

  const currencies = [
    {
      value: "A-Z",
      label: "A-Z",
    },
    {
      value: "Z-A",
      label: "Z-A",
    },
    {
      value: "Tender Id",
      label: "Tender Id",
    },
    {
      value: "Registerd Date",
      label: "Registerd Date",
    },
  ];

  // pagination

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rowsData.length) : 0;

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // pagination

  return (
    <>
<<<<<<< HEAD
      {!hideFilters ? (
        <>
          <Box
            sx={{
              ...flex,
              alignItems: {
                xs: "left",
                md: "center",
              },
              gap: {
                xs: 3,
                md: 0,
              },
              justifyContent: "space-between",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Box
              sx={{
                flex: 1,
                maxWidth: "200px",
              }}
            >
              <TextField
                fullWidth
                id="filled-select-currency"
                select
                label="Sortby"
                variant="outlined"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box
              sx={{
                ...flex,
                gap: "20px",
                flexDirection: {
                  xs: "column",
                  md: "row",
                },
                alignItems: {
                  xs: "flex-start",
                  md: "center",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Filter : &nbsp;
              </Typography>
              <Box
                sx={{
                  ...flex,
                  gap: {
                    xs: 3,
                    md: 0,
                  },
                  justifyContent: "space-between",
                  flexDirection: {
                    xs: "column",
                    md: "row",
                  },
                }}
              >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  label="from"
                  variant="outlined"
                />
                <TextField
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  label="to"
                  variant="outlined"
                />
              </Box>
              <Button
                sx={{
                  alignSelf: {
                    xs: "flex-start",
                    md: "stretch",
                  },
                  padding: {
                    xs: "10px 20px",
                    md: "0 20px",
                  },
                  backgroundColor: color ? color : "inherit",
                }}
                variant="contained"
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  Search
                </Typography>
              </Button>
            </Box>
          </Box>
          <br />
        </>
      ) : null}
=======
      <Box
        sx={{
          ...flex,
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            flex: 1,
            maxWidth: "200px",
          }}
        >
          <TextField fullWidth id="filled-select-currency" select label="Sortby" variant="outlined">
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        <Box
          sx={{
            ...flex,
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Filter : &nbsp;
          </Typography>
          <TextField
            InputLabelProps={{ shrink: true }}
            type="date"
            label="from"
            variant="outlined"
          />
          <TextField InputLabelProps={{ shrink: true }} type="date" label="to" variant="outlined" />
          <Button
            sx={{
              alignSelf: "stretch",
              padding: "0 20px",
              backgroundColor: color ? color : "inherit",
            }}
            variant="contained"
          >
            <Typography
              sx={{
                fontWeight: "600",
              }}
            >
              Search
            </Typography>
          </Button>
        </Box>
      </Box>
      <br />
>>>>>>> initial commit
      <TableContainer
        component={Paper}
        sx={{
          " ::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            backgroundColor: "lightgray",
          },
          "::-webkit-scrollbar": {
            width: "14px",
          },
        }}
      >
        <Table sx={{ minWidth: width ? width : 900 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {headings.map((heading: string, index: React.Key) => {
                return (
                  <StyledTableCell>
                    <Typography>{heading}</Typography>
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rowsData.map((data: object, index: React.Key) => {
              return (
                <StyledTableRow key={index}>
                  {Object.entries(data).map(([key, value], index) => (
                    <StyledTableCell key={index}>
                      <Typography>{value}</Typography>
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
<<<<<<< HEAD
        {!hidePagination ? (
          <>
            <Divider />
            <TableFooter
              sx={{
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, 50]}
                  colSpan={3}
                  count={rowsData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </>
        ) : null}
=======
        <Divider />
        <TableFooter
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              colSpan={3}
              count={rowsData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
>>>>>>> initial commit
      </TableContainer>
    </>
  );
}
