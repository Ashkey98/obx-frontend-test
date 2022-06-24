import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

interface CustomTableProps {
  headings: Array<string>;
  rowData: Array<any>;
}

const CustomTable = ({ headings, rowData }: CustomTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {headings.map((heading, index) => {
              return <TableCell key={index}>{heading}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((data: any, index) => {
            return (
              <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                {/* {Object.entries(data).map(([key:any, data:any], index: React.key) => {
                  <TableCell key={index} component="th" scope="row">
                    32434
                  </TableCell>;
                })} */}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
