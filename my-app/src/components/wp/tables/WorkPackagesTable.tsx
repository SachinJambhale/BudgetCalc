import * as React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import WorkPackagesCollapsible from "../collapsibles/WorkPackagesCollapsible";

interface IWorkPackagesTableProps {}
const data = [
  "",
  "n/a",
  "Dnv",
  "WP4",
  "13-05-2023",
  "21-05-2023",
  "Active ",
  "T&M",
  "CTR-00101",
  "Euro",
];

//component={Paper}
const WorkPackagesTable: React.FunctionComponent<
  IWorkPackagesTableProps
> = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow sx={{ borderBottom: "1px solid #fff" }}>
              <TableCell />
              <TableCell>ProjectNumber</TableCell>
              <TableCell align="right">ProjectName</TableCell>
              <TableCell align="right">WPShortName</TableCell>
              <TableCell align="right">StartDate</TableCell>
              <TableCell align="right">EndDate</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Bill</TableCell>
              <TableCell align="right">Curr.</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return <TableCell>{row}</TableCell>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <br></br>

      <TableContainer>
        <Table aria-label="collapsible table">
          <TableRow sx={{ borderBottom: "1px solid #fff" }}>
            <TableCell />
            <TableCell>WP Number</TableCell>
            <TableCell align="right">WP Name</TableCell>
            <TableCell align="right">Project Short Name</TableCell>
            <TableCell align="right">StartDate</TableCell>
            <TableCell align="right">EndDate</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Type</TableCell>
            <TableCell align="right">Bill</TableCell>
            <TableCell align="right">Curr.</TableCell>
          </TableRow>
          <TableBody>
            {data.map((row) => {
              return <TableCell>{row}</TableCell>;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default WorkPackagesTable;
