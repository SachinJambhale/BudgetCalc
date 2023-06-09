import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DownIcon from "@mui/icons-material/ArrowDropDown";
import RightIcon from "@mui/icons-material/ArrowRight";
import "./BillRateTable.css";

const BillRateTable = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <TableContainer
      className="tborder"
      sx={{ minWidth: 650 }}
      aria-label="simple table"
    >
      <Table>
        <TableHead className="tableHead">
          <TableRow>
            <TableCell
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <DownIcon /> : <RightIcon />}
              </IconButton>
            </TableCell>

            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Rate Table Name
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Category Type
            </TableCell>
            <TableCell
              align="right"
              sortDirection="asc"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              DNV Internal Category
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Bill Rate Category
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Currency
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Bill Rate
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Bill Rate Criteria
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Exp Start
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Exp End
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Valid from
            </TableCell>
            <TableCell
              align="right"
              className="tborder"
              sx={{ fontSize: "0.9rem", fontWeight: "bold" }}
            >
              Valid to
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody></TableBody>
      </Table>
    </TableContainer>
  );
};
export default BillRateTable;
