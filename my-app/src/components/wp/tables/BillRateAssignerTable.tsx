import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import "../collapsibles/WorkPackageCollap.css";

function createData(
  TeamMember: string,
  WPName: string,
  ProjectShortName: string,
  StartDate: string,
  EndDate: string,
  Status: string,
  Contract: string,
  Customer: string,
  Manager: string,
  ServiceAreaLine: string

) {
  return {
    TeamMember,
    WPName,
    ProjectShortName,
    StartDate,
    EndDate,
    Status,
    Contract,
    Customer,
    Manager,
    ServiceAreaLine,
    
  };
}

// function Row(props: { row: ReturnType<typeof createData> }) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

const BillRateAssignerTable=() =>{
  return (
    <TableContainer >
      <Table sx={{ minWidth: 650 }} size="small" aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>TeamMember</TableCell>
               <TableCell align="right">DNV Grade</TableCell>
               <TableCell align="right">Education Level</TableCell>
               <TableCell align="right">Years of Development in DNV</TableCell>
               <TableCell align="right">Bill Rate Table</TableCell>
              <TableCell align="right">Bill Rate Category</TableCell>
              <TableCell align="right">Bill Rate Criteria</TableCell>
              <TableCell align="right">Curr</TableCell>
              <TableCell align="right">Bill Rate</TableCell>
              <TableCell align="right">Adjustment</TableCell>
              <TableCell align="right">Adjusted Bill Rate</TableCell>
              <TableCell align="right">Valid from</TableCell>
              <TableCell align="right">Valid To</TableCell>
              <TableCell align="right">Cost Curr </TableCell>
              <TableCell align="right">Cost Rate</TableCell>
              <TableCell align="right">Margin Per Hour</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>Einstable</TableCell>
               <TableCell align="right">10</TableCell>
               <TableCell align="right">Professor</TableCell>
               <TableCell align="right">14</TableCell>
               <TableCell align="right">vijdah123</TableCell>
              <TableCell align="right">Test[Valid from 2020]</TableCell>
              <TableCell align="right">-</TableCell>
              <TableCell align="right">INR</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">500 Amount</TableCell>
              <TableCell align="right">500.00</TableCell>
              <TableCell align="right">2022-01-04</TableCell>
              <TableCell align="right">2023-01-03</TableCell>
              <TableCell align="right">NOK </TableCell>
              <TableCell align="right">9,873.95</TableCell>
              <TableCell align="right">92.50%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BillRateAssignerTable;
